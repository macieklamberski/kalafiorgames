<a href="<?= $game->path ?>" class="game">
    <img class="game__poster" src="<?= $game->thumb ?>" alt="" />

    <h2 class="game__title heading heading--secondary">
        <?= $game->title ?>
    </h2>

    <dl class="game__meta minor">
        <?php foreach ($game->meta as $meta) : ?>
            <dt class="outline"><?= $meta->label ?></dt>

            <?php if (is_array($meta->value)) : ?>
                <?php foreach ($meta->value as $value) : ?>
                    <dd><?= $value ?></dd>
                <?php endforeach ?>
            <?php else : ?>
                <dd><?= $meta->value ?></dd>
            <?php endif ?>
        <?php endforeach ?>
    </dl>
</a>
