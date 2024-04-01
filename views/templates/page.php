<?= Mikrob\load_view(
    'partials/header',
    [
        'menu' => $pages['/']->shared->menu,
        'page' => $page,
    ],
) ?>

<article class="spacing">
    <h1 class="heading heading--primary">
        <?= $page->title ?>
    </h1>

    <div class="copy">
        <?= $page->body ?>
    </div>
</article>

<?= Mikrob\load_view('partials/footer') ?>
