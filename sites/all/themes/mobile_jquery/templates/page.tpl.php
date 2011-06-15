<?php
// $Id$
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">

<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <script type="text/javascript"><?php /* Needed to avoid Flash of Unstyled Content in IE */ ?> </script>
</head>
<body class="<?php print $body_classes; ?>">

  <div id="page" data-role="page" data-theme="<?php print $data_theme; ?>">
    <div id="header" data-role="header" data-position="<?php print $header_data_position; ?>"  data-theme="<?php print $header_data_theme; ?>">
      <h1><?php print $site_name; ?></h1>
      <?php if(!$is_front): ?>
      <a href="<?php print $front_page; ?>" data-icon="home" data-iconpos="notext">Home</a>
      <?php endif; ?>

      <?php if (!empty($header)): ?>
        <?php print $header; ?>
      <?php endif; ?>

      <?php if (!empty($tabs)) { print $tabs; } ?>
    </div> <!-- /header -->

    <div id="content" data-role="content" data-theme="<?php print $content_data_theme; ?>">
      <?php print $content; ?>
  		<?php if (!empty($primary_links)): ?>
	      <ul data-role="listview"  data-inset="<?php print $menu_item_inset ?>"  data-theme="<?php print $menu_item_theme ?>" data-splittheme="<?php print $menu_item_splittheme ?>" data-spliticon="<?php print $menu_item_spliticon ?>" data-dividertheme="<?php print $menu_item_dividertheme ?>" data-counttheme="<?php print $menu_item_counttheme ?>">
            <li data-role="list-divider">Main Menu</li>
	      <?php
	        foreach($primary_links as $link_name => $link) {
	          $link_title = $link['attributes']['title'] ? $link['attributes']['title'] : $link['title'];
	          print "<li><a href='" . $base_path . $link['href'] . "'>" . $link_title . "</a></li>";
	        }
			  ?>
			  </ul>
			<?php endif; ?>

	    <?php if (!empty($secondary_links)): ?>
	      <ul data-role="listview"  data-inset="<?php print $menu_item_inset ?>"  data-theme="<?php print $menu_item_theme ?>" data-splittheme="<?php print $menu_item_splittheme ?>" data-spliticon="<?php print $menu_item_spliticon ?>" data-dividertheme="<?php print $menu_item_dividertheme ?>" data-counttheme="<?php print $menu_item_counttheme ?>">
	      <?php
	        foreach($secondary_links as $link_name => $link) {
	          $link_title = $link['attributes']['title'] ? $link['attributes']['title'] : $link['title'];
	          print "<li><a href='" . $base_path . $link['href'] . "'>" . $link_title . "</a></li>";
	        }
			  ?>
			  </ul>
			<?php endif; ?>
            
      <?php if (!empty($left)) { print $left; } ?>

      <?php if (!empty($right)) { print $right; } ?>

    </div> <!-- /content -->

    <div id="footer" data-role="footer" data-position="<?php print $footer_data_position; ?>" data-theme="<?php print $footer_data_theme; ?>">
	    <?php if (!empty($footer)): print $footer; endif; ?>
	    <?php print $footer_message; ?>
    </div> <!-- /footer -->


    <?php print $closure; ?>
  </div> <!-- /page -->

</body>
</html>
