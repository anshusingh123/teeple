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

// do daily work 
$yesterday = time()-86400;

// mktime (HOUR, Minute, Second, Month, Day, Year)
$timestamp_from = mktime(0, 0, 0, date('n', $yesterday), date('j', $yesterday), date('Y', $yesterday));
$timestamp_to = $timestamp_from + 86400;

tvchat_calculate_ranking('tvchat_ranking_daily', $timestamp_from, $timestamp_to);

?>
