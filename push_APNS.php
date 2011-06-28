<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

module_load_include('inc', 'privatemsg_service');
module_load_include('inc', 'privatemsg_tvchat_service');

setlocale(LC_ALL, 'ko_KR.UTF-8');

$time_interval = 20;

$from_date = time();
$to_date = $from_date + 60*$time_interval;

// query refer to list_onair_show_json_crontest 
$_query = sprintf("SELECT DISTINCT(node.nid) AS nid, node.title AS node_title, node_node_data_field_tvshow__node_data_field_date.field_date_value AS node_node_data_field_tvshow__node_data_field_date_field_date_value, node_node_data_field_tvshow__node_data_field_date.field_date_value2 AS node_node_data_field_tvshow__node_data_field_date_field_date_value2, node_node_data_field_tvshow__node_data_field_date.field_date_rrule AS node_node_data_field_tvshow__node_data_field_date_field_date_rrule, node_node_data_field_tvshow.nid AS node_node_data_field_tvshow_nid, node_node_data_field_tvshow.language AS node_node_data_field_tvshow_language, node_node_data_field_tvshow__node_data_field_date.delta AS node_node_data_field_tvshow__node_data_field_date_delta, node_node_data_field_tvshow.type AS node_node_data_field_tvshow_type, node_node_data_field_tvshow.vid AS node_node_data_field_tvshow_vid, node_node_data_field_tvshow_node_data_field_date.field_date_value AS node_node_data_field_tvshow_node_data_field_date_field_date_value FROM node node  LEFT JOIN ( content_field_tvshow node_data_field_tvshow INNER JOIN node node_node_data_field_tvshow ON node_data_field_tvshow.vid = node_node_data_field_tvshow.vid ) ON node.nid = node_data_field_tvshow.field_tvshow_nid  LEFT JOIN content_field_date node_node_data_field_tvshow__node_data_field_date ON node_node_data_field_tvshow.vid = node_node_data_field_tvshow__node_data_field_date.vid LEFT JOIN content_field_date node_data_field_date ON node.vid = node_data_field_date.vid LEFT JOIN content_field_date node_node_data_field_tvshow__node_data_field_date2 ON node_node_data_field_tvshow.vid = node_node_data_field_tvshow__node_data_field_date2.vid LEFT JOIN content_field_date node_node_data_field_tvshow_node_data_field_date ON node_node_data_field_tvshow.vid = node_node_data_field_tvshow_node_data_field_date.vid WHERE ((node.type in ('tvshow')) AND (node_node_data_field_tvshow.type in ('time_table'))) AND (node_node_data_field_tvshow__node_data_field_date.field_date_value > %d) AND (node_node_data_field_tvshow__node_data_field_date.field_date_value <= %d) GROUP BY nid ORDER BY node_node_data_field_tvshow_node_data_field_date_field_date_value DESC", $from_date, $to_date);

$result = db_query($_query);

// flag follow, fid(2) 
while ($row = db_fetch_object($result)) {
  $message = $row->node_title." (가)이 곧 시작합니다. -teeple";
  $_query = sprintf("SELECT uid FROM flag_content WHERE fid = 2 AND content_id = %d", $row->nid);

  echo "message: ".$message;
  echo "<br>";

  $result_follow = db_query($_query);
  while ($element = db_fetch_object($result_follow)) {
    $user = user_load($element->uid);

    echo "uid: ".$user->uid." name: ".$user->name;

    if (isset($user)) {
      if (!is_null($user->profile_tvshow_alarm) AND ($user->profile_tvshow_alarm == 1)) {
        if (!is_null($user->profile_APNS_token) && (strlen($user->profile_APNS_token)>0)) {
          _send_to_APNS($user->profile_APNS_token, $message, 0);
        }
      }
    }
  }
}

?>
