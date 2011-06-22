<?php

// echo $_SERVER['HTTP_HOST'];

$data = 'echo newbiz.123 | sudo -S /usr/sbin/ejabberdctl send_message_chat %s %s \'%s\'';

$command = sprintf($data, 'aaa', 'bbb', 'ccc');

echo $command;

$content = '{ "1007": { "thread_id": "1007", "unread_count": "0", "participants": "1", "mid": "1007", "picture": "http://newbiz.uangel.com/tvchat/sites/default/files/pictures/picture-11.jpg", "authorId": "11", "body": "youngmin님과 친구가 되셨습니다." }, "534": { "thread_id": "534", "unread_count": "0", "participants": "1", "mid": "534", "picture": "http://newbiz.uangel.com/tvchat/sites/default/files/pictures/picture-240.jpg", "authorId": "240", "body": "neoroman@uangel.kr님과 친구가 되셨습니다." }, "283": { "thread_id": "283", "unread_count": "0", "participants": "281", "mid": "283", "picture": "http://newbiz.uangel.com/tvchat/sites/default/files/pictures/picture-1.jpg", "authorId": "1", "body": "tvchat님이 친구 요청을 하였습니다." } }';

$element['type'] = 'Type';
$element['uid'] = '11';
$element['userName'] = 'youngmin';
$element['comment'] = 'ACCCCCC ADDDSDSDFSDF';
$ret_array['11'] = (object)$element;

$element['type'] = 'TYPE2';
$element['uid'] = '2';
$element['userName'] = 'aceknife';
$element['comment'] = 'DDDDDDD ADDDSDSDFSDF';
$ret_array['1'] = (object)$element;


?>
