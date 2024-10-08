<?= Mikrob\load_view(
    'partials/header',
    [
        'menu' => $pages['/']->shared->menu,
        'page' => $page,
    ],
) ?>

<?php $posts = array_reverse(array_filter($pages, fn ($page) => strpos($page->path, '/blog/') === 0)) ?>

<section class="spacing spacing--double">
    <?php foreach ($posts as $path => $post) : ?>
        <?= Mikrob\load_view('partials/post', ['post' => $post, 'is_list' => true]) ?>
    <?php endforeach ?>
</section>

<?= Mikrob\load_view('partials/footer') ?>
