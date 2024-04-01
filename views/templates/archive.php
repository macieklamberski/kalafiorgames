<?= Mikrob\load_view(
    'partials/header',
    [
        'menu' => $pages['/']->shared->menu,
        'page' => $page,
    ],
) ?>

<div class="spacing spacing--double">
    <div class="spacing">
        <h1 class="heading heading--primary"><?= $page->title ?></h1>

        <div class="copy">
            <p><?= $page->description ?></p>
        </div>

        <?php foreach ($page->games as $game) : ?>
            <?php if (!empty($pages[$game])) : ?>
                <?= Mikrob\load_view('partials/game', ['game' => $pages[$game]]) ?>
            <?php endif ?>
        <?php endforeach ?>
    </div>

    <nav>
        <a href="/">&larr; Return to Home page</a>
    </nav>
</div>

<?= Mikrob\load_view('partials/footer') ?>
