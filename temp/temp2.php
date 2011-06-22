<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

$element['type'] = 'Type';
$element['uid'] = '11';
$element['userName'] = 'youngmin';
$element['comment'] = 'ACCCCCC ADDDSDSDFSDF';
$ret_array['11'] = (object)$element;

$element['type'] = 'TYPE2';
$element['uid'] = '2';
$element['userName'] = 'aceknife';
$element['comment'] = 'DDDDDDD ADDDSDSDFSDF';
$ret_array['2'] = (object)$element;

echo gettype($ret_array);

echo drupal_to_js($ret_array);
echo '<br/>';
echo json_encode($ret_array);

$temp = array();
$temp = array('11' => (object)$element, '22' => (object)$element);

echo '<br/>';
echo $temp[11]->uid;
echo '<br/>';
echo $temp[11]->type;

?>

