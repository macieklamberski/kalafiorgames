<?php

require __DIR__.'/vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(__DIR__.'/templates');
$twig = new \Twig\Environment($loader);


$args = getopt("", ["request-uri:"]);

$uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : $args['request-uri'];
$path = ltrim(explode('?', $uri)[0], '/') ?: 'index';
$page = 'pages/'.$path.'.twig';

echo $twig->render($loader->exists($page) ? $page : 'pages/404.twig');
