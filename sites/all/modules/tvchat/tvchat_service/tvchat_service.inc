<?php

function tvchat_service_all() {
  $result = db_query("SELECT node.nid AS nid, node_data_field_logo_image.field_logo_image_fid AS fid, '' AS filepath, node_comment_statistics.comment_count AS node_comment_count, node.status AS node_status, node.title AS node_title FROM node node  LEFT JOIN content_type_tvshow node_data_field_logo_image ON node.vid = node_data_field_logo_image.vid INNER JOIN node_comment_statistics node_comment_statistics ON node.nid = node_comment_statistics.nid WHERE (node.status <> 0) AND (node.type in ('tvshow'))");

  // $result = db_query("SELECT nid FROM {node} WHERE type='tvshow'");

  $nodes = array();
  while ($node = db_fetch_object($result)){
		$files  = db_query("SELECT filepath FROM files WHERE fid = ".$node->fid);
		$filepath = db_fetch_object($files);
		$node->filepath = $filepath->filepath;

		$nodes[] = $node;
  }
  return $nodes;
}

function tvchat_service_show() {  
	$result = db_query("SELECT nid FROM {node} WHERE type='tvshow'");

  $nodes = array();
  while ($node = db_fetch_object($result)){
     $nodes[] = services_node_load(node_load($node->nid), $fields);
  }
  return $nodes;
}

//
function tvchat_service_comment() {	
	$result = db_query("SELECT nid FROM {node} WHERE type='tvshow'");

  $nodes = array();
  while ($node = db_fetch_object($result)){
     $nodes[] = services_node_load(node_load($node->nid), $fields);
  }
	return $nodes;
}

//
function tvchat_service_comment_post() {
	$result = db_query("SELECT nid FROM {node} WHERE type='tvshow'");

  $nodes = array();
  while ($node = db_fetch_object($result)){
     $nodes[] = services_node_load(node_load($node->nid), $fields);
  }

	return $nodes;
}

function tvchat_service_is_flagged($flag_name, $nid, $uid) {

	$flag = flag_get_flag($flag_name);

	if ($flag->is_flagged($nid, $uid)) {
  	return true;
	} 

	return false;
}

function tvchat_service_do_flag($flag_name, $nid, $uid) {
	$flag = flag_get_flag($flag_name);
	$account = user_load(array('uid' => $uid));

	if ($flag->flag('flag',$nid,$account,$skip_permission_check = FALSE)) {
		return true;
	};

	return false;
}

function tvchat_service_comment_upload_save($fname) {
 	if (!isset($account)) {
    	$account = $GLOBALS['user'];
  	}

  	$limits = _upload_file_limits($GLOBALS['user']);
 	$validators = array(
    	'file_validate_extensions' => array($limits['extensions']),
    	'file_validate_image_resolution' => array($limits['resolution']),
    	'file_validate_size' => array($limits['file_size'], $limits['user_size']),
  	);
	if(!user_access('upload files to comments')) {
		return true;
	}

	$file = new stdClass();
	$file->uid = $account->uid;
	$file->filename = $fname;
	$file->filepath = file_directory_path(); 
	$file->description = $file->filename;
	$file->weight = 0;
	$file->remove = 0;
	$file->timestamp = time();
	file_service_save($file);

	return false;
}

/*
function sample($fields = array()) {
  $result = db_query("SELECT nid FROM {node} WHERE type='tvshow'");

  $nodes = array();
  while ($node = db_fetch_object($result)){
     $nodes[] = services_node_load(node_load($node->nid), $fields);
  }
  return $nodes;
}
*/

// 
/*
  1) input parameters ($contacts_json)
  ["010982342342", "0101231231"]

  2) output 
  {
    "data": [
      {
        "uid": "133",
        "phone": "010982342342",
        "name": "aaaaaaaa",
        "exist": "no"
      },
      {
        "uid": "134",
        "phone": "0101231231",
        "name": "bbbbbbb"
        "exist": "yes"
      },
    ]
  }
*/

// tvchat_service 
//
function tvchat_service_upload_contacts($contacts_json) {

  //
  module_load_include('inc', 'user_relationship_service');
  module_load_include('inc', 'user_service');

  // get user's contacts 
  // 
  global $user;

  try {
    $fr_list = array();

    // $contacts_list = json_decode($contacts_json);
    // $contacts_array = (array)$contacts_list->data;
    $contacts_array = (array)json_decode($contacts_json);
    $contacts_array =  array_unique($contacts_array);

    // make phone number list for db query
    // 
    $phone_name_list = array();
    $phone_list = array();
    $friends_phone_list = array();

    foreach ($contacts_array as $phone_no) {
        $phone_list[] = $phone_no;
        $phone_name_list[$phone_no]['phone'] = $phone_no;
    }

    // check the phone number already exists
    // 
    $query_phone_list = implode("','", $phone_list);
    $_query = sprintf("SELECT uid, value FROM {profile_values} WHERE fid=14 AND value IN ('".$query_phone_list."')");

    $db_results = db_query($_query);

    $friends_uid_list = array();

    // for existing friends
    // 
    while ($element = db_fetch_object($db_results)) {
        $friends_uid_list[] = $element->uid;
        $friends_phone_list[] = $element->value;

        $phone_name_list[$element->value]['uid'] = $element->uid;
        $phone_name_list[$element->value]['exist'] = 'yes';
    }
    $query_friends_uid_list = implode("','", $friends_uid_list);

    // if friend's request already exist 
    // 
    $_query = sprintf("SELECT a.rid, a.requester_id, a.approved, b.value FROM user_relationships a, profile_values b WHERE a.requester_id IN ('".$query_friends_uid_list."') and a.requester_id = b.uid");
    $db_results = db_query($_query);

    $friends_requester_uid_list = array();

    while ($element = db_fetch_object($db_results)) {
        $friends_requester_uid_list[] = $element->requester-id;

        // requested but not approved 
        // 
        if($element->approved == 0) {
            user_relationship_service_approve("1", $element->rid);
        }
    }

    // if friend's request doesn't exist (my contact doesn't exist in other's contact list 
    // 
    $friends_non_requester_uid_list = array_diff($friends_uid_list, $friends_requester_uid_list);
    foreach ($friends_non_requester_uid_list as $uid) {
        user_relationship_service_request("1", $uid, 'Friend');
    }

    // make a new user for other whose contact exists in my address book
    // 
    $friends_phone_new_list = array();
    $friends_phone_new_list = array_diff($phone_list, $friends_phone_list);

    $ret_array = array();
    foreach ($friends_phone_new_list as $new_phone_no) {
        $ret_array = user_tvchat_service_signup($new_phone_no, $new_phone_no.'@teeple.co.kr', $new_phone_no, null, null, null, 0);
        user_relationship_service_request("1", $ret_array['uid'], 'Friend');

        $phone_name_list[$new_phone_no]['uid'] = $ret_array['uid'];
        $phone_name_list[$new_phone_no]['exist'] = 'no';
    }

    return drupal_to_js($phone_name_list);

  } catch (Exception $ex) {
    return services_error(t('Error listing relationship: @msg', array('@msg' => $ex->getMessage())));
  }
}

function tvchat_service_audience_list($showId,$friend_flag=0,$offset,$limit) {

  try{

    global $user;
    global $base_root;
    global $base_path;

    $friends_uid_list = tvchat_friends_uid_list();

    // fetch all comments from show related 
    //
    $issue_id_list = tvchat_issue_nids($showId);
    $issue_id_list[] = $showId;

    $one_day = 60*60*24;
    $one_week = $one_day * 7;
    $one_month = $one_week * 30;
    $before_date = $one_month * 3;
    $timestamp = time() - $before_date;

    // for friend
    //
    if($friend_flag > 0) {
        $_query = sprintf("SELECT comments.comment AS comment, node_comments.type AS type, comments.timestamp AS timestamp, users_comments.picture AS userPicture, users_comments.uid AS uid, users_comments.name AS userName, users_comments.access AS access FROM comments comments LEFT JOIN node node_comments ON comments.nid = node_comments.nid LEFT JOIN content_field_tvshow node_comments_node_data_field_tvshow ON node_comments.vid = node_comments_node_data_field_tvshow.vid LEFT JOIN node node_node_data_field_tvshow ON node_comments_node_data_field_tvshow.field_tvshow_nid = node_node_data_field_tvshow.nid LEFT JOIN users users_comments ON comments.uid = users_comments.uid WHERE (node_comments.type in ('forum', 'issue_poll', 'tvshow')) AND (comments.uid IN (%s)) AND (node_comments.nid IN (%s)) AND comments.timestamp > %d ORDER BY timestamp DESC", join(",", $friends_uid_list), join(",", $issue_id_list), $timestamp);

    // for annonymous 
    // 
    } else {
        $friends_uid_list[] = $user->uid;
        $_query = sprintf("SELECT comments.comment AS comment, node_comments.type AS type, comments.timestamp AS timestamp, users_comments.picture AS userPicture, users_comments.uid AS uid, users_comments.name AS userName, users_comments.access AS access FROM comments comments LEFT JOIN node node_comments ON comments.nid = node_comments.nid LEFT JOIN content_field_tvshow node_comments_node_data_field_tvshow ON node_comments.vid = node_comments_node_data_field_tvshow.vid LEFT JOIN node node_node_data_field_tvshow ON node_comments_node_data_field_tvshow.field_tvshow_nid = node_node_data_field_tvshow.nid LEFT JOIN users users_comments ON comments.uid = users_comments.uid WHERE (node_comments.type in ('forum', 'issue_poll', 'tvshow')) AND (comments.uid NOT IN (%s)) AND (node_comments.nid IN (%s)) AND comments.timestamp > %d ORDER BY timestamp DESC", join(",", $friends_uid_list), join(",", $issue_id_list), $timestamp);
    }

    $ret_array = array();
    $ret_element = array();
    $results = db_query($_query);

    $time_interval = variable_get('user_block_seconds_online', 900);
    $curTime = time();

    $index = 0; $found = 0;

    while($element=db_fetch_array($results)) {

        // user's action should be unique
        // 
        if(!array_key_exists($element['uid'], $ret_array)) {

          if ($index <= $offset) {
              $index++;
              continue;
          }

          $_query = sprintf("SELECT count(sid) FROM sessions WHERE uid = %d", $element['uid']);
          $result = db_result(db_query($_query));
          $element['loginStatus'] = $result > 0 ? TRUE:FALSE;


          if (isset($element['userPicture']) && (strlen($element['userPicture']) > 0) ) {
              $element['userPicture'] = $base_root.$base_path.$element['userPicture'];
          }

          $element['userPicture'] = 

          $ret_array[$element['uid']] = $element;

          $found++;
        }

        if ($found == $limit) { 
            break; 
        }

    }
    return $ret_array;

  } catch (Exception $ex) {
    return services_errror(t('Error getting friend_list: $msg', array('@msg' => $ex->getMessage())));
   }
}

