<?php
// $Id: user_service.inc,v 1.1.2.8.2.12 2010/10/26 23:54:21 ocyrus Exp $

/**
 * @file
 *  Link general user functionalities to services module.
 */

function _user_save_picture($uid, $fname, $picture) {

    if (!empty($fname) && !empty($picture)) {
        $file = _user_tvchat_validate_picture($fname,$picture, $uid);

       if($file == -1) {
            return -2;
            // return services_error(t('User Picture Save Error'), 405);
       } else {

            $update_set = sprintf("picture = '%s'", $file->filepath);
            $_query = sprintf("UPDATE {users} SET picture = '%s' WHERE uid = %d", $file->filepath, $form_state['user']->uid);
            db_query ($_query);
        }
    }
}

function _user_save_profile(&$edit, &$user, $category, $register = FALSE) {
    $result = _profile_get_fields($category, $register);
    while ($field = db_fetch_object($result)) {
        if(!empty($edit[$field->name])){ // this prevent from deleting other stored fields
            if (_profile_field_serialize($field->type)) {
                $edit[$field->name] = serialize($edit[$field->name]);
            }
            db_query("DELETE FROM {profile_values} WHERE fid = %d AND uid = %d", $field->fid, $user->uid);
            db_query("INSERT INTO {profile_values} (fid, uid, value) VALUES (%d, %d, '%s')", $field->fid, $user->uid, $edit[$field->name]);
        }
        // Mark field as handled (prevents saving to user->data).
        $edit[$field->name] = NULL;
    }
}
 
function _user_tvchat_validate_picture($fname, $attachment, $uid) {

  // If required, validate the uploaded picture.
  $validators = array(
    'file_validate_is_image' => array(),
    'file_validate_image_resolution' => array(variable_get('user_picture_dimensions', '85x85')),
    'file_validate_size' => array(variable_get('user_picture_file_size', '30') * 1024),
   );

  // save to temp directory 
  $file = _file_upload($fname, $attachment);

  // save to files table and files folder 
  // 
  if(!empty($file)) {
    $_FILES['files']['name']['user_picture_upload'] = $file->filename;
    $_FILES['files']['type']['user_picture_upload'] = $file->filemime;
    $_FILES['files']['tmp_name']['user_picture_upload'] = $file->filepath;
    $_FILES['files']['error']['user_picture_upload'] = 0;
    $_FILES['files']['size']['user_picture_upload'] = $file->filesize;

    $file = tvchat_file_save_upload('user_picture_upload', $validators, file_directory_path() . $dir);

    if (isset($file) && ($file != -2)){
        $file->list = 1;
        $file->description = $file->filename;
        $file->weight = 0;
        $file->new = TRUE;
    }
  }

  if (isset($file) && $file != -2) {
    $info = image_get_info($file->filepath);

    $destination = variable_get('user_picture_path', 'pictures').'/picture-'.$uid.'.'.$info['extension'];

    if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
        return $file;
    }
    else {
        return -2;
        // service_error(t('File Save Error'), 500);
    }
  } 
  return -2;
}

function _account_reset($uid, $email) {
  $ret_array = array();

  $account = user_load($uid);
  $password_tmp = user_password();
  $edit = array('name' => $account->name, 'pass' => $password_tmp);
  user_save($user, $edit);

  flag('flag', 'account_reset', null, $account);

  // password reset mail sending
  // 
  /*
  $email_to = $user->mail;
  $subject = '[teeple] password reset';
  $body = sprintf("teeple password reset.\n. password: %s\n. please enter the password in teeple application\n. Jump to Teeple: Teeple://SignIn-password:%s", $password_tmp, $password_tmp);
  $message = array( 'to' => $email_to, 'subject'=> $subject, 'body' => $body);
  //drupal_mail_send($message);
  mail($email_to, $subject, $body);
  */

  return $account;
}

/**
 * 
 *
 * This can create user depending on the
 * information passed to the function. This function uses drupal_execute()
 * and as such exepects all input to match the submitting form in question.
 *
 * @param $nick.
 *    string
 *    user name and nick name
 * @param $pass.
 *    string
 *    user password. md5 encoded.
 * @param $email
 *    string
 *    user email address
 * @param $phone_number
 *    string
 *    user phone number
 * @param $fname
 *    string
 *    user picture filename
 * @param $picture
 *    strinuser->uid
 *    user picture - base64 encoded
 * @param $token_APNS
 *    string
 *    APNS_token number
 *
 * @return
 *   The UID of the user whose information was updated.
 */
function user_tvchat_service_signup($nick, $email, $phone_number, $fname=null, $picture=null, $token_APNS=null, $status=1) {

  if((!isset($picture)) && isset($_POST['picture']) && strlen($_POST['picture'])) {
      $picture = str_replace('"', '', $_POST['picture']);
  }

  if(!valid_email_address($email)) {
      return services_error(t('The e-mail address %mail is not valid.', array('%mail' => $email)), 501);
  }

  $ret_array = array();

  $uid_by_email = db_result(db_query("SELECT uid FROM {users} WHERE LOWER(mail) = LOWER('%s')", $email));
  $uid_by_phone = db_result(db_query("SELECT uid FROM {profile_values} WHERE fid=14 AND value='%s'", $phone_number));

  // 이메일이 기존에 있을 경우
  // 
  if (!empty($uid_by_email)) {

    $account = user_load($uid_by_email);
    $account = _account_reset($uid_by_email, $email);

    $password = null;

  // 기존에 없는 사용자일 때,
  //
  } else {

    $account = empty($uid_by_phone) ? null: user_load($uid_by_phone);
    $password = user_password();

    $edit = array(
        'status' => '1',
        'name'   => $email,
        'mail'   => $email,
        'pass'   => $password
    );

    // if $account == null -> user create
    // else user update
    // 
    $user = user_save($account, $edit, null);
    if(!empty($fname) && !empty($picture)) {
        $ret = _user_save_picture($user->uid, $fname, $picture);

        if($ret < 0) {
            user_delete($user->uid);
            return services_error(t("User Picture Can't be save"), 502);
        }
    }

    profile_load_profile(&$account);
    $edit = array(
        'profile_nickname' => $nick,
        'profile_APNS_token' => $token_APNS,
        'profile_phone_no' => $phone_number
    );
    _user_save_profile($edit, $account, 'Personal information');

  }

  $ret_array = array(
    'uid' => $account->uid,
    'name' => $account->name,
    'pass' => $password,
    'jid'  => $account->uid
  );

  return $ret_array;
}

//
//
function user_tvchat_service_update($nick=null, $todayMessage=null, $fname=null, $picture=null, $message_alarm=null, $tvshow_alarm=null, $fb_id=null, $token_APNS=null, $phone_number=null, $email=null) {

  global $user;
  global $base_url;

  if((!empty($picture)) && !empty($_POST['picture'])) {
      $picture = str_replace('"', '', $_POST['picture']);
  }

  $account = user_load($user->uid);

  // user picture update
  // 
  if(!empty($fname) && !empty($picture)) {
    $ret = _user_save_picture($user->uid, $fname, $picture);

    if($ret < 0) { 
        return services_error(t("User Picture Can't be save"), 502); 
    }
  }

  // profile update
  // 
  profile_load_profile(&$account);
  $edit = array(
      'profile_nickname' => $nick,
      'profile_todayMessage' => $todayMessage,
      'profile_APNS_token' => $token_APNS,
      'profile_phone_no' => $phone_number,
      'profile_message_alarm' => $message_alarm,
      'profile_tvshow_alarm' => $tvshow_alarm
  );
  _user_save_profile($edit, $account, 'Personal information');

  $account = user_load($user->uid);
  $account->picture = empty($account->picture) ? null: $base_url.'/'.$account->picture;

  return $account;
}

/**
+ * Changes the password on the user with corresponding $uid
+ */
function user_tvchat_service_changePassword($newPassword, $uid=0) {
  global $user;

  if (!user_is_logged_in()) {
    return services_error(t('This user is not logged in.'), 403);
  }

  // If a user id other than the current user's ID is passed,
  // validate that the authenticated user has the correct 
  // permissions to read another user's messages.
  if (is_numeric($uid) && ($uid > 0) && ($uid != $user->uid)) {
    return services_error(t('User is not the same as logged in user'));
  } // Use the current user for the account.

  if ($uid == 0) { $uid = $user->uid; }
  $account = user_load($uid);

  $edit = array('pass' => $newPassword);
  $ret = user_save($account, $edit);

  if ($ret) { return TRUE; 
  } else {
      return FALSE;
  }
}

