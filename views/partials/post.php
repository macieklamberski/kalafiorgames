<article class="spacing">
    <?php if (isset($is_list)) : ?>
        <h2 class="heading heading--primary">
            <a href="<?= $post->path ?>">
                <?= $post->title ?>
            </a>
        </h2>
    <?php else : ?>
        <h1 class="heading heading--primary">
            <?= $post->title ?>
        </h1>
    <?php endif ?>

    <div class="copy">
        <?= $post->body ?>
    </div>

    <footer class="minor">
        <a href="<?= $post->path ?>">
            <?php $time = strtotime($post->published) ?>

            <time datetime="<?= date('Y-m-d', $time) ?>" pubdate>
                <?= date('F j, Y', $time) ?>
            </time>
        </a>
    </footer>
</article>
