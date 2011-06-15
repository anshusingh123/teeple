<?php
// $Id: om_project_event_content_type.inc,v 1.1.2.3 2009/12/04 22:06:34 kreynen Exp $
 /**
 * @file
 * Part of Open Media Project Install
 */

function _om_project_install_create_om_project_event_content_type() {

  $content_type = content_types('om_project_event');
  if (!isset($content_type)) {
    return;
  }
  $result = _om_project_install_import_content_type("\$content[type]  = array (
		  'name' => 'Project Event',
		  'type' => 'om_project_event',
        'description' => '<b>Open Media System</b> - This content type is used for adding event content in OM Projects. ',
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
		  'old_type' => 'project_event',
		  'orig_type' => '',
		  'module' => 'node',
		  'custom' => '1',
		  'modified' => '1',
		  'locked' => '0',
		  'location_maxnum' => '0',
		  'location_defaultnum' => '0',
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
		  'comment_form_location' => '0',
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
		  'merci_status' => 1,
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
										  'content_type' => 'merci_reservation',
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
);
\$content[fields]  = array (
		  0 => 
		  array (
					 'label' => 'Date',
					 'field_name' => 'field_date',
					 'type' => 'datetime',
					 'widget_type' => 'date_popup_repeat',
					 'change' => 'Change basic information',
					 'weight' => '-3',
					 'default_value' => 'blank',
					 'default_value_code' => '',
					 'default_value2' => 'same',
					 'default_value_code2' => '',
					 'input_format' => 'm/d/Y - g:i:sa',
					 'input_format_custom' => '',
					 'year_range' => '-3:+3',
					 'increment' => '1',
					 'advanced' => 
					 array (
								'label_position' => 'above',
								'text_parts' => 
								array (
										  'year' => 0,
										  'month' => 0,
										  'day' => 0,
										  'hour' => 0,
										  'minute' => 0,
										  'second' => 0,
								),
					 ),
					 'label_position' => 'above',
					 'text_parts' => 
					 array (
					 ),
					 'description' => '',
					 'group' => false,
					 'required' => 1,
					 'multiple' => 1,
					 'repeat' => 1,
					 'todate' => 'required',
					 'granularity' => 
					 array (
								'year' => 'year',
								'month' => 'month',
								'day' => 'day',
								'hour' => 'hour',
								'minute' => 'minute',
					 ),
					 'output_format_date' => 'm/d/Y - g:ia',
					 'output_format_custom' => '',
					 'output_format_date_long' => 'm/d/Y',
					 'output_format_custom_long' => '',
					 'output_format_date_medium' => 'm/d/Y',
					 'output_format_custom_medium' => '',
					 'output_format_date_short' => 'm/d/Y',
					 'output_format_custom_short' => '',
					 'tz_handling' => 'site',
					 'timezone_db' => 'UTC',
					 'repeat_collapsed' => '1',
					 'op' => 'Save field settings',
					 'module' => 'date',
					 'widget_module' => 'date',
					 'columns' => 
					 array (
								'value' => 
								array (
										  'type' => 'datetime',
										  'not null' => false,
										  'sortable' => true,
								),
								'value2' => 
								array (
										  'type' => 'datetime',
										  'not null' => false,
										  'sortable' => true,
								),
								'rrule' => 
								array (
										  'type' => 'text',
										  'not null' => false,
										  'sortable' => false,
								),
					 ),
					 'display_settings' => 
					 array (
								'label' => 
								array (
										  'format' => 'inline',
								),
								'teaser' => 
								array (
										  'format' => 'default',
								),
								'full' => 
								array (
										  'format' => 'default',
								),
								4 => 
								array (
										  'format' => 'default',
								),
								2 => 
								array (
										  'format' => 'default',
								),
								3 => 
								array (
										  'format' => 'default',
								),
					 ),
		  ),
		  1 => 
		  array (
					 'label' => 'Headline for News Block',
					 'field_name' => 'field_headline_for_news_block',
					 'type' => 'text',
					 'widget_type' => 'text_textfield',
					 'change' => 'Change basic information',
					 'weight' => 0,
					 'rows' => 5,
					 'size' => '60',
					 'description' => 'This headline shows up in the News block on the front page when Promoted to front page is also checked.  Promoted to front page can be found under Publishing options.',
					 'default_value' => 
					 array (
								0 => 
								array (
										  'value' => '',
										  '_error_element' => 'default_value_widget][field_headline_for_news_block][0][value',
								),
					 ),
					 'default_value_php' => '',
					 'default_value_widget' => 
					 array (
								'field_headline_for_news_block' => 
								array (
										  0 => 
										  array (
													 'value' => '',
													 '_error_element' => 'default_value_widget][field_headline_for_news_block][0][value',
										  ),
								),
					 ),
					 'group' => false,
					 'required' => 0,
					 'multiple' => '0',
					 'text_processing' => '0',
					 'max_length' => '255',
					 'allowed_values' => '',
					 'allowed_values_php' => '',
					 'op' => 'Save field settings',
					 'module' => 'text',
					 'widget_module' => 'text',
					 'columns' => 
					 array (
								'value' => 
								array (
										  'type' => 'varchar',
										  'length' => '255',
										  'not null' => false,
										  'sortable' => true,
								),
					 ),
					 'display_settings' => 
					 array (
								'label' => 
								array (
										  'format' => 'hidden',
								),
								'teaser' => 
								array (
										  'format' => 'hidden',
								),
								'full' => 
								array (
										  'format' => 'hidden',
								),
								4 => 
								array (
										  'format' => 'default',
								),
								2 => 
								array (
										  'format' => 'default',
								),
								3 => 
								array (
										  'format' => 'default',
								),
					 ),
		  ),
		  2 => 
		  array (
					 'label' => 'Picture',
					 'field_name' => 'field_image',
					 'type' => 'filefield',
					 'widget_type' => 'imagefield_widget',
					 'change' => 'Change basic information',
					 'weight' => 0,
					 'file_extensions' => 'txt',
					 'file_path' => '',
					 'file_path_pathauto' => 0,
					 'file_path_tolower' => 0,
					 'file_path_transliterate' => 0,
					 'file_name' => '[filefield-onlyname-original].[filefield-extension-original]',
					 'file_name_pathauto' => 0,
					 'file_name_tolower' => 0,
					 'file_name_transliterate' => 0,
					 'retroactive_update' => '',
					 'max_filesize_per_file' => '',
					 'max_filesize_per_node' => '',
					 'max_resolution' => 0,
					 'min_resolution' => 0,
					 'custom_alt' => 0,
					 'alt' => '',
					 'custom_title' => 0,
					 'title_type' => 'textfield',
					 'title' => '',
					 'use_default_image' => '',
					 'default_image_upload' => '',
					 'default_image' => NULL,
					 'description' => '',
					 'group' => false,
					 'required' => 0,
					 'multiple' => '0',
					 'list_field' => 0,
					 'list_default' => 0,
					 'description_field' => 0,
					 'op' => 'Save field settings',
					 'module' => 'filefield',
					 'widget_module' => 'imagefield',
					 'columns' => 
					 array (
								'fid' => 
								array (
										  'type' => 'int',
										  'not null' => false,
										  'views' => true,
								),
								'list' => 
								array (
										  'type' => 'int',
										  'size' => 'tiny',
										  'not null' => false,
										  'views' => true,
								),
								'data' => 
								array (
										  'type' => 'text',
										  'serialize' => true,
										  'views' => true,
								),
					 ),
					 'display_settings' => 
					 array (
								'label' => 
								array (
										  'format' => 'hidden',
								),
								'teaser' => 
								array (
										  'format' => 'product_linked',
								),
								'full' => 
								array (
										  'format' => '210 pixels wide scale_default',
								),
								4 => 
								array (
										  'format' => 'image_plain',
								),
								2 => 
								array (
										  'format' => 'image_plain',
								),
								3 => 
								array (
										  'format' => 'image_plain',
								),
					 ),
		  ),
);"
);

  return;
} // function _om_project_install_create_om_project_blog_type



