<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
include_once './sites/all/modules/tvchat/tvchat.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

setlocale(LC_ALL, 'ko_KR.UTF-8');

$yesterday = time()-86400;

// do weekly work
if (date('D', $yesterday) == 'Sun') {

  // calculate tvshow, issue, user
  $prev_monday = time()-86400*7;
  $timestamp_from = mktime(0, 0, 0, date('n', $prev_monday), date('j', $prev_monday), date('Y', $prev_monday));
  $timestamp_to = $timestamp_from+86400*7;

  tvchat_calculate_ranking('tvchat_ranking_weekly', $timestamp_from, $timestamp_to);

  // master change in each nodes 
  tvchat_assign_master('tvchat_ranking_weekly', $timestamp_from, $timestamp_to);

}

?>
