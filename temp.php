<?php
echo time();

$rest = substr("01087259388", 0, 10);
echo $rest;

$filename = "/var/www/tvchat/sites/default/files/TestImage3.png";
$handle = fopen($filename, "rb");
$contents = fread($handle, filesize($filename));
fclose($handle);

echo base64_encode($contents);

module_load_include('inc', 'tvchat');
module_load_include('inc', 'privatemsg_tvchat_service');

$filename = "/var/www/tvchat/sites/default/files/TestImage3.png";
$handle = fopen($filename, "rb");
$contents = fread($handle, filesize($filename));
fclose($handle);

$file = _message_save_upload("ouput_temp.png", base64_encode($contents));

$ret = privatemsg_tvchat_service_send_with_thread_id(11, "AAAAA", 19, "output_temp.png", base64_encode($contents));


?>
