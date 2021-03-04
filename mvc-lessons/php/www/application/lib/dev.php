<?php
ini_set('display_erors', 1);
error_reporting(E_ALL);

function debug($val){
    echo '<pre>';
    var_dump($val);
    echo '</pre>';
}