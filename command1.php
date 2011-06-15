<?php
include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

setlocale(LC_ALL, 'ko_KR.UTF-8');

global $user;
module_load_include('inc', 'tvchat');

$account = user_load(11);
$sender_jid = $account->jid.'@newbiz.uangel.com';

$uids = tvchat_friends_uid_list();
foreach ($uids as $uid) {
    $_query = sprintf("SELECT count(sid) FROM sessions WHERE uid = %d", $uid);

    $result = db_result(db_query($_query));

    if ($result > 0) {
        $account_receiver = user_load($uid); 
        $receiver_jid = $account_receiver->jid.'@newbiz.uangel.com';
        $message = sprintf(' %s님이 로그인하셨습니다.', $account->profile_nickname);

        $command = sprintf('echo newbiz.123 | sudo -S /usr/sbin/ejabberdctl send_message_chat %s %s "%s"', $sender_jid, $receiver_jid, $message);

        echo $command;

        $outPut = shell_exec($command);

        return true;
    } else {
        return false;
    }
}

?>
