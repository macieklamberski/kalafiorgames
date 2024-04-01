<?= Mikrob\load_view(
    'partials/header',
    [
        'menu' => $pages['/']->shared->menu,
        'page' => $page,
    ],
) ?>

<div class="spacing spacing--double">
    <div class="spacing">
        <?php foreach ($page->games as $game) : ?>
            <?php if (!empty($pages[$game])) : ?>
                <?= Mikrob\load_view('partials/game', ['game' => $pages[$game]]) ?>
            <?php endif ?>
        <?php endforeach ?>
    </div>

    <nav>
        <a href="/archive">Check out archive for older games &rarr;</a>
    </nav>
</div>

<?= Mikrob\load_view('partials/footer') ?>
