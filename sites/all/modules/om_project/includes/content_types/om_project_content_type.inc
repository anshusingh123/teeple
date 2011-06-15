<?php
// $Id$
 /**
 * @file
 * Part of Open Media Project Install
 */

/**
* function to create Open Media Project content type
*/
function _om_project_install_create_om_project_content_type() {

  $result = _om_project_install_import_content_type("\$content['type']  = array (
  'name' => 'Project',
  'type' => 'om_project',
  'description' => '<b>Open Media System</b> - This content type is used to group a collection of shows as a series and manage permissions using Organic Groups. ',
  'title_label' => 'Title',
  'body_label' => 'Full Description',
  'min_word_count' => '0',
  'help' => '',
  'node_options' => 
  array (
    'status' => true,
    'promote' => false,
    'sticky' => false,
    'revision' => false,
  ),
  'upload' => '1',
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
  'old_type' => 'om_project',
  'orig_type' => '',
  'module' => 'node',
  'custom' => '1',
  'modified' => '1',
  'locked' => '0',
  'location_maxnum' => '1',
  'location_defaultnum' => '1',
  'location_weight' => '9',
  'location_collapsible' => 1,
  'location_collapsed' => 1,
  'location_rss' => 'simple',
  'og_content_type_usage' => 'group',
  'comment' => '0',
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
  'merci_status' => '1',
  'merci_spare_items' => 0,
  'merci_max_hours_per_reservation' => '0',
  'merci_allow_overnight' => '0',
  'merci_allow_weekends' => '0',
  'merci_rate_per_hour' => '0',
  'merci_late_fee_per_hour' => '0',
  'merci_fee_free_hours' => '0',
  'merci_min_cancel_hours' => '0',
  'merci_autocheckout' => '0',
  'merci_autocheckin' => '0',
  'merci_selfcheckout' => '0',
  'ant' => '0',
  'ant_pattern' => '',
  'ant_php' => 0,
  'feedapi' => 
  array (
    'enabled' => false,
    'upload_method' => 'url',
    'refresh_on_create' => 0,
    'update_existing' => 1,
    'refresh_time' => 1800,
    'items_delete' => 0,
    'parsers' => 
    array (
      'parser_simplepie' => 
      array (
        'enabled' => false,
        'weight' => 0,
        'cache_lifetime' => '3600',
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
        'enabled' => false,
        'weight' => 0,
        'content_type' => 'webform',
        'input_format' => 0,
        'node_date' => 'feed',
        'x_dedupe' => 0,
      ),
      'feedapi_inherit' => 
      array (
        'enabled' => false,
        'weight' => 0,
        'inherit_og' => true,
        'inherit_taxonomy' => true,
        'inherit_author' => true,
      ),
    ),
  ),
);
\$content['groups']  = array (
  0 => 
  array (
    'label' => 'Project Page',
    'group_type' => 'standard',
    'settings' => 
    array (
      'form' => 
      array (
        'style' => 'fieldset',
        'description' => 'This information appears on the project page.',
      ),
      'display' => 
      array (
        'description' => '',
        5 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'teaser' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        4 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        2 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        3 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'label' => 'above',
      ),
    ),
    'weight' => '5',
    'group_name' => 'group_project_page',
  ),
  1 => 
  array (
    'label' => 'Metadata (defaults for shows in this project)',
    'group_type' => 'standard',
    'settings' => 
    array (
      'form' => 
      array (
        'style' => 'fieldset',
        'description' => '',
      ),
      'display' => 
      array (
        'description' => '',
        5 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'teaser' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        4 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        2 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        3 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'label' => 'above',
      ),
    ),
    'weight' => '13',
    'group_name' => 'group_metadata',
  ),
  2 => 
  array (
    'label' => 'Scheduling (defaults for shows in this project)',
    'group_type' => 'standard',
    'settings' => 
    array (
      'form' => 
      array (
        'style' => 'fieldset',
        'description' => '',
      ),
      'display' => 
      array (
        'description' => '',
        5 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'teaser' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        4 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        2 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        3 => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => 
        array (
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'label' => 'above',
      ),
    ),
    'weight' => '14',
    'group_name' => 'group_scheduling',
  ),
);
\$content['fields']  = array (
  0 => 
  array (
    'label' => 'Type of Project',
    'field_name' => 'field_om_type_of_project',
    'type' => 'nodereference',
    'widget_type' => 'nodereference_select',
    'change' => 'Change basic information',
    'weight' => '3',
    'locked' => '1',
    'autocomplete_match' => 'contains',
    'size' => 60,
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'nid' => '',
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => NULL,
    'group' => false,
    'required' => 0,
    'multiple' => '0',
    'referenceable_types' => 
    array (
      'om_project_type' => 'om_project_type',
    ),
    'advanced_view' => '--',
    'advanced_view_args' => '',
    'op' => 'Save field settings',
    'module' => 'nodereference',
    'widget_module' => 'nodereference',
    'columns' => 
    array (
      'nid' => 
      array (
        'type' => 'int',
        'unsigned' => true,
        'not null' => false,
        'index' => true,
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
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  1 => 
  array (
    'label' => 'Project Logo',
    'field_name' => 'field_logo',
    'type' => 'filefield',
    'widget_type' => 'imagefield_widget',
    'change' => 'Change basic information',
    'weight' => 0,
    'locked' => '1',
    'file_extensions' => 'jpg jpeg png gif',
    'file_path' => '',
    'max_filesize_per_file' => '',
    'max_filesize_per_node' => '',
    'max_resolution' => 0,
    'min_resolution' => 0,
    'custom_alt' => 0,
    'alt' => '',
    'custom_title' => 0,
    'title_type' => 'textfield',
    'title' => '',
    'use_default_image' => 0,
    'default_image_upload' => '',
    'default_image' => NULL,
    'description' => '',
    'group' => 'group_project_page',
    'required' => 0,
    'multiple' => '0',
    'list_field' => 0,
    'list_default' => 1,
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
        'format' => 'above',
      ),
      'teaser' => 
      array (
        'format' => 'image_plain',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'image_plain',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'image_plain',
        'exclude' => 0,
      ),
      2 => 
      array (
        'format' => 'image_plain',
        'exclude' => 0,
      ),
      3 => 
      array (
        'format' => 'image_plain',
        'exclude' => 0,
      ),
    ),
  ),
  2 => 
  array (
    'label' => 'Public Contact Info',
    'field_name' => 'field_om_public_contact_info',
    'type' => 'text',
    'widget_type' => 'text_textarea',
    'change' => 'Change basic information',
    'weight' => '1',
    'locked' => '1',
    'rows' => '5',
    'size' => 60,
    'description' => '',
    'default_value' => 
    array (
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_public_contact_info' => 
      array (
        0 => 
        array (
          'value' => '',
          '_error_element' => 'default_value_widget][field_om_public_contact_info][0][value',
        ),
      ),
    ),
    'group' => 'group_project_page',
    'required' => 0,
    'multiple' => '0',
    'text_processing' => '0',
    'max_length' => '',
    'allowed_values' => '',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'text',
    'widget_module' => 'text',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'text',
        'size' => 'big',
        'not null' => false,
        'sortable' => true,
        'views' => true,
      ),
    ),
    'display_settings' => 
    array (
      'label' => 
      array (
        'format' => 'above',
      ),
      'teaser' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  3 => 
  array (
    'label' => 'Public Email',
    'field_name' => 'field_om_public_email',
    'type' => 'text',
    'widget_type' => 'text_textfield',
    'change' => 'Change basic information',
    'weight' => '2',
    'rows' => 1,
    'size' => 60,
    'description' => '',
    'default_value' => 
    array (
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_public_email' => 
      array (
        0 => 
        array (
          'value' => '',
          '_error_element' => 'default_value_widget][field_om_public_email][0][value',
        ),
      ),
    ),
    'group' => 'group_project_page',
    'required' => 0,
    'multiple' => '0',
    'text_processing' => '0',
    'max_length' => '',
    'allowed_values' => '',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'text',
    'widget_module' => 'text',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'text',
        'size' => 'big',
        'not null' => false,
        'sortable' => true,
        'views' => true,
      ),
    ),
    'display_settings' => 
    array (
      'label' => 
      array (
        'format' => 'above',
      ),
      'teaser' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  4 => 
  array (
    'label' => 'Website',
    'field_name' => 'field_om_public_url',
    'type' => 'text',
    'widget_type' => 'text_textfield',
    'change' => 'Change basic information',
    'weight' => '3',
    'locked' => '1',
    'rows' => 1,
    'size' => 60,
    'description' => '',
    'default_value' => 
    array (
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_public_url' => 
      array (
        0 => 
        array (
          'value' => '',
          '_error_element' => 'default_value_widget][field_om_public_url][0][value',
        ),
      ),
    ),
    'group' => 'group_project_page',
    'required' => 0,
    'multiple' => '0',
    'text_processing' => '0',
    'max_length' => '',
    'allowed_values' => '',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'text',
    'widget_module' => 'text',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'text',
        'size' => 'big',
        'not null' => false,
        'sortable' => true,
        'views' => true,
      ),
    ),
    'display_settings' => 
    array (
      'label' => 
      array (
        'format' => 'above',
      ),
      'teaser' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  5 => 
  array (
    'label' => 'Credits',
    'field_name' => 'field_public_om_credits',
    'type' => 'text',
    'widget_type' => 'text_textarea',
    'change' => 'Change basic information',
    'weight' => '4',
    'locked' => '1',
    'rows' => '5',
    'size' => 60,
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'value' => '',
        '_error_element' => 'default_value_widget][field_public_om_credits][0][value',
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_public_om_credits' => 
      array (
        0 => 
        array (
          'value' => '',
          '_error_element' => 'default_value_widget][field_public_om_credits][0][value',
        ),
      ),
    ),
    'group' => 'group_project_page',
    'required' => 0,
    'multiple' => '0',
    'text_processing' => '0',
    'max_length' => '',
    'allowed_values' => '',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'text',
    'widget_module' => 'text',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'text',
        'size' => 'big',
        'not null' => false,
        'sortable' => true,
        'views' => true,
      ),
    ),
    'display_settings' => 
    array (
      'label' => 
      array (
        'format' => 'above',
      ),
      'teaser' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      2 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      3 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  6 => 
  array (
    'label' => 'Headline for News Block',
    'field_name' => 'field_headline_for_news_block',
    'type' => 'text',
    'widget_type' => 'text_textfield',
    'change' => 'Change basic information',
    'weight' => '6',
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
        'format' => 'hidden',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      2 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      3 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  7 => 
  array (
    'label' => 'Language',
    'field_name' => 'field_om_language',
    'type' => 'text',
    'widget_type' => 'optionwidgets_select',
    'change' => 'Change basic information',
    'weight' => '1',
    'description' => '',
    'default_value' => 
    array (
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_language' => 
      array (
        'value' => '',
      ),
    ),
    'group' => 'group_metadata',
    'required' => 1,
    'multiple' => '0',
    'text_processing' => '0',
    'max_length' => '',
    'allowed_values' => 'eng|English
aar|Afar
abk|Abkhazian
ace|Achinese
ach|Acoli
ada|Adangme
ady|Adyghe, Adygei
afa|Afro-Asiatic (Other)
afh|Afrihili
afr|Afrikaans
ain|Ainu
aka|Akan
akk|Akkadian
alb|Albanian
ale|Aleut
alg|Algonquian languages
alt|Southern Altai
amh|Amharic
ang|English, Old (ca.450-1100)
anp|Angika
apa|Apache languages
ara|Arabic
arc|Aramaic
arg|Aragonese
arm|Armenian
arn|Araucanian
arp|Arapaho
art|Artificial (Other)
arw|Arawak
asm|Assamese
ast|Asturian, Bable
ath|Athapascan languages
aus|Australian languages
ava|Avaric
ave|Avestan
awa|Awadhi
aym|Aymara
aze|Azerbaijani
bad|Banda
bai|Bamileke languages
bak|Bashkir
bal|Baluchi
bam|Bambara
ban|Balinese
baq|Basque
bas|Basa
bat|Baltic (Other)
bej|Beja
bel|Belarusian
bem|Bemba
ben|Bengali
ber|Berber (Other)
bho|Bhojpuri
bih|Bihari
bik|Bikol
bin|Bini
bis|Bislama
bla|Siksika
bnt|Bantu (Other)
bos|Bosnian
bra|Braj
bre|Breton
btk|Batak (Indonesia)
bua|Buriat
bug|Buginese
bul|Bulgarian
bur|Burmese
byn|Blin, Bilin
cad|Caddo
cai|Central American Indian (Other)
car|Carib
cat|Catalan, Valencian
cau|Caucasian (Other)
ceb|Cebuano
cel|Celtic (Other)
cha|Chamorro
chb|Chibcha 
che|Chechen 
chg|Chagatai
chi|Chinese
chk|Chuukese
chm|Mari
chn|Chinook jargon
cho|Choctaw
chp|Chipewyan
chr|Cherokee
chu|Church Slavic, Old Slavonic, Old Bulgarian,
chv|Chuvash
chy|Cheyenne
cmc|Chamic languages
cop|Coptic
cor|Cornish
cos|Corsican
cpe|Creoles and pidgins, English based (Other)
cpf|Creoles and pidgins, French-based (Other)
cpp|Creoles and pidgins, Portuguese-based (Other)
cre|Cree
crh|Crimean Tatar, Crimean Turkish
crp|Creoles and pidgins (Other)
csb|Kashubian
cus|Cushitic (Other)
cze|Czech
dak|Dakota
dan|Danish 
dar|Dargwa
day|Dayak
del|Delaware
den|Slave (Athapascan)
dgr|Dogrib
din|Dinka
div|Divehi
doi|Dogri
dra|Dravidian (Other)
dsb|Lower Sorbian
dua|Duala
dum|Dutch, Middle (ca.1050-1350)
dut|Dutch, Flemish
dyu|Dyula
dzo|Dzongkha
efi|Efik
egy|Egyptian (Ancient)
eka|Ekajuk
elx|Elamite
eng|English
enm|English, Middle (1100-1500)
epo|Esperanto
est|Estonian
ewe|Ewe
ewo|Ewondo
fan|Fang
fao|Faroese
fat|Fanti
fij|Fijian
fil|Filipino, Pilipino
fin|Finnish
fiu|Finno-Ugrian (Other)
fon|Fon
fre|French
frm|French, Middle (ca.1400-1600)
fro|French, Old (842-ca.1400)
frr|Northern Frisian
frs|Eastern Frisian
fry|Western Frisian
ful|Fulah
fur|Friulian
gaa|Ga
gay|Gayo
gba|Gbaya
gem|Germanic (Other)
geo|Georgian
ger|German
gez|Geez
gil|Gilbertese
gla|Gaelic, Scottish Gaelic
gle|Irish
glg|Galician
glv|Manx
gmh|German, Middle High (ca.1050-1500)
goh|German, Old High (ca.750-1050)
gon|Gondi
gor|Gorontalo
got|Gothic
grb|Grebo
grc|Greek, Ancient (to 1453)
gre|Greek, Modern (1453-)
grn|Guarani
gsw|Alemanic, Swiss German
guj|Gujarati
gwi|Gwichin
hai|Haida
hat|Haitian, Haitian Creole
hau|Hausa
haw|Hawaiian
heb|Hebrew
her|Herero
hil|Hiligaynon
him|Himachali
hin|Hindi
hit|Hittite
hmn|Hmong
hmo|Hiri Motu
hsb|Upper Sorbian
hun|Hungarian
hup|Hupa
iba|Iban
ibo|Igbo
ice|Icelandic
ido|Ido
iii|Sichuan Yi
ijo|Ijo
iku|Inuktitut
ile|Interlingue
ilo|Iloko
ina|Interlingua
inc|Indic (Other)
ind|Indonesian
ine|Indo-European (Other)
inh|Ingush
ipk|Inupiaq
ira|Iranian (Other)
iro|Iroquoian languages
ita|Italian
jav|Javanese
jbo|Lojban
jpn|Japanese
jpr|Judeo-Persian
jrb|Judeo-Arabic
kaa|Kara-Kalpak
kab|Kabyle
kac|Kachin
kal|Kalaallisut, Greenlandic
kam|Kamba
kan|Kannada
kar|Karen
kas|Kashmiri
kau|Kanuri
kaw|Kawi
kaz|Kazakh
kbd|Kabardian
kha|Khasi
khi|Khoisan (Other)
khm|Khmer
kho|Khotanese
kik|Kikuyu, Gikuyu
kin|Kinyarwanda
kir|Kirghiz
kmb|Kimbundu
kok|Konkani
kom|Komi
kon|Kongo
kor|Korean
kos|Kosraean
kpe|Kpelle
krc|Karachay-Balkar
krl|Karelian
kro|Kru
kru|Kurukh
kua|Kuanyama, Kwanyama
kum|Kumyk
kur|Kurdish
kut|Kutenai
lad|Ladino
lah|Lahnda
lam|Lamba
lao|Lao
lat|Latin
lav|Latvian
lez|Lezghian
lim|Limburgan, Limburger, Limburgish
lin|Lingala
lit|Lithuanian
lol|Mongo
loz|Lozi
ltz|Luxembourgish, Letzeburgesch
lua|Luba-Lulua
lub|Luba-Katanga
lug|Ganda
lui|Luiseno
lun|Lunda
luo|Luo (Kenya and Tanzania)
lus|lushai
mac|Macedonian
mad|Madurese
mag|Magahi
mah|Marshallese
mai|Maithili
mak|Makasar
mal|Malayalam
man|Mandingo
mao|Maori
map|Austronesian (Other)
mar|Marathi
mas|Masai
may|Malay
mdf|Moksha
mdr|Mandar
men|Mende
mga|Irish, Middle (900-1200)
mic|Mikmaq, Micmac
min|Minangkabau
mis|Miscellaneous languages
mkh|Mon-Khmer (Other)
mlg|Malagasy
mlt|Maltese
mnc|Manchu
mni|Manipuri
mno|Manobo languages 
moh|Mohawk
mol|Moldavian
mon|Mongolian
mos|Mossi
mul|Multiple languages
mun|Munda languages
mus|Creek
mwl|Mirandese
mwr|Marwari
myn|Mayan languages
myv|Erzya
nah|Nahuatl
nai|North American Indian
nap|Neapolitan
nau|Nauru
nav|Navajo, Navaho
nbl|Ndebele, South, South Ndebele
nde|Ndebele, North, North Ndebele
ndo|Ndonga
nds|Low German, Low Saxon
nep|Nepali
new|Newari, Nepal Bhasa
nia|Nias
nic|Niger-Kordofanian (Other)
niu|Niuean
nno|Norwegian Nynorsk, Nynorsk, Norwegian
nob|Norwegian Bokml, Bokml, Norwegian
nog|Nogai
non|Norse, Old
nor|Norwegian
nso|Northern Sotho, Pedi, Sepedi
nub|Nubian languages
nwc|Classical Newari, lassical Nepal Bhasa
nya|Chichewa, Chewa, Nyanja
nym|Nyamwezi
nyn|Nyankole
nyo|Nyoro
nzi|Nzima
oci|Occitan (post 1500), Provenal
oji|Ojibwa
ori|Oriya
orm|Oromo
osa|Osage
oss|Ossetian, Ossetic
ota|Turkish, Ottoman (1500-1928)
oto|Otomian languages
paa|Papuan (Other)
pag|Pangasinan
pal|Pahlavi
pam|Pampanga
pan|Panjabi, Punjabi
pap|Papiamento
pau|Palauan
peo|Persian, Old (ca.600-400 B.C.)
per|Persian
phi|Philippine (Other)
phn|Phoenician
pli|Pali
pol|Polish 
pon|Pohnpeian
por|Portuguese 
pra|Prakrit languages
pro|Provenal, Old (to 1500)
pus|Pushto
qaa|Reserved for local use
que|Quechua
raj|Rajasthani
rap|Rapanui 
rar|Rarotongan
roa|Romance (Other)
roh|Raeto-Romance
rom|Romany
rum|Romanian
run|Rundi
rup|Aromanian, Arumanian, Macedo-Romanian
rus|Russian
sad|Sandawe
sag|Sango
sah|Yakut
sai|South American Indian (Other)
sal|Salishan languages 
sam|Samaritan Aramaic
san|Sanskrit
sas|Sasak
sat|Santali
scc|Serbian
scn|Sicilian
sco|Scots
scr|Croatian
sel|Selkup
sem|Semitic (Other) 
sga|Irish, Old (to 900) 
sgn|Sign Languages
shn|Shan 
sid|Sidamo
sin|Sinhala
sio|Siouan languages
sit|Sino-Tibetan (Other)
sla|Slavic (Other)
slo|Slovak
slv|Slovenian
sma|Southern Sami
sme|Northern Sami
smi|Sami languages (Other)
smj|Lule Sami
smn|Inari Sami
smo|Samoan 
sms|Skolt Sami
sna|Shona
snd|Sindhi
snk|Soninke 
sog|Sogdian
som|Somali
son|Songhai
sot|Sotho, Southern 
spa|Spanish
srd|Sardinian
srn|Sranan Togo
srr|Serer
ssa|Nilo-Saharan (Other)
ssw|Swati
suk|Sukuma
sun|Sundanese 
sus|Susu
sux|Sumerian
swa|Swahili
swe|Swedish
syr|Syriac
tah|Tahitian
tai|Tai (Other)
tam|Tamil
tat|Tatar 
tel|Telugu
tem|Timne
ter|Tereno
tet|Tetum
tgk|Tajik
tgl|Tagalog
tha|Thai
tib|Tibetan
tig|Tigre
tir|Tigrinya
tiv|Tiv
tkl|Tokelau
tlh|Klingon, tlhIngan-Hol
tli|Tlingit
tmh|Tamashek
tog|Tonga (Nyasa) 
ton|Tonga (Tonga Islands)
tpi|Tok Pisin
tsi|Tsimshian
tsn|Tswana
tso|Tsonga
tuk|Turkmen
tum|Tumbuka
tup|Tupi languages
tur|Turkish
tut|Altaic (Other)
tvl|Tuvalu
twi|Twi
tyv|Tuvinian
udm|Udmurt
uga|Ugaritic
uig|Uighur, Uyghur
ukr|Ukrainian
umb|Umbundu
und|Undetermined 
urd|Urdu
uzb|Uzbek
vai|Vai
ven|Venda 
vie|Vietnamese
vol|Volapk
vot|Votic
wak|Wakashan languages
wal|Walamo
war|Waray
was|Washo
wel|Welsh
wen|Sorbian languages
wln|Walloon
wol|Wolof
xal|Kalmyk
xho|Xhosa
yao|Yao
yap|Yapese
yid|Yiddish
yor|Yoruba
ypk|Yupik languages
zap|Zapotec
zen|Zenaga
zha|Zhuang, Chuang
znd|Zande
zul|Zulu
zun|Zuni
zxx|No linguistic content',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'text',
    'widget_module' => 'optionwidgets',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'text',
        'size' => 'big',
        'not null' => false,
        'sortable' => true,
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
        'format' => 'hidden',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  8 => 
  array (
    'label' => 'Audience',
    'field_name' => 'field_om_audience',
    'type' => 'text',
    'widget_type' => 'optionwidgets_select',
    'change' => 'Change basic information',
    'weight' => '2',
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'value' => '',
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_audience' => 
      array (
        'value' => '',
      ),
    ),
    'group' => 'group_metadata',
    'required' => 0,
    'multiple' => '0',
    'text_processing' => '0',
    'max_length' => '',
    'allowed_values' => 'Adult|Adult
College|College
Educator|Educator
Female|Female
General|General
General Education|General Education
High School (grades 10-12)|High School (grades 10-12)
Intermediate (grades 7-9)|Intermediate (grades 7-9)
K-12 (general)|K-12 (general)
Male|Male
Other|Other
Post Graduate|Post Graduate
Pre-school (kindergarten)|Pre-school (kindergarten)
Primary (grades 1-6)|Primary (grades 1-6)
Special Audiences|Special Audiences
Vocational|Vocational',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'text',
    'widget_module' => 'optionwidgets',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'text',
        'size' => 'big',
        'not null' => false,
        'sortable' => true,
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
        'format' => 'hidden',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  9 => 
  array (
    'label' => 'Safe for All Ages',
    'field_name' => 'field_om_safe_for_all_ages',
    'type' => 'number_integer',
    'widget_type' => 'optionwidgets_onoff',
    'change' => 'Change basic information',
    'weight' => '3',
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'value' => 0,
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_safe_for_all_ages' => 
      array (
        'value' => false,
      ),
    ),
    'group' => 'group_metadata',
    'required' => 0,
    'multiple' => '0',
    'min' => '',
    'max' => '',
    'prefix' => '',
    'suffix' => '',
    'allowed_values' => '0
1|Safe for All Ages',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'number',
    'widget_module' => 'optionwidgets',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'int',
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
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  10 => 
  array (
    'label' => 'Locally Produced',
    'field_name' => 'field_om_locally_produced',
    'type' => 'number_integer',
    'widget_type' => 'optionwidgets_onoff',
    'change' => 'Change basic information',
    'weight' => '4',
    'locked' => '1',
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'value' => 0,
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_locally_produced' => 
      array (
        'value' => false,
      ),
    ),
    'group' => 'group_metadata',
    'required' => 0,
    'multiple' => '0',
    'min' => '',
    'max' => '',
    'prefix' => '',
    'suffix' => '',
    'allowed_values' => '0
1|Locally Produced',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'number',
    'widget_module' => 'optionwidgets',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'int',
        'not null' => false,
        'sortable' => true,
      ),
    ),
    'display_settings' => 
    array (
      'weight' => '5',
      'parent' => 'group_metadata',
      'label' => 
      array (
        'format' => 'above',
      ),
      'teaser' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      2 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
      3 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  11 => 
  array (
    'label' => 'Share',
    'field_name' => 'field_om_share',
    'type' => 'number_integer',
    'widget_type' => 'optionwidgets_onoff',
    'change' => 'Change basic information',
    'weight' => '5',
    'locked' => '1',
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'value' => 0,
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_share' => 
      array (
        'value' => false,
      ),
    ),
    'group' => 'group_metadata',
    'required' => 0,
    'multiple' => '0',
    'min' => '',
    'max' => '',
    'prefix' => '',
    'suffix' => '',
    'allowed_values' => '0
1|Share with Other Locations',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'number',
    'widget_module' => 'optionwidgets',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'int',
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
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  12 => 
  array (
    'label' => 'Primary Theme Block',
    'field_name' => 'field_om_primary_timeslot',
    'type' => 'nodereference',
    'widget_type' => 'nodereference_select',
    'change' => 'Change basic information',
    'weight' => 0,
    'locked' => '1',
    'autocomplete_match' => 'contains',
    'size' => 60,
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'nid' => '',
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_primary_timeslot' => 
      array (
        0 => 
        array (
          'nid' => '',
        ),
        'nid' => 
        array (
          'nid' => '',
        ),
      ),
    ),
    'group' => 'group_scheduling',
    'required' => 0,
    'multiple' => '0',
    'referenceable_types' => 
    array (
      'om_timeslot_theme' => 'om_timeslot_theme',
    ),
    'advanced_view' => '--',
    'advanced_view_args' => '',
    'op' => 'Save field settings',
    'module' => 'nodereference',
    'widget_module' => 'nodereference',
    'columns' => 
    array (
      'nid' => 
      array (
        'type' => 'int',
        'unsigned' => true,
        'not null' => false,
        'index' => true,
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
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  13 => 
  array (
    'label' => 'Estimated Number of Episodes',
    'field_name' => 'field_om_project_episodes',
    'type' => 'number_integer',
    'widget_type' => 'number',
    'change' => 'Change basic information',
    'weight' => '3',
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'value' => '',
        '_error_element' => 'default_value_widget][field_om_project_episodes][0][value',
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_project_episodes' => 
      array (
        0 => 
        array (
          'value' => '',
          '_error_element' => 'default_value_widget][field_om_project_episodes][0][value',
        ),
      ),
    ),
    'group' => 'group_scheduling',
    'required' => 0,
    'multiple' => '0',
    'min' => '',
    'max' => '',
    'prefix' => '',
    'suffix' => '',
    'allowed_values' => '',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'number',
    'widget_module' => 'number',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'int',
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
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
  14 => 
  array (
    'label' => 'Estimate How Often New Episodes Will Be Added',
    'field_name' => 'field_om_episode_frequency',
    'type' => 'number_integer',
    'widget_type' => 'optionwidgets_select',
    'change' => 'Change basic information',
    'weight' => '4',
    'description' => '',
    'default_value' => 
    array (
      0 => 
      array (
        'value' => '',
      ),
    ),
    'default_value_php' => '',
    'default_value_widget' => 
    array (
      'field_om_episode_frequency' => 
      array (
        'value' => '',
      ),
    ),
    'group' => 'group_scheduling',
    'required' => 0,
    'multiple' => '0',
    'min' => '',
    'max' => '',
    'prefix' => '',
    'suffix' => '',
    'allowed_values' => '1|Weekly
2|Monthly',
    'allowed_values_php' => '',
    'op' => 'Save field settings',
    'module' => 'number',
    'widget_module' => 'optionwidgets',
    'columns' => 
    array (
      'value' => 
      array (
        'type' => 'int',
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
        'exclude' => 0,
      ),
      'full' => 
      array (
        'format' => 'hidden',
        'exclude' => 0,
      ),
      4 => 
      array (
        'format' => 'default',
        'exclude' => 0,
      ),
    ),
  ),
);
\$content['extra']  = array (
  'title' => '1',
  'body_field' => '4',
  'revision_information' => '16',
  'comment_settings' => '19',
  'menu' => '8',
  'taxonomy' => '7',
  'book' => '12',
  'path' => '18',
  'attachments' => '17',
  'og_description' => '2',
  'og_selective' => '10',
  'og_register' => '11',
  'og_directory' => '9',
  'og_private' => '0',
);"
);

  return;
} // function _om_project_install_create_om_project_content_type

