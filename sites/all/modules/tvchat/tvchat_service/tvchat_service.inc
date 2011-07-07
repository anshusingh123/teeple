<?php


function array_value_recursive($key, array $arr){
    $val = array();
    array_walk_recursive($arr, function($v, $k) use($key, &$val){
            if($k == $key) array_push($val, $v);
            });

    return $val;
    /*
    return count($val) > 1 ? $val : array_pop($val);
    */
}

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


// phone_list 중에 이미 있는 사용자한 값을 가져와서 리턴한다.
// 
function _fetch_existing_phone_list($phone_list) {

    // check the phone number already exists
    // 해당 폰번호가 존재하는지를 확인한다.
    // 
    $query_phone_list = implode("','", $phone_list);

    $_query = sprintf("SELECT uid, value FROM {profile_values} WHERE fid=14 AND value IN ('".$query_phone_list."')");
    $db_results = db_query($_query);

    $friends_uid_list = array();

    // 폰번호가 존재한다는 얘기는 친구가 이미 가입되어 있다면, 
    //
    while ($element = db_fetch_object($db_results)) {
        $account = user_load($element->uid);

        if(!empty($account)) {
            $phone_no = $element->value;

            $friends_list[$phone_no]['uid']     = $account->uid;
            $friends_list[$phone_no]['userId']  = $account->uid;
            $friends_list[$phone_no]['status']  = $account->status;
            $friends_list[$phone_no]['phone']   = $phone_no;
            $friends_list[$phone_no]['userName'] = $account->name;
            $friends_list[$phone_no]['userNickName'] = $account->profile_nickname;
            $friends_list[$phone_no]['userPicture'] = empty($account->picture) ? null : $base_url.'/'.$account->picture;
            $friends_list[$phone_no]['exist'] = 'yes';
        }
    }
    return $friends_list;
}

function _check_user_relationship($friends_uid_list) {

    $query_friends_uid_list = implode("','", $friends_uid_list);

    // if friend's request already exist 
    // 해당 사용자가 나에게 친구 요청을 이미 한 경우인지 
    // 
    $_query = sprintf("SELECT a.rid, a.requester_id, a.approved, b.value FROM user_relationships a, profile_values b WHERE a.requester_id IN ('".$query_friends_uid_list."') and a.requester_id = b.uid");
    $db_results = db_query($_query);

    $friends_requester_uid_list = array();
    while ($element = db_fetch_object($db_results)) {
        $friends_requester_uid_list[] = $element->requester-id;

        // requested but not approved 
        // 아직 승인하지 않았다면 
        // 
        if($element->approved == 0) {
            user_relationship_service_approve("1", $element->rid);
        }
    }

    // if friend's request doesn't exist 
    // (my contact doesn't exist in other's contact list 
    $friends_non_requester_uid_list = array_diff($friends_uid_list, $friends_requester_uid_list);
    foreach ($friends_non_requester_uid_list as $uid) {
        user_relationship_service_request("1", $uid, 'Friend');
    }
}

function make_dummy_users($phone_list) {
    global $base_root;

    foreach ($phone_list as $phone_no) {
        $ret_array = array();

        $nick = $phone_no;
        $email = $phone_no.'@'.$_SERVER['HTTP_HOST'];
        $phone_number = $phone_no;
        $fname = null;
        $picture = null;
        $token_APNS = null;
        $status = 0;            // 블록된 상태로 사용자 생성

        $ret_array = user_tvchat_service_signup($nick, $email,$phone_number,$fname,$picture,$token_APNS, $status);

        // dummy 친구들에게 친구 요청을 해둔다.
        // 
        user_relationship_service_request("1", $ret_array['uid'], 'Friend');
    }
}

// tvchat_service_upload_contacts
//
function tvchat_service_upload_contacts($contacts_json) {

  global $user;
  global $base_url;

  module_load_include('inc', 'tvchat');
  module_load_include('inc', 'user_relationship_service');
  module_load_include('inc', 'user_service');
  module_load_include('inc', 'user_tvchat_service');

  try {

    $fr_list = array();
    $contacts_array = array();

    $phone_name_list = array();     // 사용자 userName, Picture에 대한 리스트 
    $friends_phone_list = array();
    $phone_list = array();          // 사용자로부터 받은 주소록 
    $phone_list = array_unique($contacts_json);

    // 주소록 중 이미 존재하는 사용자를 얻는다.
    // 
    $ret_contact_list= _fetch_existing_phone_list($phone_list);

    // 주소록 존재 이용자에 대해서 친구 요청이 있었는지 확인한다.
    // 
    if(!empty($ret_contact_list)) {
      $existing_uid_list = array_value_recursive('uid', $ret_contact_list);
      $existing_phone_list = array_value_recursive('phone', $ret_contact_list);

       _check_user_relationship($existing_uid_list);
    }

    // make a dummy user 
    // 이미 존재하는 사용자를 제외하고, 주소록에 있는 사용자에 대해서 임의로 계정을 생성한다.
    // 
    $friends_phone_new_list = array();
    $friends_phone_new_list = array_diff($phone_list, $existing_phone_list);

    if(!empty($friends_phone_new_list)) {
        $dummy_list = make_dummy_users($friends_phone_new_list);
    }

    $friends_uid_list = tvchat_friends_uid_list();

    foreach ($friends_uid_list as $uid) {
        $account = user_load($uid);

        $ret_contact_list[$account->profile_phone_no]['uid'] = $account->uid;
        $ret_contact_list[$account->profile_phone_no]['userId'] = $account->uid;
        $ret_contact_list[$account->profile_phone_no]['status'] = $account->status;
        $ret_contact_list[$account->profile_phone_no]['phone'] = $account->profile_phone_no;
        $ret_contact_list[$account->profile_phone_no]['userName'] = $account->name;
        $ret_contact_list[$account->profile_phone_no]['userNickName'] = empty($account->profile_nickname) ? null : $account->profile_nickname;
        $ret_contact_list[$account->profile_phone_no]['userPicture'] = empty($account->picture) ? null : $base_url.'/'.$account->picture;
        $ret_contact_list[$account->profile_phone_no]['exist'] = 'yes';
    }

    $ret_contacts = array();
    foreach ($ret_contact_list as $phone_element) {
        if($phone_element['status'] <> 0) {
            $ret_contacts[] = (object)$phone_element;
        }
    }
    return $ret_contacts;

  } catch (Exception $ex) {
    return services_error(t('Error listing relationship: @msg', array('@msg' => $ex->getMessage())));
  }
}

function _get_query_for_audience_list($issue_id_list, $friend_flag, $friends_uid_list) {

    $one_day = 60*60*24;
    $one_week = $one_day * 7;
    $one_month = $one_week * 30;
    $before_date = $one_month * 3;
    $timestamp = time() - $before_date;

    $_query_tmp = "SELECT comments.comment AS comment, node_comments.type AS type, comments.timestamp AS timestamp, users_comments.picture AS userPicture, users_comments.uid AS uid, users_comments.name AS userName, users_comments_profile_values_profile_nickname.value as userNickName, users_comments.access AS access FROM comments comments LEFT JOIN node node_comments ON comments.nid = node_comments.nid LEFT JOIN content_field_tvshow node_comments_node_data_field_tvshow ON node_comments.vid = node_comments_node_data_field_tvshow.vid LEFT JOIN node node_node_data_field_tvshow ON node_comments_node_data_field_tvshow.field_tvshow_nid = node_node_data_field_tvshow.nid LEFT JOIN profile_values users_comments_profile_values_profile_nickname ON comments.uid = users_comments_profile_values_profile_nickname.uid AND users_comments_profile_values_profile_nickname.fid = '5' LEFT JOIN users users_comments ON comments.uid = users_comments.uid WHERE (node_comments.type in ('forum', 'issue_poll', 'tvshow')) ";

    if($friend_flag > 0) {
       $where_friends = empty($friends_uid_list) ? "" : sprintf(" AND (comments.uid IN (%s) )", join(',', $friends_uid_list));
       if(empty($friends_uid_list)){ return null; } 

    } else {
       $friends_uid_list[] = $user->uid;
       $where_friends = empty($friends_uid_list) ? "" : sprintf(" AND (comments.uid NOT IN (%s) )", join(',', $friends_uid_list));
    }
    $where_issue = empty($issue_id_list) ?  "" : sprintf(" AND (node_comments.nid IN (%s) )", join(',', $issue_id_list));
    $where_timestamp = sprintf(" AND comments.timestamp > %d ORDER BY timestamp DESC", $timestamp);
    $_query = $_query_tmp.$where_friends.$where_issue.$where_timestamp;

    return $_query;
}

function get_audience_list($query, $offset, $limit){
    $results = db_query($query);

    $list_keys = array();
    $audience_list = array();

    $index = 0;

    while($element=db_fetch_array($results)) {

        if($element['uid'] == 0) continue;

        // user's action should be unique
        // 해당 id로 보여졌으면 다시 보이지 않아도 됨
        // 
        if(!array_key_exists($element['uid'], $list_keys)) {

          if ($index < $offset) { $index++; continue; }

          $login_flag = db_result(db_query("SELECT count(sid) FROM {sessions} WHERE uid = %d", $element['uid']));

          $element['loginStatus'] = empty($login_flag) ? FALSE: TRUE;
          $element['userPicture'] = empty($element['userPicture']) ? null : $base_url.'/'.$element['userPicture'];

          $list_keys[$element['uid']] = 'FOUND';

          $audience_list[] = (object)$element;
          $found++;

        }

        if ($limit > 0 && $found == $limit) { break; }
    }

    return $audience_list;
}

function get_extra_audience_list($audience_list, $add_uid_list, $offset, $limit) {
    $extra_audience_list = array();

    foreach($add_uid_list as $element_uid) {
      if($element_uid == 0) continue;

      if( (!array_key_exists($element_uid, $audience_list))
        && (!array_key_exists($element_uid, $extra_audience_list )) ) {

        if ($index < $offset) { $index++; continue;}
        $account_tmp = user_load($element_uid);

        $login_flag = db_result(db_query("SELECT count(sid) FROM {sessions} WHERE uid = %d", $element_uid));

        $element = array("comment" => null, 
                "type" => null, 
                "timestamp"=> null, 
                "uid" => $account_tmp->uid, 
                "userName" => $account_tmp->name, 
                "userNickName" => $account_tmp->profile_nickname, 
                "access" => $account_tmp->access
        );

        $element['loginStatus'] = empty($login_flag) ? FALSE: TRUE;
        $element['userPicture'] = empty($element['userPicture']) ? null : $base_url.'/'.$element['userPicture'];

        $extra_audience_list[] = (object)$element;
        $found++;
      }

      if($limit > 0 && $found == $limit) { break; }
    }
    return $extra_audience_list;
}

// 친구 또는 일반인들 해당 프로그램 관련자 + others 를 리턴한다.
// 
function tvchat_service_audience_list($showId,$friend_flag=0,$offset=0,$limit=0) {
  try{
    global $user;
    global $base_url;

    $ret_array = array();
    $ret_element = array();

    $time_interval = variable_get('user_block_seconds_online', 900);
    $curTime = time();

    $index = 0; 
    $found = 0;
    $flag_stop = false;

    // fetch all comments from show related 
    // 쇼와 관련 이슈들에 대한 node id 리스트
    //
    $issue_id_list = tvchat_issue_nids($showId);
    $issue_id_list[] = $showId;

    $friends_uid_list = tvchat_friends_uid_list();

    // 친구 또는 일반인들의 리스트를 구하는 query를 생성한다.
    // 
    $query = _get_query_for_audience_list($issue_id_list, $friend_flag, $friends_uid_list);

    $audience_list = get_audience_list($query, $offset, $limit);

    dsm($audience_list);

    // limit 만큼 찾아서 찾을 필요가 없을 때,
    // 
    if(count($audience_list) == $limit)  {
        $add_uid_list = array();

    // 사용자 수를 더 찾아야 할 때
    } else {

      // 추가할 친구를 찾는다.
      // 
      if ($friend_flag > 0) {
        $add_uid_list = $friends_uid_list;

      // 추가할 anonymous를 찾는다.
      } else {
          $_query = "SELECT users.uid AS uid FROM users users ORDER BY access DESC";
          $result = db_query_range($_query, 0, 50);

          while($element = db_fetch_object($result)) {
              $add_uid_list[] = $element->uid;

          }
      }

      $extra_audience_list = get_extra_audience_list($auidience_list, $add_uid_list, $offset, $limit);
    }

    if(!empty($extra_audience_list)) {
        $audience_list = array_merge($audience_list, $extra_audience_list);
    }

    if(empty($audience_list)) {
    return services_error(t('No Data Found'), 511);
    }
    return $ret_array;

  } catch (Exception $ex) {
    return services_errror(t('Error getting friend_list: $msg', array('@msg' => $ex->getMessage())));
   }
}

