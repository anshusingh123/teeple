<?php
// $Id: om_project_blog_content_type.inc,v 1.1.2.3 2009/12/04 22:06:34 kreynen Exp $
 /**
 * @file
 * Part of Open Media Project Install
 */
 
/**
* function to create Open Media Project content type
*/
function _om_project_install_create_om_project_blog_content_type() {

  $content_type = content_types('om_project_blog');
  if (!isset($content_type)) {
    return;
  }
  $result = _om_project_install_import_content_type("\$content[type]  = array (
		  'name' => 'Project Blog',
		  'type' => 'om_project_blog',
        'description' => '<b>Open Media System</b> - This content type is used for adding blog content in OM Projects. ',
		  'title_label' => 'Title',
		  'body_label' => 'Body',
		  'min_word_count' => '0',
		  'help' => '',
		  'node_options' => 
		  array (
					 'status' => true,
					 'promote' => false,
					 'sticky' => false,
					 'revision' => false,
		  ),
		  'upload' => 1,
		  'creativecommons_lite' => 0,
		  'file_path' => '',
		  'file_path_pathauto' => 0,
		  'file_path_tolower' => 0,
		  'file_path_transliterate' => 0,
		  'file_name' => '[filefield-onlyname-original].[filefield-extension-original]',
		  'file_name_pathauto' => 0,
		  'file_name_tolower' => 0,
		  'file_name_transliterate' => 0,
		  'retroactive_update' => '',
		  'notifications_node_ui' => 
		  array (
					 'links' => true,
					 'form' => false,
					 'comment' => false,
					 'block' => false,
		  ),
		  'scheduler' => 0,
		  'scheduler_touch' => 0,
		  'old_type' => 'project_blog',
		  'orig_type' => '',
		  'module' => 'node',
		  'custom' => '1',
		  'modified' => '1',
		  'locked' => '0',
		  'location_maxnum' => '3',
		  'location_defaultnum' => '1',
		  'location_weight' => '9',
		  'location_collapsible' => 1,
		  'location_collapsed' => 1,
		  'location_rss' => 'simple',
		  'og_content_type_usage' => 'group_post_standard',
		  'comment' => '2',
		  'comment_default_mode' => '4',
		  'comment_default_order' => '1',
		  'comment_default_per_page' => '50',
		  'comment_controls' => '3',
		  'comment_anonymous' => 0,
		  'comment_subject_field' => '1',
		  'comment_preview' => '1',
		  'comment_form_location' => '1',
		  'fivestar' => 0,
		  'fivestar_stars' => 5,
		  'fivestar_labels_enable' => 1,
		  'fivestar_label_0' => 'Cancel rating',
		  'fivestar_label_1' => 'Poor',
		  'fivestar_label_2' => 'Okay',
		  'fivestar_label_3' => 'Good',
		  'fivestar_label_4' => 'Great',
		  'fivestar_label_5' => 'Awesome',
		  'fivestar_label_6' => 'Give it @star/@count',
		  'fivestar_label_7' => 'Give it @star/@count',
		  'fivestar_label_8' => 'Give it @star/@count',
		  'fivestar_label_9' => 'Give it @star/@count',
		  'fivestar_label_10' => 'Give it @star/@count',
		  'fivestar_style' => 'average',
		  'fivestar_text' => 'dual',
		  'fivestar_title' => 1,
		  'fivestar_feedback' => 1,
		  'fivestar_unvote' => 0,
		  'fivestar_position_teaser' => 'hidden',
		  'fivestar_position' => 'below',
		  'merci_type_setting' => 'disabled',
		  'merci_status' => '1',
		  'merci_spare_items' => 0,
		  'merci_max_hours_per_reservation' => '0',
		  'merci_allow_overnight' => '0',
		  'merci_allow_weekends' => '0',
		  'merci_rate_per_hour' => '0',
		  'merci_late_fee_per_hour' => '0',
		  'merci_fee_free_hours' => '0',
		  'merci_min_cancel_hours' => '0',
		  'ant' => '0',
		  'ant_pattern' => '',
		  'auto_nodetitle_php' => 0,
		  'feedapi' => 
		  array (
					 'enabled' => 0,
					 'refresh_on_create' => 0,
					 'update_existing' => 1,
					 'skip' => 0,
					 'items_delete' => '0',
					 'parsers' => 
					 array (
								'parser_simplepie' => 
								array (
										  'enabled' => 0,
										  'weight' => '0',
								),
								'parser_csv' => 
								array (
										  'enabled' => false,
										  'weight' => 0,
										  'timestamp_rule' => '',
										  'title_rule' => '',
										  'description_rule' => '',
								),
					 ),
					 'processors' => 
					 array (
								'feedapi_node' => 
								array (
										  'enabled' => 0,
										  'weight' => '0',
										  'content_type' => 'webform',
										  'node_date' => 'feed',
										  'promote' => '3',
										  'x_dedupe' => '0',
								),
								'feedapi_inherit' => 
								array (
										  'enabled' => 0,
										  'weight' => '0',
										  'inherit_og' => 1,
										  'inherit_taxonomy' => 1,
								),
					 ),
		  ),
);"
);

  return;
} // function _om_project_install_create_om_project_blog_type

