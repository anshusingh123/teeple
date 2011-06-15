<?php
// $Id$
 /**
 * @file
 * Part of Open Media Project Install
 */

/**
* function to create CCK content types
*/
function _om_project_install_create_content_types() {

  // in order to create CCK content types, we use the form-based content_copy import/export functionality
    
  //Load existing content_types so we're not trying to recreate something that already exists
  $content_info = _content_type_info();
    
  // create om_project_type content type
  if (!in_array('om_project_type', array_keys($content_info['content types']))) {
     module_load_include('inc', 'om_project', 'includes/content_types/om_project_type_content_type');
     _om_project_install_create_om_project_type_content_type();
  }
  
  // create om_project_type content type
  if (!in_array('om_timeslot_theme', array_keys($content_info['content types']))) {
     module_load_include('inc', 'om_project', 'includes/content_types/om_timeslot_theme_content_type');
     _om_project_install_create_om_timeslot_theme_content_type();
  }
  
  // create om_project content type
  if (!in_array('om_project', array_keys($content_info['content types']))) {
     module_load_include('inc', 'om_project', 'includes/content_types/om_project_content_type');
     _om_project_install_create_om_project_content_type();
  }
  
  // create om_project_blog content type
  if (!in_array('om_project_blog', array_keys($content_info['content types']))) {
     module_load_include('inc', 'om_project', 'includes/content_types/om_project_blog_content_type');
     _om_project_install_create_om_project_blog_content_type();
  }
  
  // create om_project content type
  if (!in_array('om_project_event', array_keys($content_info['content types']))) {
     module_load_include('inc', 'om_project', 'includes/content_types/om_project_event_content_type');
     _om_project_install_create_om_project_event_content_type();
  }
  
  // create om_project content type
  if (!in_array('om_project_wiki', array_keys($content_info['content types']))) {
     module_load_include('inc', 'om_project', 'includes/content_types/om_project_wiki_content_type');
     _om_project_install_create_om_project_wiki_content_type();
  }
  
  return;
} // function _om_project_install_create_content_types


/**
* function to import a new content type using CCK import functionality
*/
function _om_project_install_import_content_type($macro) {
  $form_state = array();
  $form = content_copy_import_form($form_state);
  $form_state['values']['type_name'] = '<create>';
  $form_state['values']['macro'] = $macro;
  return content_copy_import_form_submit($form, $form_state);
} // function _om_project_install_import_content_type  

