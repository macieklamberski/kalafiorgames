<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="shortcut icon" href="/favicon.ico">
    <title><?= $page->title ?></title>
    <?php if (!empty($page->description)) : ?>
        <meta name="description" content="<?= $page->description ?>" />
    <?php endif ?>
</head>
<body class="container">
    <header class="header spacing">
        <a href="/" class="header__logo">
            <?= Mikrob\load_view('vectors/logo-kalafiorgames') ?>
        </a>

        <nav class="header__menu">
            <?php foreach ($menu as $path => $label) : ?>
                <a href="<?= $path ?>">
                    <?= $label ?>
                </a>
            <?php endforeach ?>
        </nav>
    </header>

    <main class="content">
