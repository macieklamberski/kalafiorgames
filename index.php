<?php

require __DIR__.'/vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(__DIR__.'/templates');
$twig = new \Twig\Environment($loader);

$path = ltrim(explode('?', $_SERVER['REQUEST_URI'])[0], '/') ?: 'index';
$page = 'pages/'.$path.'.twig';

echo $twig->render($loader->exists($page) ? $page : 'pages/404.twig');
