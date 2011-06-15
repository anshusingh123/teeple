<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

$query = db_query("SELECT n.nid FROM {node} n WHERE n.type = 'time_table'");
while ($n = db_fetch_object($query)) {
      node_delete($n->nid);
}

?>
