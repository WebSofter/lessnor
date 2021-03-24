<?php

namespace application\core;

class Router{
    protected $routes = [];
    protected $params = [];
    function __construct($argument=null){
        $arr = require 'application/config/routes.php';
        foreach($arr as $key => $val){
            $this->add($key, $val);
        }

        //debug($this->routes);
    }
    public function add($route, $params){
        $route = '#^'.$route.'#';
        $this->routes[$route] = $params;
    }
    public function match(){
        $url = trim($_SERVER['REQUEST_URI'], '/');
        foreach ($this->routes as $route => $params) {
            if(preg_match($route, $url, $matches)){
               $this->params = $params;
               return true;
            }
        }
    }
    public function run(){
        if($this->match()){
            //echo '<p><b>controler: </b>'.$this->params['controller'].'</p>';
            //echo '<p><b>action: </b>'.$this->params['action'].'</p>';
            $controller = 'application\\controllers\\'.ucfirst($this->params['controller']).'Controller';
            if(class_exists($controller)){
                $action = $this->params['action'].'Action';
                if(method_exists($controller, $action)){
                    $controller = new $controller;
                    $controller->$action();
                }else{
                    echo "Не найден экшн".$action;
                }
            } else {
                echo "Не найден контроллер ".$controller;
            }
        } else {
            echo "Маршрут не найден";
        }
    }
}