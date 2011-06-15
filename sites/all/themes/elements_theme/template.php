<?php 

/**
* Return a themed set of links.
* An override of theme_links()
* Modified to use simple text styling instead of HTML & CSS
*
* @see theme_links
*/
function elements_theme_links($links, $attributes = array('class' => 'links')) {
  global $language;
  $output = '';

  if (count($links) > 0) {
    $output = '<ul'. drupal_attributes($attributes) .'>';

    $num_links = count($links);
    $i = 1;

    foreach ($links as $key => $link) {
      $class = $key;

      // Add first, last and active classes to the list of links to help out themers.
      if ($i == 1) {
        $class .= ' first';
      }
      if ($i == $num_links) {
        $class .= ' last';
      }
      if (isset($link['href']) && ($link['href'] == $_GET['q'] || ($link['href'] == '<front>' && drupal_is_front_page()))
          && (empty($link['language']) || $link['language']->language == $language->language)) {
        $class .= ' active';
      }
      $output .= '<li'. drupal_attributes(array('class' => $class)) .'>';

      if (isset($link['href'])) {

		// Change the way primary links are rendered
        if ($attributes['class'] == 'links primary-links') {
          $link_text = '<span class="menu-items"><h3>' . $link['title'] . '</h3>' . $link['attributes']['title'] . '</span>';
          $link['html'] = TRUE;
          $output .= l($link_text, $link['href'], $link);
        }
        else {
          // Pass in $link as $options, they share the same keys.
          $output .= l($link['title'], $link['href'], $link);
        }
      }
      else if (!empty($link['title'])) {
        // Some links are actually not links, but we wrap these in <span> for adding title and class attributes
        if (empty($link['html'])) {
          $link['title'] = check_plain($link['title']);
        }
        $span_attributes = '';
        if (isset($link['attributes'])) {
          $span_attributes = drupal_attributes($link['attributes']);
        }
        $output .= '<span'. $span_attributes .'>'. $link['title'] .'</span>';
      }

      $i++;
      $output .= "</li>\n";
    }

    $output .= '</ul>';
  }

  return $output;
}
