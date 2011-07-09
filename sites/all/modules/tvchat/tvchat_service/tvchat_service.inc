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

function already_request($fr_uid) {
    global $user;

    $type = user_relationships_type_load(array('name' => 'Friend'));
    $rels = user_relationships_load( array('rtid' => $type->rtid, 'between' => array($user->uid, $fr_uid)));

    if (count($rels) > 0) {
        $rel = array_shift($rels);

        if ( ($rel->approved != '1') && ($rel->requester_id == $user->uid)) {
                return true;
        }
    } 
    return false;
}

function _check_user_relationship($friends_uid_list) {
    global $user;

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
        if(already_request($user->uid, $uid)) { continue; }
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

    if(!empty($existing_phone_list)) {
        $friends_phone_new_list = array_diff($phone_list, $existing_phone_list);

    } else {
        $friends_phone_new_list = $phone_list;

    }

    if(!empty($friends_phone_new_list)) {
        $dummy_list = make_dummy_users($friends_phone_new_list);
    }

    $friends_uid_list = tvchat_friends_uid_list();

    foreach ($friends_uid_list as $uid) {
        $account = user_load($uid);
        $phone_no = $account->profile_phone_no;

        $ret_contact_list[$phone_no] = array(
            'uid' => $account->uid,
            'userId' => $account->uid,
            'status' => $account->status,
            'phone' => $account->profile_phone_no,
            'userName' => $account->name,
            'userNickName' => empty($account->profile_nickname) ? null : $account->profile_nickname,
            'userPicture' => empty($account->picture) ? null : $base_url.'/'.$account->picture,
            'exist' => 'yes'
        );
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

function _get_element($uid, $comment, $type, $timestamp){

    global $base_url;
    $account = user_load($uid);
    $element = array("comment" => $comment,
        "type" => $type,
        "timestamp"=> $timestamp,
        "uid" => $uid, 
        "userId" => $uid, 
        "userName" => $account->name, 
        "userNickName" => $account->profile_nickname, 
        "access" => $account->access
    );

    $element['loginStatus'] = get_login_status($uid);
    $element['userPicture'] = empty($account->picture) ? null : $base_url.'/'.$account->picture;

    return $element;
}

// 친구 또는 일반인들 해당 프로그램 관련자 + others 를 리턴한다.
// 
function tvchat_service_audience_list($showId,$friend_flag=0,$offset=0,$limit=0) {
  module_load_include('inc', 'views_service');

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
    // $query = _get_query_for_audience_list($issue_id_list, $friend_flag, $friends_uid_list);
    // 
    if($friend_flag == 1) {
        $view_name = 'query_tvchat_audience_list_1';

    } else {
        $view_name = 'query_tvchat_audience_list_2';
        $friends_uid_list[] = $user->uid;
    }
    $args = array();
    $args[] = join(',', $issue_id_list);
    $args[] = join(',', $friends_uid_list);

    // get audience list from views 
    // 프로그램 관련 comment한 자를 구한다.
    // 
    $view_name = ($friend_flag == 1) ? 'query_tvchat_audience_list_1' : 'query_tvchat_audience_list_2';
    $ret = views_service_get($view_name, null, $args, $offset, $limit, FALSE);
    $audience_list = args_mapper($view_name, $ret);
    $audience_uid_list = array_value_recursive('userId',$audience_list);

    // audience 수가 아직 모자랄 때,
    // 
    if( (count($audience_list) < $limit) || $limit == 0 ) {

        $args = array();
        $found_count = count($audience_list);

        if($friend_flag ==1) {
            $view_name = 'query_tvchat_ext_audience_list_1';
            $add_uid_list = array_diff($friends_uid_list, $audience_uid_list);

        } else {
            $view_name = 'query_tvchat_ext_audience_list_2';
            $merged_uid_list = array_merge($audience_uid_list, $friends_uid_list);

            $add_uid_list = array_unique($merged_uid_list);
        }

        $args[] = join(',', $add_uid_list);
        $new_offset = $offset > $count ? $offset - $count : 0;
        $new_limit = ($limit == 0) ? 0: $limit - $found_count;

        $ret = views_service_get($view_name, null, $args, $offset, $new_limit, FALSE);
        $extra_audience_list = args_mapper($view_name, $ret);
    }

    if(!empty($extra_audience_list)) {
        $audience_list = array_merge($audience_list, $extra_audience_list);
    }

    if(empty($audience_list)) {
        return services_error(t('No Data Found'), 511);
    }
    return $audience_list;

  } catch (Exception $ex) {
    return services_errror(t('Error getting friend_list: $msg', array('@msg' => $ex->getMessage())));
   }
}

