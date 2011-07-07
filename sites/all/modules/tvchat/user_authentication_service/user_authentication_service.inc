<?php

function user_authentication_service_send_invite_sms($phone_numbers) {
  global $user;

  $account = user_load($user->uid);

  $CMP_USR_ID = variable_get('cmp_usr_id', '21105');
  $ODR_FG = '1';
  $SMS_GB = '1';
  $USED_CD = '00';
  $MSG_GB = 'A';
  $SND_DTTM = date('YmdHis', $curTime);
  $SND_PHN_ID = variable_get('snd_phn_id', '0317106200');
  $CALLBACK = $user->profile_phone_no;
  $url_shorten = variable_get('url_intro_shorten', 'http://tiny.cc/6g0cw');
  $EXPIRE_VAL = 0;
  $SMS_ST = '0';

  foreach ($phone_numbers as $phone_number) {
      $curTime = time();
      $CMP_MSG_ID = $curTime.substr($phone_number, 0, 10);
      $RCV_PHN_ID = $phone_number;

      $SND_MSG = sprintf(variable_get('invite_msg', '친구 %s(%s)분이 Teeple서비스(%s)에 초대하셨습니다.'), $account->profile_nickname, $account->profile_phone_no, $url_shorten);
 
      $_query = sprintf("INSERT INTO {telink_sms} ( CMP_MSG_ID, CMP_USR_ID, ODR_FG, SMS_GB, USED_CD, MSG_GB, SND_DTTM, SND_PHN_ID, RCV_PHN_ID, CALLBACK, SND_MSG, EXPIRE_VAL, SMS_ST ) values ('%s','%s','%s','%s','%s','%s', '%s', '%s','%s','%s','%s',%d,'%s')", $CMP_MSG_ID, $CMP_USR_ID, $ODR_FG, $SMS_GB, $USER_CD, $MSG_GB, $SND_DTTM, $SND_PHN_ID, $RCV_PHN_ID, $CALLBACK, $SND_MSG, $EXPIRE_VAL, $SMS_ST);

      $ret = db_query($_query);
      if (isset($ret)) { return true; }
  }
  return services_error("Invitation SMS couldn't be sent", 411);
}

function user_authentication_service_send_auth_sms($phone_number, $country_code=null){
  $rand = rand(100000, 999999);
  $_SESSION["AUTH_NUMBER"] = $rand;

  $curTime = time();

  $CMP_MSG_ID = $curTime.$curTime;
  $CMP_USR_ID = variable_get('cmp_usr_id', '21105');
  $ODR_FG = '1';
  $SMS_GB = '1';
  $USED_CD = '00';

  if(isset($country_code) && ($country_code != '82') && (strlen($country_code)>0)) {
    $MSG_GB = 'C';
    $SND_PHN_ID = variable_get('snd_phn_id_cellphone', '821087259388');
    $SND_MSG = sprintf('authentication SMS[%s].', $rand);

    if($phone_number[0] == '0') { $phone_number = substr($phone_number, 1); };
    $RCV_PHN_ID = $country_code.$phone_number;

  } else {
    $MSG_GB = 'A';
    $SND_PHN_ID = variable_get('snd_phn_id', '0317106200');
    $SND_MSG = sprintf(variable_get('auth_msg', '귀하의 인증번호는 [%s] 입니다.'), $rand);

    if($phone_number[0] != '0') { $phone_number = '0'.$phone_number; };
    $RCV_PHN_ID = $phone_number;
  }

  $SND_DTTM = date('YmdHis', $curTime);
  $CALLBACK = $SND_PHN_ID;
  $EXPIRE_VAL = 0;
  $SMS_ST = '0';

  $_query = sprintf("INSERT INTO {telink_sms} (CMP_MSG_ID, CMP_USR_ID, ODR_FG, SMS_GB, USED_CD, MSG_GB, SND_DTTM, SND_PHN_ID, RCV_PHN_ID, CALLBACK, SND_MSG, EXPIRE_VAL, SMS_ST, AUTH_NUMBER ) values ('%s','%s','%s','%s','%s','%s', '%s', '%s','%s','%s','%s',%d,'%s', %d)", $CMP_MSG_ID, $CMP_USR_ID, $ODR_FG, $SMS_GB, $USER_CD, $MSG_GB, $SND_DTTM, $SND_PHN_ID, $RCV_PHN_ID, $CALLBACK, $SND_MSG, $EXPIRE_VAL, $SMS_ST, $rand);
  $ret = db_query($_query);

  if (isset($ret)) { return true; }

  return serivces_error(t("Could not send SMS to recipient number."), 415);
}

function user_authentication_service_auth_sms($phone_number, $auth_number) {

  /*
  if (isset($_SESSION['AUTH_NUMBER'])) {
      if($authNumber == $_SESSION["AUTH_NUMBER"]) {
        return true;

      } else {
        return services_error("Authentication Number doesn't match");
      }

  } else {
  */
  $_query = sprintf("SELECT AUTH_NUMBER FROM {telink_sms} WHERE RCV_PHN_ID = '%s' ORDER BY SND_DTTM DESC", $phone_number);
  $auth_no = db_result(db_query($_query));

  if ( (isset($auth_no)) && ($auth_no > 0) && ($auth_no == $auth_number) ) {
    return true;
  }
  /*
  }
  */
  return services_error(t("Authentication Number does not match"), 477);
}

function user_authentication_service_test() {

    // return true;

  return services_error(t("Could not create destination directory for file."), 488);
}
