<?php
// $Id: views_handler_filter_date.inc,v 1.1.2.1.2.2 2010/05/31 23:16:20 darrick Exp $

/**
 * @file
 * merci views handlers 
 */

class views_handler_filter_datetime extends views_handler_filter_date {
  function op_simple($field) {
    $value = intval(strtotime($this->value['value'], 0));
    $value = date_convert($value, DATE_UNIX, DATE_DATETIME);
    if ($this->value['type'] == 'offset') {
      // keep sign
      $value = 'NOW()'. sprintf('%+d', $value);
      $this->query->add_where($this->options['group'], "$field $this->operator %s", $value);
    }
    else {
      $this->query->add_where($this->options['group'], "$field $this->operator '%s'", $value);
    }
  }
}

