<?php
/**
  print check status
*/
function tvchat_print_checkin_count( $nid, $prompt="오늘 체크인 회수 : ")
{
  $count = _count_today_checkin( $nid);
  $output = theme( 'tvchat_checkin_count', $nid, $prompt, $count);
//  drupal_set_message( t('print checkin_count'.$output));

  return $output;
}

/*
* count the number of checkins today
*/
function _count_today_checkin( $nid)
{
  static $cache = array();
  $timestamp = mktime( 0, 0, 0);		// timestamp of today  at 0:0:0

  if (($flag = flag_get_flag( 'checkin'))) {

	if ( ! isset( $cache[$nid][$interval])) {
	  $cache[$nid][$interval] = db_result( db_query(
	    'SELECT COUNT(*) FROM {flag_content} WHERE fid=%d AND content_id=%d AND timestamp > %d', 
		$flag->fid, $nid, $timestamp));
	}

	return $cache[$nid][$interval];
  }
}


/*
	theme functions
*/
function theme_tvchat_checkin_count( $nid, $prompt, $count)
{
  $output = sprintf( '<div class="tvchat_checkin_count" id="tvchat_checkin_count_%d">%s %d</div>', 
    $nid, t( $prompt), $count);

  return $output;
}


/* 
	AJAX handler
	@return 
	HTML
*/
function tvchat_checkin_count( )
{
  $nid = $_GET['nid'];
  drupal_set_message( t('tvchat_checkin_count called, nid='.$nid));

  drupal_set_header( 'Content-Type: text/plain; charset; utf-8');
  print tvchat_print_checkin_count( $nid);
}

/*
* create check-in link
*/
function tvchat_create_checkin_link( $nid, $start_time, $end_time)
{
  $now = date( 'Hi');
	if ( $now >= $start_time && $now <= $end_time) {
/* check time first */
		print flag_create_link( 'checkin', $nid);
	}
	else {
		print '방송 시간 종료';
	}
}

/*
*/
function tvchat_is_checkin_time( $nid, $start_time, $end_time)
{
  $now = date( 'Hi');
	if ( $now >= $start_time && $now <= $end_time) {
/* check time first */
    $flag = flag_get_flag('checkin');

		global $user;

		drupal_set_message( 'checkIn: nid='.$nid.'uid='.$user->uid."flagged=".$flag->is_flagged( $nid, $user->uid));
		if ( $flag && $flag->is_flagged( $nid, $user->uid))
			return FALSE;
    return TRUE;
	}
	return FALSE;
}


/* 
	category = ( checkin_count | favorite_count | comment_count )

	defaul interval = 7 days
*/
function tvchat_get_count( $content_id, $category, $interval=7)
{
	$from_day = date( 'Y-m-d', time() - 3600*24*$interval);

	/* get count */
	$sql = sprintf( 'SELECT sum(%s) FROM tvchat_rating WHERE content_id = %d AND date >= "%s" ',
	  $category, $content_id, $from_day);
	$count = db_result( db_query( $sql));

//	drupal_set_message( t('SQL : '.$sql));

	return $count;
}

//
// returns event for the program 
//
function tvchat_get_events($nid)
{
  $events = array();
  $event_id = array();
  $event_name = array();
  $sql = 'SELECT n.nid, title FROM node n, content_field_tvshow p WHERE n.nid=p.nid and p.field_tvshow_nid = %d and n.type="event"';
  $result = db_query($sql, $nid);
  while($row = db_fetch_object($result)) {
    array_push($event_id, $row->nid);
    array_push($event_name, $row->title);
  }
  array_push($events, $event_id, $event_name); 
//  dsm(t('SQL : '.$sql));
//  dsm(join($event_id, ','));
//  dsm(join($event_name, ','));
//  dsm($events);
  return $events;
}

//
// returns friend count
//
function tvchat_get_friend_count($uid)
{
	$sql = "SELECT COUNT(*) FROM user_relationships WHERE requester_id = %d AND approved = 1";
	$num_friends = db_result(db_query($sql, $uid));
	return $num_friends;	
}

//
// returns node id
//
function tvchat_search_node($title)
{
	$token = strtok($title, " ");
	$subquery = array();
	while($token != false) {
		array_push($subquery, sprintf("SELECT nid FROM node WHERE title LIKE '%%%s%%' and type = 'tvshow'", $token));
		$token = strtok(" ");
	}
	$sql = join(" UNION ", $subquery);

	$result = db_query($sql);
	$nodes = array();
  	while($row = db_result($result)) {
    	array_push($nodes, $row);
  	}
	return $nodes;
}	

//
// returns user flagged nodes 
//
function tvchat_get_flagged_node($flag_name, $uid) {
	$sql = "SELECT content_id FROM flag_content as c, flags as f WHERE f.fid = c.fid AND name = '%s' and uid = %d"; 
	$result = db_query($sql, $flag_name, $uid);
	$nodes = array();
  while($row = db_result($result)) {
    	array_push($nodes, $row);
  }
	return $nodes;
}	

function _calculate_tvshow($table, $array_operation, $timestamp_from, $timestamp_to, $target_date, $timestamp) {

  // calculate for tvshow
  //
  $_query = sprintf("select entity_id, sum(points) points FROM userpoints_txn WHERE operation in ('%s') and time_stamp between %d and %d Group By entity_id HAVING points > 0", implode("','", $array_operation['tvshow']), $timestamp_from , $timestamp_to);
  $query = db_query($_query);

  $max_top_show = variable_get('max_top_show', 5);

  if( $table = 'tvchat_ranking_weekly') {
      $num_rows = db_affected_rows();

      while($num_rows < $max_top_show) {
          $timestamp_from = $timestamp_from - 86400 * 7;
          $_query = sprintf("select entity_id, sum(points) points FROM userpoints_txn WHERE operation in ('%s') and time_stamp between %d and %d Group By entity_id HAVING points > 0", implode("','", $array_operation['tvshow']), $timestamp_from , $timestamp_to);
          $query = db_query($_query);
          $num_rows = db_affected_rows();
      }
  }

  $count = 0;
  while($element = db_fetch_object($query)) {
    $node = node_load($element->entity_id);

    if (isset($node)) {

      if( ($table=='tvchat_ranking_weekly')&&((++$count)>($max_top_show))) {
        break;
      } 

      if (isset($node->field_genre[0]['value'])) {
          $genre = $node->field_genre[0]['value'];
      } else {
          $genre = 0;
      }

      $ranking_element = array(
        'entity_type'       => 'tvshow',
        'entity_nid'        =>  $element->entity_id,
        'entity_taxonomy'   => $genre,
        'points'            => $element->points,
        'target_date'       => $target_date,
        'timestamp'         => $timestamp
      );

      drupal_write_record($table, $ranking_element);

    }
  }
}

function _calculate_isse($table, $timestamp_from, $timestamp_to) {

  // calculate for issue
  //
  $query = db_query("select entity_id, sum(points) points FROM {userpoints_txn} WHERE operation = '%s' and time_stamp between %d and %d Group By entity_id", $array_operation['issue'][0], $timestamp_from , $timestamp_to);

  while($element = db_fetch_object($query)) {

    $node = node_load($element->entity_id);

    if (isset($node)) {
      $ranking_element = array(
        'entity_type'       => 'issue',
        'entity_nid'        => $element->entity_id,
        'entity_taxonomy'   => 0,
        'points'            => $element->points,
        'target_date'       => $target_date,
        'timestamp'         => $timestamp
      );
      drupal_write_record($table, $ranking_element);

    }
  }
}

function _calculate_user($table, $timestamp_from, $timestamp_to) {

  // calculate for user
  // 
  $query = db_query("select uid, sum(points) points FROM {userpoints_txn} WHERE time_stamp between %d and %d Group By uid", $timestamp_from , $timestamp_to);

  while($element = db_fetch_object($query)) {

    $user = user_load($element->uid);

    if (isset($user)) {
        $ranking_element = array(
            'entity_type'       => 'user',
            'entity_uid'        => $element->entity_uid,
            'entity_taxonomy'   => 0,
            'points'            => $element->points,
            'target_date'       => $target_date,
            'timestamp'         => $timestamp
        );
        drupal_write_record($table, $ranking_element);

    }
  }
}

function tvchat_calculate_ranking($table, $timestamp_from, $timestamp_to) {

  // get date from timestamp_from
  //
  $target_date = date('Ymd', $timestamp_to);
  $timestamp = time();

  $array_operation = array();
  $array_operation['tvshow'] = array('Comment: tvshow', 'Flag Check In', 'Flag FavoriteTVShow');
  $array_operation['issue'] = array('Comment: issue');

  _calculate_tvshow($table, $array_operation, $timestamp_from, $timestamp_to, $target_date, $timestamp);

  // _calculate_issue($table, $array_operation, $timestamp_from, $timestamp_to);

  // _calculate_user($table, $timestamp_from, $timestamp_to);

}

function tvchat_comment_master_change($node, $user, $prev_user) {

  $comment = new stdClass();

  $comment->uid = $node->uid;
  $comment->nid = $node->nid;
  $comment->subject = $node->title.'의 마스터가 '.$prev_user->name.'에서 '.$user->name.'(으)로 변경되었습니다.';
  $comment->comment = $comment->subject;
  $comment->timestamp = time();
  $comment->status = 0;
  $comment->format = 1;
  $comment->name = $user->name;

  comment_save((array)$comment);
}

function tvchat_assign_master($table, $timestamp_from, $timestamp_to) {  

  $timestamp = time();
  $array_operation = array();
  $array_operation['tvshow'] = array('Commnet: tvshow', 'Flag Check In', 'Flag FavoriteTVShow');
  $array_operation['issue'] = array('Comment: issue');

  // calculate for tvshow
  $_query = sprintf("SELECT entity_id, uid, sum(points) points FROM userpoints_txn WHERE operation in ('%s') and time_stamp between %d and %d GROUP BY entity_id, uid ORDER By entity_id DESC, sum(points) DESC", implode("','",$array_operation['tvshow']), $timestamp_from, $timestamp_to);

  // get date from timestamp_from
  $target_date = date('Ymd', $timestamp_to);

  $query = db_query($_query);

  $prev = 0;
  while($element = db_fetch_object($query)) {

    // skip same entity_id 
    if ($prev == $element->entity_id ) {
      continue;
    } 

    $node = node_load($element->entity_id);
    $user = user_load($element->uid);

    if (isset($node) && isset($user)) {

      // same if the master is same , go on next node 
      if ($node->field_master[0]['uid'] == $user->uid) {
          continue;
      }

      $ranking_element = array(
        'entity_type' => 'master',
        'entity_uid'    => $element->uid,
        'entity_taxonomy'   => 0,
        'points'            => $element->points,
        'target_date'       => $target_date,
        'entity_id'         => $element->entity_id,
        'timestamp'         => $timestamp
      );
      drupal_write_record($table, $ranking_element);

      $prev_user = user_load($node->field_master[0]['uid']);

      // change master 
      $node->field_master[0]['uid']= (string)$user->uid;

      // save changed node
      // node_save($node);
      content_update($node);

      tvchat_comment_master_change($node, $user, $prev_user);

      db_query("DELETE FROM {cache_content} WHERE cid = '%s'", 'content:' . $node->nid . ':' . $node->vid);

      // load the OLD cached version
      node_load(0, NULL, TRUE);

    } else {
      watchdog('cron_assign_master', 'entity_id: '.$element->id." doesn't exist");
    }
    $prev = $element->entity_id;

  }
}

function tvchat_issue_nids($showId) {

  // view: list_issue_json
  // 
  $_query = sprintf("SELECT node.nid AS nid FROM node node LEFT JOIN content_field_tvshow node_data_field_tvshow ON node.vid = node_data_field_tvshow.vid LEFT JOIN node node_node_data_field_tvshow ON node_data_field_tvshow.field_tvshow_nid = node_node_data_field_tvshow.nid WHERE (node.type in ('forum', 'issue_poll')) AND (node_node_data_field_tvshow.nid = %d) ", $showId);

  $uid_list = array();

  $results = db_query($_query);
  while($element = db_fetch_object($results)) {
      $uid_list[] = $element->nid;
  }

  if (isset($uid_list) && count($uid_list) > 0) {
    return array_values($uid_list);
  }

  return NULL;
}

// parameter format : $fromDate - 2011-05-20
// 
function tvchat_timetable_making($fromDate=NULL, $toDate=NULL) {
  global $user;

  module_load_include('inc', 'views_service');

  if (!isset($fromDate)) {
      $fromDate = date('Y-m-d', strtotime('today'));
  }

  if (!isset($toDate)) {
      $toDate = date('Y-m-d', strtotime('next Sunday'));
  }

  $args_date = sprintf("[\"%sT00:00:00--%sT23:59:59\"]", $fromDate, $toDate);
  $query_string = sprintf('sessid="%s"&method="%s"&view_name="%s"&args=%s&format_output=1', $user->sid, "views.get", "list_show_timetable_json", $args_date);

  $json_server = sprintf("http://%s/tvchat/services/json", $_SERVER['HTTP_HOST']);

  $result = drupal_http_request(
  url($json_server, array(absolute => TRUE)),
    array('Content-Type' => 'application/x-www-form-urlencoded'),
    'POST',
    $query_string
  );

  // $gzdata = gzencode($result->data,9);
  $gzdate = $result->data;
  $dir_timetable = variable_get('dir_timetable', '/var/www/data');

  // rename existing file
  // 
  $latest_filename = $dir_timetable."/timetable.txt";
  $prev_filename = $dir_timetable."/timetable.prev.txt";
  $backup_filename = sprintf("%s/timetable_%s_%s.txt", $dir_timetable, $fromDate, $toDate);

  if (file_exists($latest_filename)) {
    rename($latest_filename, $prev_filename);
  }

  // write file
  // 
  $file1 = fopen($latest_filename,'wb');
  $file2 = fopen($backup_filename, 'wb');
  fwrite($file1, $gzdata);
  fwrite($file2, $gzdata);
  fclose($file1);
  fclose($file2);
}

function tvchat_friends_uid_list(){
  module_load_include('inc', 'user_relationship_tvchat_service');

  try {
    global $user;

    $friends_list = user_relationship_tvchat_service_mine_with_type('1', 'Friend');

    $friends_uid_list = array();
    if (isset($friends_list) && count($friends_list) > 0 ) {
      foreach($friends_list as $friend) {
        $friends_uid_list[] = $friend->requester_id;
        $friends_uid_list[] = $friend->requestee_id;
      } 
      $friends_uid_list = array_unique($friends_uid_list);
      $friends_uid_list = array_diff($friends_uid_list, (array)$user->uid);
    }
    return array_values($friends_uid_list);

  } catch (Exception $ex) {
    return services_error(t('Error getting friend_list: $msg', array('@msg' => $ex->getMessage())));
  }
}

function tvchat_send_xmpp_message($authorId, $recipientUids, $body){
    global $user;

    $account = user_load($authorId);
    $sender_jid = $account->profile_jid.'@'.$_SERVER['HTTP_HOST'];

    $ret_message = array();
    $ret_message['#error'] = 'false';

    foreach ($recipientUids as $uid) {
        $_query = sprintf("SELECT count(sid) FROM sessions WHERE uid = %d", $uid);
        $result = db_result(db_query($_query));

        // online user 
        //
        if ($result > 0) {
            $data = array();
            $account_receiver = user_load($uid);
            $receiver_jid = $account_receiver->profile_jid.'@'.$_SERVER['HTTP_HOST'];

            $data['uid'] = $account_receiver->uid;
            $data['message'] = $body;
            $ret_message['#data'] = $data;

            $xmpp_cmd = variable_get('xmpp_send_cmd', 'echo newbiz.123 | sudo -S /usr/sbin/ejabberdctl send_message_chat %s %s \'%s\'');

            $command = sprintf($xmpp_cmd, $sender_jid, $receiver_jid, drupal_to_js($ret_message));

            $outPut = shell_exec($command);
        } 
    }
    return true;
}

//
//   refer to file_save_upload(in includes/file.inc )
//   tvchat_file_save_upload instead of file_save_upload (default) for base64 encoded file saving
//
function tvchat_file_save_upload($source, $validators = array(), $dest = FALSE, $replace = FILE_EXISTS_RENAME) {

  global $user;
  static $upload_cache;

  // Add in our check of the file name length
  $validators['file_validate_name_length'] = array();

  // Return cached objects without processing since the file will have
  // already been processed and the paths in _FILES will be invalid.
  if (isset($upload_cache[$source])) {
      return $upload_cache[$source];
  }

  // If a file was uploaded, process it.
  if (isset($_FILES['files']) && $_FILES['files']['name'][$source]) {

    // Check for file upload errors and return FALSE if a
    // lower level system error occurred.
    switch ($_FILES['files']['error'][$source]) {
        // @see http://php.net/manual/en/features.file-upload.errors.php
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            drupal_set_message(t('The file %file could not be saved, because it exceeds %maxsize, the maximum allowed size for uploads.', array('%file' => $source, '%maxsize' => format_size(file_upload_max_size()))), 'error');
            return 0;
        case UPLOAD_ERR_PARTIAL:
        case UPLOAD_ERR_NO_FILE:
            drupal_set_message(t('The file %file could not be saved, because the upload did not complete.', array('%file' => $source)), 'error');
              return 0;

        // Unknown error
        default:
            drupal_set_message(t('The file %file could not be saved. An unknown error has occurred.', array('%file' => $source)), 'error');
            return 0;
    }

    $extensions = '';
    foreach ($user->roles as $rid => $name) {
      $extensions .= ' '.variable_get("upload_extensions_$rid", 
      variable_get('upload_extensions_default', 'jpg jpeg gif png txt html doc xls pdf ppt pps odt ods odp'));
    }
    
    // Begin building file object.
    $file = new stdClass();
    $file->filename = file_munge_filename(trim(basename($_FILES['files']['name'][$source]), '.'), $extensions);
    $file->filepath = $_FILES['files']['tmp_name'][$source];
    $file->filemime = file_get_mimetype($file->filename);

    // If the destination is not provided, or is not writable, then use the
    // temporary directory.
    if (empty($dest) || file_check_path($dest) === FALSE) {
      $dest = file_directory_temp();
    }

    $file->source = $source;
    $file->destination = file_destination(file_create_path($dest .'/'. $file->filename), $replace);
    $file->filesize = $_FILES['files']['size'][$source];

    // Call the validation functions.
    $errors = array();
    foreach ($validators as $function => $args) {
      array_unshift($args, $file);
      // Make sure $file is passed around by reference.
      $args[0] = &$file;
      $errors = array_merge($errors, call_user_func_array($function, $args));
    }

    // Rename potentially executable files, to help prevent exploits.
    if (preg_match('/\.(php|pl|py|cgi|asp|js)$/i', $file->filename) && (substr($file->filename, -4) != '.txt')) {
      $file->filemime = 'text/plain';
      $file->filepath .= '.txt';
      $file->filename .= '.txt';
      // As the file may be named example.php.txt, we need to munge again to
      // convert to example.php_.txt, then create the correct destination.
      $file->filename = file_munge_filename($file->filename, $extensions);
      $file->destination = file_destination(file_create_path($dest .'/'. $file->filename), $replace);
    }

    // Check for validation errors.
    if (!empty($errors)) {
      $message = t('The selected file %name could not be uploaded.', array('%name' => $file->filename));
      if (count($errors) > 1) {
        $message .= '<ul><li>'. implode('</li><li>', $errors) .'</li></ul>';
      }
      else {
        $message .= ' '. array_pop($errors);
      }
      form_set_error($source, $message);
      return 0;
    }

    // Move uploaded files from PHP's upload_tmp_dir to Drupal's temporary directory.
    // This overcomes open_basedir restrictions for future file operations.
    $file->filepath = $file->destination;

    if (!file_copy($_FILES['files']['tmp_name'][$source], $file->filepath, FILE_EXISTS_REPLACE)) {
      form_set_error($source, t('File upload error. Could not move uploaded file.'));
      watchdog('file', 'Upload error. Could not move uploaded file %file to destination %destination.', array('%file' => $file->filename, '%destination' => $file->filepath));
      return 0;
    }

    // If we made it this far it's safe to record this file in the database.
    $file->uid = $user->uid;
    $file->status = FILE_STATUS_TEMPORARY;
    $file->timestamp = time();
    drupal_write_record('files', $file);

    // Add file to the cache.
    $upload_cache[$source] = $file;
    return $file;
  }
  return 0;
}

// file upload 
//
function _file_upload($fname, $attachment) {
  global $user;

  $file = new stdClass();
  $file->uid = $user->uid;
  $file->filename = $fname;
  $file->description = $fname;
  $file->weight = 0;
  $file->remove = 0;
  $file->timestamp = time();
  $file->file = base64_decode($attachment);

  $temp = file_directory_temp();
  $temp_file = tempnam(realpath($temp), 'file');
  $file->filepath = $temp_file;
  $dir = dirname($file->filepath);

  if (!file_check_directory($dir, FILE_CREATE_DIRECTORY)) {
    return services_error("Could not create destination directory for file.");
  }

  $file->filemime = file_get_mimetype($file->filename);

  {
    if (!$fp = fopen($temp_file, 'wb')) {
      drupal_set_message(t('The file could not be created.'), 'error');
      return 0;
    }
    fwrite($fp, $file->file);
    fclose($fp);

    $file->filepath = $temp_file;
    $file->filesize = filesize($temp_file);

    if($file->filesize >0) { return $file; }
  }
  return NULL;
}


