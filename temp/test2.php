<?php 
function array_value_recursive($key, array $arr){
    $val = array();
    array_walk_recursive($arr, function($v, $k) use($key, &$val){
            if($k == $key) array_push($val, $v);
            });
    return count($val) > 1 ? $val : array_pop($val);
}

$arr = array(
        'foo' => 'foo',
        'bar' => array(
            'baz' => 'baz',
            'candy' => 'candy',
            'vegetable' => array(
                'carrot' => 'carrot',
                )
            ),
        'vegetable' => array(
            'carrot' => 'carrot2',
            ),
        'fruits' => 'fruits',
        );


print_r(array_value_recursive('carrot', $arr));
?>
