<?= Mikrob\load_view(
    'partials/header',
    [
        'menu' => $pages['/']->shared->menu,
        'page' => $page,
    ],
) ?>

<?= Mikrob\load_view('partials/post', ['post' => $page]) ?>

<?= Mikrob\load_view('partials/footer') ?>
