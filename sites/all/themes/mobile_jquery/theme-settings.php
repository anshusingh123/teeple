<?php
// $Id$

/**
 * Theme setting defaults
 */
function mobile_jquery_default_theme_settings() {
  $defaults = array(
		'data_theme' => 'a',
		'use_global' => 1,
		'front_ron' => 1,
		'list_inset' => 'true',
		'list_spliticon' => 'arrow-r',
		'list_item_inset' => '',
		'list_item_theme' => '',
		'list_item_dividertheme' => '',
		'list_item_counttheme' => '',
		'list_item_splittheme' => '',
		'list_item_spliticon' => '',
		'menu_item_inset' => '',
		'menu_item_theme' => '',
		'menu_item_dividertheme' => '',
		'menu_item_counttheme' => '',
		'menu_item_splittheme' => '',
		'menu_item_spliticon' => '',
		'header_data_theme' => '',
		'header_data_position' => 'inline',
		'content_data_theme' => '',
		'footer_data_theme' => '',
		'footer_data_position' => 'inline',
  );

  // Add site-wide theme settings
  $defaults = array_merge($defaults, theme_get_settings());

  return $defaults;
}


function mobile_jquery_initialize_theme_settings($theme_name) {
	$theme_settings = theme_get_settings($theme_name);
  if (!isset($theme_settings['data_theme'])) {
    // Retrieve saved or site-wide theme settings
    $theme_setting_name = str_replace('/', '_', 'theme_'. $theme_name .'_settings');
    $settings = (variable_get($theme_setting_name, FALSE)) ? theme_get_settings($theme_name) : theme_get_settings();
    
    // Combine default theme settings from .info file & theme-settings.php
    $theme_data = list_themes();   // get theme data for all themes
    $info_theme_settings = ($theme_name && isset($theme_data[$theme_name]->info['settings'])) ? $theme_data[$theme_name]->info['settings'] : array();
    $defaults = array_merge(mobile_jquery_default_theme_settings(), $info_theme_settings);

    // Set combined default & saved theme settings
    variable_set($theme_setting_name, array_merge($defaults, $settings));

    // Force theme settings refresh
    theme_get_setting('', TRUE);
	}
}

/**
* Implementation of THEMEHOOK_settings() function.
*
* @param $saved_settings
*   array An array of saved settings for this theme.
* @return
*   array A form array.
*/
function phptemplate_settings($saved_settings) {
  global $base_url;
/*
print '<pre>';
print_r(_jquerymobile_ui_get_custom_themes());
print '</pre>';
*/

  // Get theme name from url (admin/.../theme_name)
  $theme_name = arg(count(arg()) - 1);

  // Combine default theme settings from .info file & theme-settings.php
  $theme_data = list_themes();   // get data for all themes
  $info_theme_settings = ($theme_name && isset($theme_data[$theme_name]->info['settings'])) ? $theme_data[$theme_name]->info['settings'] : array();
  $defaults = array_merge(mobile_jquery_default_theme_settings(), $info_theme_settings);

  // Combine default and saved theme settings
  $settings = array_merge($defaults, $saved_settings);
  
  if($settings['use_global']) {
  	$settings['list_item_theme'] = $settings['data_theme'];
		$settings['list_item_theme'] = $settings['data_theme'];
		$settings['list_item_dividertheme'] = $settings['data_theme'];
		$settings['list_item_counttheme'] = $settings['data_theme'];
		$settings['list_item_splittheme'] = $settings['data_theme'];
		$settings['menu_item_theme'] = $settings['data_theme'];
		$settings['menu_item_dividertheme'] = $settings['data_theme'];
		$settings['menu_item_counttheme'] = $settings['data_theme'];
		$settings['menu_item_splittheme'] = $settings['data_theme'];
		$settings['header_data_theme'] = $settings['data_theme'];
		$settings['content_data_theme'] = $settings['data_theme'];
		$settings['footer_data_theme'] = $settings['data_theme'];
		$settings['menu_item_inset'] = $settings['list_inset'];
		$settings['list_item_inset'] = $settings['list_inset'];
		$settings['list_item_spliticon'] = $settings['list_spliticon'];
		$settings['menu_item_spliticon'] = $settings['list_spliticon'];
  }

	//Theming Styles
	$boolean_options 	= array(
	  'true' => t('True'),
	  'false' => t('False'),
  );

	$theme_options = array_merge(array(
		'' => t('default'),
		'a' => t('Black'),
		'b' => t('Blue'),
		'c' => t('White'),
		'd' => t('Grey'),
		'e' => t('Yellow')
	), _jquerymobile_ui_get_custom_themes());
	
	$icon_options = array(
		'' => t('default'),
	 'arrow-r' => t('Right arrow'),
	 'arrow-l' => t('Left arrow'),
	 'arrow-u' => t('Up arrow'),
	 'arrow-d' => t('Down arrow'),
	 'delete' => t('Delete'),
	 'plus' => t('Plus'),
	 'minus' => t('Minus'),
	 'check' => t('Check'),
	 'gear' => t('Gear'),
	 'refresh' => t('Refresh'),
	 'forward' => t('Forward'),
	 'back' => t('Back'),
	 'grid' => t('Grid'),
	 'star' => t('Star'),
	 'alert' => t('Alert'),
	 'info' => t('Info'),
	 'home' => t('Home'),
	 'search' => t('Search'),
	);
	$position_options = array(
		'' => t('default'),
		'inline' => t('inline'),
		'fixed' => t('fixed'),
	);
	

// Theme Settings Fieldset
  $form['mobile_jquery_container'] = array(
    '#type' => 'fieldset',
    '#title' => t('Theme Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
	  $form['mobile_jquery_container']['front_ron'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Front Page'),
	    '#description' => t('Is the front page the default river of news'),
	    '#default_value' => $settings['front_ron'],
	    '#options'       => array(
		    0 => t('False'),
		    1 => t('True'),		    
	    ),
	  );
// GLOBAL  
  $form['mobile_jquery_container']['global_styles'] = array(
    '#type' => 'fieldset',
    '#title' => t('Global Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
	  $form['mobile_jquery_container']['global_styles']['use_global'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Use global theme'),
	    '#default_value' => $settings['use_global'],
	    '#options'       => array(
		    0 => t('False'),
		    1 => t('True'),		    
	    ),
	  );
	  $form['mobile_jquery_container']['global_styles']['data_theme'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Global Theme (data-theme)'),
	    '#default_value' => $settings['data_theme'],
	    '#options'       => $theme_options,
	  );
  $form['mobile_jquery_container']['global_styles']['list_inset'] = array(
    '#type'          => 'radios',
    '#title'         => t('Global Inset (data-inset)'),
    '#default_value' => $settings['list_inset'],
    '#options'       => $boolean_options,
	);
  $form['mobile_jquery_container']['global_styles']['list_spliticon'] = array(
    '#type'          => 'select',
    '#title'         => t('Icon (data-icon)'),
    '#default_value' => $settings['list_spliticon'],
    '#options'       => $icon_options,
	);
  
//ITEM LISTS	
  $form['mobile_jquery_container']['item_list_styles'] = array(
    '#type' => 'fieldset',
    '#title' => t('Item List settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );	
  
  $form['mobile_jquery_container']['item_list_styles']['list_item_inset'] = array(
    '#type'          => 'radios',
    '#title'         => t('Inset (data-inset)'),
    '#default_value' => $settings['list_item_inset'],
    '#options'       => $boolean_options,
	);	
  $form['mobile_jquery_container']['item_list_styles']['list_item_theme'] = array(
    '#type'          => 'select',
    '#title'         => t('Theme (data-theme)'),
    '#default_value' => $settings['list_item_theme'],
    '#options'       => $theme_options,
	);
  $form['mobile_jquery_container']['item_list_styles']['list_item_dividertheme'] = array(
    '#type'          => 'select',
    '#title'         => t('Dividers (data-dividertheme)'),
    '#default_value' => $settings['list_item_dividertheme'],
    '#options'       => $theme_options,
	); 	
  $form['mobile_jquery_container']['item_list_styles']['list_item_counttheme'] = array(
    '#type'          => 'select',
    '#title'         => t('Count Bubbles (data-counttheme)'),
    '#default_value' => $settings['list_item_counttheme'],
    '#options'       => $theme_options,
	);	
  $form['mobile_jquery_container']['item_list_styles']['list_item_splittheme'] = array(
    '#type'          => 'select',
    '#title'         => t('Split (data-splittheme)'),
    '#default_value' => $settings['list_item_splittheme'],
    '#options'       => $theme_options,
	);
		
  $form['mobile_jquery_container']['item_list_styles']['list_item_spliticon'] = array(
    '#type'          => 'select',
    '#title'         => t('Icon (data-icon)'),
    '#default_value' => $settings['list_item_spliticon'],
    '#options'       => $icon_options,
	);
	
//MENU ITEM LIST
  $form['mobile_jquery_container']['menu_item_list_styles'] = array(
    '#type' => 'fieldset',
    '#title' => t('Menu Item Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );	
  
  $form['mobile_jquery_container']['menu_item_list_styles']['menu_item_inset'] = array(
    '#type'          => 'radios',
    '#title'         => t('Inset (data-inset)'),
    '#default_value' => $settings['menu_item_inset'],
    '#options'       => $boolean_options,
	);	
  $form['mobile_jquery_container']['menu_item_list_styles']['menu_item_theme'] = array(
    '#type'          => 'select',
    '#title'         => t('Theme (data-theme)'),
    '#default_value' => $settings['menu_item_theme'],
    '#options'       => $theme_options,
	);
  $form['mobile_jquery_container']['menu_item_list_styles']['menu_item_dividertheme'] = array(
    '#type'          => 'select',
    '#title'         => t('Divider (data-dividertheme)'),
    '#default_value' => $settings['menu_item_dividertheme'],
    '#options'       => $theme_options,
	); 	
  $form['mobile_jquery_container']['menu_item_list_styles']['menu_item_counttheme'] = array(
    '#type'          => 'select',
    '#title'         => t('Count Bubbles (data-counttheme)'),
    '#default_value' => $settings['menu_item_counttheme'],
    '#options'       => $theme_options,
	);	
  $form['mobile_jquery_container']['menu_item_list_styles']['menu_item_splittheme'] = array(
    '#type'          => 'select',
    '#title'         => t('Split (data-splittheme)'),
    '#default_value' => $settings['menu_item_splittheme'],
    '#options'       => $theme_options,
	);
		
  $form['mobile_jquery_container']['menu_item_list_styles']['menu_item_spliticon'] = array(
    '#type'          => 'select',
    '#title'         => t('Icon (data-icon)'),
    '#default_value' => $settings['menu_item_spliticon'],
    '#options'       => $icon_options,
	);  
	  
//HEADER	
  $form['mobile_jquery_container']['header_styles'] = array(
    '#type' => 'fieldset',
    '#title' => t('Header Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );    
	  $form['mobile_jquery_container']['header_styles']['header_data_theme'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Theme (data-theme)'),
	    '#default_value' => $settings['header_data_theme'],
	    '#options'       => $theme_options,
	  );  
	  $form['mobile_jquery_container']['header_styles']['header_data_position'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Position (data-position)'),
	    '#default_value' => $settings['header_data_position'],
	    '#options'       => $position_options,
	  );
	  
//CONTENT  
  $form['mobile_jquery_container']['content_styles'] = array(
    '#type' => 'fieldset',
    '#title' => t('Content Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );    
	  $form['mobile_jquery_container']['content_styles']['content_data_theme'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Theme (data-theme)'),
	    '#default_value' => $settings['content_data_theme'],
	    '#options'       => $theme_options,
	  ); 
	  
//FOOTER  
  $form['mobile_jquery_container']['footer_styles'] = array(
    '#type' => 'fieldset',
    '#title' => t('Footer Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );    
	  $form['mobile_jquery_container']['footer_styles']['footer_data_theme'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Theme (data-theme)'),
	    '#default_value' => $settings['footer_data_theme'],
	    '#options'       => $theme_options,
	  );    
	  $form['mobile_jquery_container']['footer_styles']['footer_data_position'] = array(
	    '#type'          => 'select',
	    '#title'         => t('Position (data-position)'),
	    '#default_value' => $settings['footer_data_position'],
	    '#options'       => $position_options,
	  );
  
	$form['#submit'][] = 'mobile_jquery_settings_submit';

  // Return theme settings form
  return $form;
}

function mobile_jquery_settings_submit($form, $form_state) {
    dsm($form);
    dsm($form_state);
}
