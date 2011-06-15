<?
class APNS{

  $certPass     = 'uangel1004';
  $certFile     = 'dev.pem';

  function send($deviceToken, $alert, $badge, $sound){

    $deviceToken = str_replace(" ","", $deviceToken);
    $deviceToken = pack('H*', $deviceToken);

    $tmp     = array();
    if($alert)     $tmp['alert']     = $alert;
    if($badge)     $tmp['badge']     = $badge;
    if($sound)     $tmp['sound']     = $sound;

    $body['aps']     = $tmp;

    $ctx = stream_context_create();
    stream_context_set_option($ctx, 'ssl', 'local_cert', $this->certFile);
    stream_context_set_option($ctx, 'ssl', 'passphrase', $this->certPass);

    $fp = stream_socket_client('ssl://gateway.sandbox.push.apple.com:2195', $err, $errstr, 60, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) {
      print "Failed to connect $err $errstr\n";
      return;
    }       

    $payload = json_encode($body);
    $msg = chr(0) . chr(0) . chr(32) . $deviceToken . chr(0) . chr(strlen($payload)) . $payload;

    fwrite($fp, $msg);
    fclose($fp);

  }

}

$conn = new APNS;
$conn->send('1437f418c473f31044ffd78f5a781fb6f73e3ef6ed5045673c24e4dc3b6a3a7a','My Alert!', 33);

?>
