<?= Mikrob\load_view(
    'partials/header',
    [
        'menu' => $pages['/']->shared->menu,
        'page' => $page,
    ],
) ?>

<article class="spacing spacing--double">
    <div class="spacing">
        <h1 class="heading heading--primary">
            <?= $page->title ?>
        </h1>

        <div class="copy">
            <?= $page->body ?>
        </div>
    </div>

    <section id="downloads">
        <h2 class="outline">Downloads</h2>

        <ul class="downloads">
            <?php foreach ($page->downloads as $download) : ?>
                <li>
                    <a href="<?= $download->link ?>" download>
                        <?= Mikrob\load_view("vectors/icon-$download->icon") ?>
                        <span class="heading heading--secondary"><?= $download->title ?></span>
                        <small class="minor"><?= $download->description ?></small>
                    </a>
                </li>
            <?php endforeach ?>
        </ul>
    </section>

    <section id="media">
        <h2 class="outline">Media</h2>

        <ul class="media spacing">
            <?php foreach ($page->media as $media) : ?>
                <?php if ($media->type === 'image') : ?>
                    <li class="media__image">
                        <img src="<?= $media->link ?>" alt="<?= $media->alt ?>">
                    </li>
                <?php elseif ($media->type === 'video') : ?>
                    <li class="media__video">
                        <iframe src="<?= $media->link ?>" allowfullscreen></iframe>
                    </li>
                <?php endif ?>
            <?php endforeach ?>
        </ul>
    </section>
</article>

<?= Mikrob\load_view('partials/footer') ?>
