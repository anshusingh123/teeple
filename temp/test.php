<?php

$time = sprintf("%02d", 9);
  
$time = sprintf("%02d", 10);

$points_history=array();

$points_history[123]['checkin'] = 1000;
$points_history[123]['comment'] = 2000;
$points_history[123]['follow'] = 3000;
$points_history[278]['checkin'] = 4000;
$points_history[9812]['comment'] = 5000;

foreach ($points_history as $key => $value) {
  echo "KEY: ".$key;
  echo "Value['checkin']: ".$value['checkin']." ";
  echo "Value['comment']: ".$value['comment']." ";
  echo "Value['follow']: ".$value['follow']." ";

  echo '\n';
}

?>
