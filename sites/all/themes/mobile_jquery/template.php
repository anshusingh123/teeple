<?php
// $Id$
/**
* Add include and setting files
*/

require_once(drupal_get_path('theme', 'mobile_jquery') . '/theme-settings.php');
require_once(drupal_get_path('theme', 'mobile_jquery') . '/includes/mobile_jquery.theme.inc');
require_once(drupal_get_path('theme', 'mobile_jquery') . '/includes/mobile_jquery.comments.inc');
require_once(drupal_get_path('theme', 'mobile_jquery') . '/includes/mobile_jquery.forms.inc');
require_once(drupal_get_path('theme', 'mobile_jquery') . '/includes/mobile_jquery.menus.inc');
require_once(drupal_get_path('theme', 'mobile_jquery') . '/includes/mobile_jquery.pager.inc');


/**
 * Initialize theme settings
 */
global $theme_key;
if (db_is_active()) {
  mobile_jquery_initialize_theme_settings($theme_key);
}

/**
 * Implementation of template_preprocess_page()
 *
 * Process variables for page.tpl.php
 *
 * Most themes utilize their own copy of page.tpl.php. The default is located
 * inside "modules/system/page.tpl.php". Look in there for the full list of
 * variables.
 *
 * Uses the arg() function to generate a series of page template suggestions
 * based on the current path.
 *
 * Any changes to variables in this preprocessor should also be changed inside
 * template_preprocess_maintenance_page() to keep all them consistent.
 *
 * The $vars array contains the following arguments:
 * - $content
 * - $show_blocks
 *
 * @see page.tpl.php
 */
function mobile_jquery_preprocess_page(&$vars) {
	global $theme_key, $theme_info;
	
		//does jquerymobile_ui exist and is it turned on
  if (module_exists('jquerymobile_ui')) {
    jquerymobile_ui_load_files($vars);
  } else {
    drupal_set_message('jQuery Mobile UI module is not enabled. This theme will be work without it being turned on. <a href="http://drupal.org/projects/jquerymobile_ui" target="_blank">Download the jQuery Mobile UI module.</a>', 'error');
  }

  $vars['use_global'] = theme_get_setting('use_global');
	$vars['data_theme'] = theme_get_setting('data_theme');
	$vars['front_ron'] = theme_get_setting('front_ron');
	$vars['list_inset'] = theme_get_setting('list_inset');
	$vars['list_spliticon'] = theme_get_setting('list_spliticon');
	$vars['header_data_position'] = theme_get_setting('header_data_position');
	$vars['footer_data_position'] = theme_get_setting('footer_data_position');
	$vars['list_item_theme'] = theme_get_setting('list_item_theme');
	$vars['list_item_dividertheme'] = theme_get_setting('list_item_dividertheme');
	$vars['list_item_counttheme'] = theme_get_setting('list_item_counttheme');
	$vars['list_item_splittheme'] = theme_get_setting('list_item_splittheme');
	$vars['menu_item_theme'] = theme_get_setting('menu_item_theme');
	$vars['menu_item_dividertheme'] = theme_get_setting('menu_item_dividertheme');
	$vars['menu_item_counttheme'] = theme_get_setting('menu_item_counttheme');
	$vars['menu_item_splittheme'] = theme_get_setting('menu_item_splittheme');
	$vars['header_data_theme'] = theme_get_setting('header_data_theme');
	$vars['content_data_theme'] = theme_get_setting('content_data_theme');
	$vars['footer_data_theme'] = theme_get_setting('footer_data_theme');	
	$vars['menu_item_inset'] = theme_get_setting('menu_item_inset');
	$vars['list_item_inset'] = theme_get_setting('list_item_inset');
	$vars['list_item_spliticon'] = theme_get_setting('list_item_spliticon');
	$vars['menu_item_spliticon'] = theme_get_setting('menu_item_spliticon');

	if(theme_get_setting('front_ron') && drupal_is_front_page()) {
		$vars['content'] = '<ul data-role="listview" data-theme="' . theme_get_setting('list_item_theme') . '" data-splittheme="' . theme_get_setting('list_item_splittheme') . '" data-spliticon="' . theme_get_setting('list_item_spliticon') . '" data-dividertheme="' . theme_get_setting('list_item_dividertheme') . '" data-counttheme="' . theme_get_setting('list_item_counttheme') . '" data-inset="' . theme_get_setting('list_item_inset') . '">' . $vars['content'] . '</ul>';
	}
	
	
}

/**
 * Implementation of template_preprocess_node()
 *
 * Process variables for node.tpl.php
 *
 * Most themes utilize their own copy of node.tpl.php. The default is located
 * inside "modules/node/node.tpl.php". Look in there for the full list of
 * variables.
 *
 * The $vars array contains the following arguments:
 * - $node
 * - $teaser
 * - $page
 *
 * @see node.tpl.php
 */
function mobile_jquery_preprocess_node(&$vars) {
  $node = $vars['node'];

  if ($vars['teaser'] && $node->teaser) {
	  if(theme_get_setting('front_ron') && drupal_is_front_page()) {
		  $vars['content'] = '<li><h2><a href="' . $node->path . '">' . $node->title . '</a></h2>' . $node->teaser . '</li>';
	  } else {
	    $vars['content'] = '<h2><a href="' . $node->path . '">' . $node->title . '</a></h2>' . $node->teaser;
    }
  }
  elseif (isset($node->body)) {
    $vars['content'] = $node->body;
  }
  else {
    $vars['content'] = '';
  }

}

function mobile_jquery_preprocess_block(&$vars) {
	switch ($vars['block']->module) {
		case 'menu':
		case 'user':
			$vars['block']->content = '<ul data-role="listview" data-inset="' . theme_get_setting('menu_item_inset') . '" data-theme="' . theme_get_setting('menu_item_theme') . '" data-dividertheme="' . theme_get_setting('menu_item_dividertheme') . '"  data-splittheme="' . theme_get_setting('menu_item_splittheme') . '"  data-counttheme="' . theme_get_setting('menu_item_counttheme') . '" class="menu-item"><li data-role="list-divider">' . $vars['block']->subject . '</li>' . $vars['block']->content;
			unset($vars['block']->subject);
			break;
	}
}









