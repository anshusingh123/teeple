<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title><?php print $head_title ?></title>
  <?php print $head ?>
  <?php print $styles ?>
  <?php print $scripts ?>
  <!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="/styleIE.css" /><![endif]-->
  <!--[if lt IE 7]><link rel="stylesheet" type="text/css" href="/styleIE6.css" /><![endif]-->
  <!--[if lt IE 7]><script src="http://ie7-js.googlecode.com/svn/version/2.0(beta3)/IE7.js" type="text/javascript"></script><![endif]-->
</head>

<body class="<?php print $body_classes; ?>">
<?php if (!empty($admin)) print $admin; ?>

<div id="wrapper"> <!--width independent from body-->


	<div id="header">	  	

 		  <?php if (!empty($logo)): ?>
	        <div id="logo"><a href="<?php print $base_path; ?>" title="<?php print t('Home'); ?>" rel="home"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" id="logo-image" /></a></div>
	      <?php endif; ?> 
	
		  <div id="pages">
			  	<?php if (isset($primary_links)) : ?>
		          <?php print theme('links', $primary_links, array('class' => 'links primary-links')) ?>
		        <?php endif; ?>

		        <?php if (isset($secondary_links)) : ?>
		          <?php print theme('links', $secondary_links, array('class' => 'links secondary-links')) ?>
		        <?php endif; ?>	
		  </div>
	
		  <?php if (!empty($site_name)): ?>
			<h1 id="site-name"><a href="<?php print $base_path; ?>" title="<?php print t('Home'); ?>" rel="home">
		       <?php print $site_name; ?> </a>
			</h1>
		  <?php endif; ?> 
		  <?php if (!empty($site_slogan)): ?>
			<h2 id="slogan">
		       <?php print $site_slogan; ?>
			</h2>
		  <?php endif; ?>
		
		 
		  
		
		  <?php if (!empty($header)): ?>
	          <?php print $header ?>
	      <?php endif; ?>
	  
	</div> <!-- end header -->
	
	

	<div id="main">
			    
	  <div id="content">
		
		    <?php print $messages ?>
		
		    <?php if (!empty($title)): ?>
              <h1 class="title"><?php print $title; ?></h1>
            <?php endif; ?>
		
			<?php if (!empty($tabs)): ?>
		   	  <div class="tabs"><?php print $tabs; ?></div>
			<?php endif; ?>
		
			<?php print $content; ?>
	  </div>
	
 	  <div id="sidebar">
	
		  <?php if (!empty($search_box)): ?>
          <div id="sideSearch">
            <?php print $search_box; ?>
          </div><!-- /search-box -->
          <?php endif; ?>

		  <?php print $left ; ?>
	  </div>		
	  


	</div>
	
	<?php if (!empty($footer_message) || !empty($footer)): ?>
	    <div id="footer">
		    <?php if (!empty($footer)) print $footer ?><?php if (!empty($footer_message)) print $footer_message ?>
	    </div>
	<?php endif; ?>

	<?php print $closure ?>
</div>

</body>
</html>