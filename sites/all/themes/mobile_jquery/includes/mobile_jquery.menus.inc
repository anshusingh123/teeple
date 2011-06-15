<?php
function phptemplate_menu_tree($tree) {
  return $tree;
}

function phptemplate_menu_local_task($link, $active = FALSE) {
  return '<li data-icon="' . theme_get_setting('menu_item_icon') . '">'. $link ."</li>\n";
}

function phptemplate_menu_local_tasks() {
  $output = '';

  if ($primary = menu_primary_local_tasks()) {
    $output .= "<div data-role=\"navbar\"><ul>\n". $primary ."</ul></div>\n";
  }
  if ($secondary = menu_secondary_local_tasks()) {
    $output .= "<div data-role=\"navbar\"><ul>\n". $secondary ."</ul></div>\n";
  }

  return $output;
}


function phptemplate_menu_item_link($link) {
  if(module_exists('jquerymobile_ui') && $link['module'] == 'menu') {
	  return _jquerymobile_ui_menu_item_link($link);
  } else {
    if (empty($link['localized_options'])) {
	    $link['localized_options'] = array();
	  }
	  return l($link['title'], $link['href'], $link['localized_options']);
	}
}


function phptemplate_menu_item($link, $has_children, $menu = '', $in_active_trail = FALSE, $extra_class = NULL) {
  if(module_exists('jquerymobile_ui')) {
	  return _jquerymobile_ui_menu_item($link, $has_children, $menu, $in_active_trail, $extra_class);
  } else {
	  return '<li class="'. $class .'" data-icon="' . theme_get_setting('menu_item_icon') . '">'. $link . $menu ."</li>\n";
  }
}

