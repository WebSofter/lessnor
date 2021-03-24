<?php
require './application/lib/dev.php';

use application\core\Router;

spl_autoload_register(function($class) {
    $path = str_replace('\\', '/', $class.'.php');
    if(file_exists($path)){
        require $path;
    }
});
session_start();

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
debug($path);

$router = new Router();
$router->run();
