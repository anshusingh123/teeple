<?php

/*
$command = sprintf('sudo /usr/sbin/ejabberdctl send_message_chat youngmin01087259388@newbiz.uangel.com tvchat01098765432@newbiz.uangel.com "영마니님이 추가되었습니다."'); 

echo $command;

$pipe = popen($command, 'r');
fwrite($pipe, "newbiz.123\r\n"); 
pclose($pipe); 
echo "done"; 
*/
$command = sprintf('echo newbiz.123 | sudo -S /usr/sbin/ejabberdctl send_message_chat youngmin01087259388@newbiz.uangel.com tvchat01098765432@newbiz.uangel.com "영마니님이 추가되었습니다."'); 

$outPut = shell_exec($command);
echo "<pre>$outPut</pre>";
?>
