<?php
// $Id: user_service.inc,v 1.1.2.8.2.12 2010/10/26 23:54:21 ocyrus Exp $

/**
 * @file
 *  Link general user functionalities to services module.
 */

/**
 * Save user data.
 *
 * This can create a new user or modify an existing user, depending on the
 * information passed to the function. This function uses drupal_execute()
 * and as such exepects all input to match the submitting form in question.
 *
 * @param $account
 *   An array of account information.
 *
 * @return
 *   The UID of the user whose information was saved.
 */
function user_tvchat_service_save_new($account, $fname, $picture) {

	// bhtak 2011/1/9
  // json_decode returns an object
  // watchdog('user.save1', print_r( $account,TRUE));
  // watchdog('user.save1', drupal_to_js($account));
  if (is_object($account)) {
    $account = (array)$account;
  }

  // Load the required includes for saving profile information
  // with drupal_execute().
  module_load_include('inc', 'user', 'user.pages');
  module_load_include('inc', 'tvchat');

  // if uid is present then update, otherwise insert
  $update = user_load($account['uid']);	
  $form_state = array();

  // Any logged in user is by default authenticated,
  // and leaving this role set in the user's roles array
  // causes big problems because of a FAPI hack that controls
  // this checkbox on the user create and edit form (and thus
  // causes problems with drupal_execute()). Therefore we just
  // force it to 0 here.
  if (isset($account['roles'][2])) {
    $account['roles'][2] = 0;
  }

  //  watchdog('user.save2', print_r( $update,TRUE));
  if (!isset($update->uid)) {
    // register a new user
    $form_state['values'] = $account;
    $form_state['values']['pass'] = array(
      'pass1' => $account['pass'],
      'pass2' => $account['pass'],
    );
    $form_state['values']['op'] = t('Create new account');
    $ret = drupal_execute('user_register', $form_state);
    watchdog('user.save3', 'form='.print_r( $form_state,TRUE).'ret='.print_r($ret,TRUE));
  }
  else {
    // If a profile category was passed in, use it. Otherwise default
    // to 'account' (for saving core user data.)
    $category = 'account';
    if (isset($account['category'])) {
      $category = $account['category'];
      unset($account['category']);
    }
    
    // Drop any passed in values into the $account var. Anything
    // unused by the form just gets ignored.
    foreach ($account as $key => $value) {
      $form_state['values'][$key] = $value;
    }

    // watchdog('user.save4', print_r( $account,TRUE));
    $form_state['values']['op'] = 'Save';
    $form_state['values']['_category'] = $category;
    $form_state['values']['_account'] = $account;
    $ret = drupal_execute('user_profile_form', $form_state, (object) $account, $category);
  }

  // Error if needed.
  if ($errors = form_get_errors()) {
    // watchdog('user.save5', 'errors='.print_r( $errors,TRUE));
    return services_error(implode("\n", $errors), 401);
  }
  else {

      if (isset($fname) && isset($picture)) {
        $file = _user_tvchat_validate_picture($fname,$picture, $form_state['user']->uid);

        if(!isset($file)) {
            return services_error(t('User Picture Save Error'), 405);
        } else {
            $update_set = sprintf("picture = '%s'", $file->filepath);
            $_query = sprintf("UPDATE {users} SET picture = '%s' WHERE uid = %d", $file->filepath, $form_state['user']->uid);
            db_query ($_query);
        }
      }
  }
  return $form_state['user']->uid;
}

function _user_account_update($email=null, $fname=null, $picture=null) {

  // User needs to be authenticated to proceed.
  global $user;

  $account = user_load($user->uid);

  if (is_object($account)) { $update = (array)$account; } 
  if (isset($email) && !empty($email)) { $update['mail'] = $email; }

  // Load the required includes for saving profile information
  // with drupal_execute().
  module_load_include('inc', 'user', 'user.pages');
  module_load_include('inc', 'tvchat');

  $edit = array();
  $category = 'account';

  $list = Array('name', 'mail');
  foreach($list as $key => $value) {
    if (isset($update[$value])) {
        $edit[$value] = $update[$value];
    }
  }

  if ($category == 'account') { $ret = user_save($account, $edit, $category); }

  if (isset($fname) && isset($picture)) {
    $file = _user_tvchat_validate_picture($fname,$picture, $user->uid);

    if(!isset($file)) {
        return services_error(t('User Picture Save Error'), 405);
    }
    $info = image_get_info($file->filepath);
    $query = sprintf("picture = '%s'", variable_get('user_picture_path','pictures').'/picture-'.$form_state['user']->uid.'.'.$info['extension']);                   db_query ("UPDATE {users} SET $query WHERE uid = %d", $form_state['user']->uid);
  }

  return $account->uid;

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
  if(isset($file) && ($file->filesize > 0)) {
    $_FILES['files']['name']['user_picture_upload'] = $file->filename;
    $_FILES['files']['type']['user_picture_upload'] = $file->filemime;
    $_FILES['files']['tmp_name']['user_picture_upload'] = $file->filepath;
    $_FILES['files']['error']['user_picture_upload'] = 0;
    $_FILES['files']['size']['user_picture_upload'] = $file->filesize;

    if ($file = tvchat_file_save_upload('user_picture_upload', $validators, file_directory_path() . $dir)) {
        $file->list = 1;
        $file->description = $file->filename;
        $file->weight = 0;
        $file->new = TRUE;
    }
  }

  if (isset($file)) {
    $info = image_get_info($file->filepath);
    $destination = variable_get('user_picture_path', 'pictures').'/picture-'.$uid.'.'.$info['extension'];

    if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {

        return $file;
    }
    else {
        service_error(t('File Save Error'), 500);
    }
  }
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

  if ($ret) { 
      return TRUE; 
  } else {
      return FALSE;
  }

  // update the password if password match
  /*
  db_query("UPDATE {users} SET pass='%s' WHERE uid=%d", $newPassword, $user->uid);
  */

  return TRUE;

}

function _account_reset($uid_by_email, $email) {

  $ret_array = array();

  // password reset
  // 
  $user = user_load($uid_by_email);
  $user->name = $email;
  $user->pass = user_password();
  $edit = array('name' => $user->name, 'pass' => $user->pass);
  user_save($user, $edit);

  // password reset mail sending
  // 
  $email_to = $user->mail;
  $subject = '[teeple] password reset';
  $body = sprintf("teeple password reset.\n. password: %s\n. please enter the password in teeple application\n. Jump to Teeple: Teeple://SignIn-password:%s", $user->pass, $user->pass);
  $message = array( 'to' => $email_to, 'subject'=> $subject, 'body' => $body);
  drupal_mail_send($message);

  // 
  $ret_array['uid'] = $user->uid;
  $ret_array['name'] = $user->name;
  $ret_array['pass'] = null;
  $ret_array['jid'] = $user->profile_jid;

  return $ret_array;
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

  $is_new_user = false;

  // email already exist
  // 
  if (isset($uid_by_email) && ($uid_by_email > 0)) {

    $ret_array = _account_reset($uid_by_email, $email);

  // email = different, phone_no = same
  // 
  } elseif (isset($uid_by_phone) && $uid_by_phone > 0) {

    $user = user_load($uid_by_phone);

    if ($user->status == '0') {

      watchdog('tvchat_signup', 'HERE1');

        // change the user name by email address
        // 
        $user->status = '1';
        $user->name = $email;
        $user->mail = $email;
        $user->pass = user_password();
        $edit = array('status' => '1', 'mail' => $email);
        user_save($user, $edit);

        $ret_array['uid'] = $user->uid;
        $ret_array['name'] = $user->name;
        $ret_array['pass'] = $user->pass;
        $ret_array['jid'] = $user->profile_jid;

    // new account creation 
    // 
    } else {

      watchdog('tvchat_signup', 'HERE2');

      // make a new user account
      // 
      $is_new_user = true;

      $account_tmp = new stdClass();
      $account_tmp->status = '1';
      $account_tmp->name = $email;
      $account_tmp->pass = user_password();
      $account_tmp->mail = $email;

      $uid_approved = user_tvchat_service_save_new($account_tmp, $fname, $picture);
      if ($uid_approved < 0) {
        return services_error(t('User cannot be created'));
       }
       $user = user_load($uid_approved);

       $ret_array['uid'] = $user->uid;
       $ret_array['name'] = $user->name;
       $ret_array['pass'] = $account_tmp->pass;
       $ret_array['jid'] = $user->profile_jid;
    }

  // new account creation 
  //
  } else {

    watchdog('tvchat_signup', 'HERE3');
      $is_new_user = true;

      $account_tmp = new stdClass();
      $account_tmp->status = $status;
      $account_tmp->name = $email;
      $account_tmp->pass = user_password();
      $account_tmp->mail = $email;

      watchdog('tvchat_signup', 'HERE3');

      $uid_approved = user_tvchat_service_save_new($account_tmp, $fname, $picture);
      if ($uid_approved < 0) {
        return services_error(t('User cannot be created'));
      }
      $user = user_load($uid_approved);

      $ret_array['uid'] = $user->uid;
      $ret_array['name'] = $user->name;
      $ret_array['pass'] = $account_tmp->pass;
      $ret_array['jid'] = $user->profile_jid;
  }

  watchdog('tvchat_signup', 'HERE4');

  // profile update ('Personal information' category)
  //
  $edit = array();

  if ($nick) { $edit['profile_nickname'] = $nick; }
  if ($token_APNS) { $edit['profile_APNS_token'] = $token_APNS; }
  if ($phone_number) { $edit['profile_phone_no'] = $phone_number; }
  if ($is_new_user) { $edit['profile_jid'] = $user->uid; }

  profile_save_profile($edit, $user, 'Personal information');

  return $ret_array;
}

//
function user_tvchat_service_update($nick=null, $todayMessage=null, $fname=null, $picture=null, $message_alarm=null, $tvshow_alarm=null, $fb_id=null, $token_APNS=null, $phone_number=null, $email=null) {

  global $base_url;

  if(isset($_POST['picture']) && (strlen($_POST['picture'])>0) ) {
    $picture = str_replace('"', '', $_POST['picture']);
    $picture = str_replace(' ', '+', $picture);
  }

  global $user;
  $account = user_load($user->uid);

  if ( (isset($email) && !empty($email)) 
    || (isset($fname) && !empty($fname)) 
    || isset($picture) && !empty($picture) ) {

    $ret = _user_account_update($email, $fname, $picture);

    if ($ret < 0) {
      return services_error(t('User account cannot be updated'));
    }
  }

  // profile update ('Personal information' category)
  //
  $edit = array();

  if (isset($nick)) { $edit['profile_nickname'] = $nick; }
  if (isset($todayMessage)) { $edit['profile_todayMessage'] = $todayMessage; }
  if (isset($token_APNS)) { $edit['profile_APNS_token'] = $token_APNS;}
  if (isset($phone_number)) { $edit['profile_phone_no'] = $phone_number; }
  if (isset($message_alarm)) { $edit['profile_message_alarm'] = $message_alarm;}
  if (isset($tvshow_alarm)) { $edit['profile_tvshow_alarm'] = $tvshow_alarm;}

  profile_save_profile($edit, $account, 'Personal information');

  $account = user_load($user->uid);
  $account->picture = $base_url.'/'.$account->picture;

  return $account;
}

