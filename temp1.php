<?php

// echo $_SERVER['HTTP_HOST'];

$data = 'echo newbiz.123 | sudo -S /usr/sbin/ejabberdctl send_message_chat %s %s \'%s\'';

$command = sprintf($data, 'aaa', 'bbb', 'ccc');

echo $command;

?>
