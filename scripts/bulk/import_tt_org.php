<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

setlocale(LC_ALL, 'ko_KR.UTF-8');

// str format YYYY-MM-DD HH:MM:SS
function convert_datetime($str) { 
  list($date, $time) = explode(' ', $str); 
  list($year, $month, $day) = explode('_', $date); 
  list($hour, $minute, $second) = explode(':', $time); 

  $timestamp = mktime($hour, $minute, $second, $month, $day, $year); 

  return $timestamp; 
} 

$operators = array();
$query = db_query('SELECT tid, name  FROM  term_data WHERE vid = 2');
while($element = db_fetch_object($query)) {
  $operators[$element->name] = $element->tid;
}

echo implode(",", $operators);

$tvshows = array();
$query = db_query("SELECT nid, title FROM node WHERE type = 'tvshow'");
while($element = db_fetch_object($query)) {
  $tvshows[$element->title] = $element->nid;
}

echo implode(",", $tvshows);

function node_setting($data, $operators, $tvshows) {

    $node = new stdClass();
    $node->uid = 1;

    $node->name = $data[4];
    $node->title = $node->name;
    $node->body = '';
    $node->type = 'time_table_test';
    $node->created = time();
    $node->changed = $node->created;
    $node->promote = 0;
    $node->sticky = 0;
    $node->format = 2;
    $node->status = 1;
    $node->language = 'en';
    $node->comment = 2;

    // Taxanomy match
    //{
     // $node->field_operator[0]['value'] = $operators['KBS1'];
    //}
    //echo "OPERATOR: ".$node->field_operator[0]['value']."<br>";

    // TVShow Match
    //{
     // $node->field_tvshow[0]['nid'] = $tvshows[$data[4]];
    //}
    //echo "TVSHOW: ".$node->field_tvshow[0]['nid']."<br>";

    //$start_datetime = $data[0]." ".$data[2].":".$data[3].":00";
    //$end_datetime = $data[0]." ".(string)((int)($data[2])+1).":".$data[3].":00";

    //echo "START_DATETIME: ".$start_datetime."<br>";
    //echo "END_DATETIME: ".$end_datetime."<br>";

    // date
    //{
     // $node->field_date[0]['value'] = convert_datetime($start_datetime);
      //$node->field_date[0]['value2'] = convert_datetime($end_datetime);

      //echo "TIMESTAMP1: ".$node->field_date[0]['value']."<br>";
      //echo "TIMESTAMP2: ".$node->field_date[0]['value2']."<br>";

      //$node->field_date[0]['timezone'] = "Asia/Seoul";
      //$node->field_date[0]['timezone_db'] = "UTC";
      //$node->field_date[0]['date_type'] = "datestamp";
    //}

}

$row = 1;
if (($handle = fopen("/var/www/tvchat/sites/default/files/Upload/test.timetable.utf8.csv", "r")) !== FALSE) {

  while (($data = fgetcsv($handle, 4096, ",")) !== FALSE) {
    $num = count($data);
    echo "<p> $num fields in line $row: <br /></p>\n";

    $row++;

    $node = node_setting($data, $operators, $tvshows);
    node_save($node);

    echo "NID: ".$node->nid."\n";
    for ($c=0; $c < $num; $c++) {
      echo $data[$c] . "<br />\n";
    }
  }
  fclose($handle);
}

?>
