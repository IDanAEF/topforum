<?php
    get_header();
    global $post;
    $isSpeak = '';
    $i = 0;
    while (get_post_meta(62, 'conferences_' . $i . '_name', true)) {
        $j = 0;
        while (get_post_meta(62, 'conferences_' . $i . '_sponsors_' . $j . '_link', true)) {
            if (get_post_meta(62, 'conferences_' . $i . '_sponsors_' . $j . '_link', true) == $post->ID) {
                $isSpeak = 'speak';
            }
            $j++;
        }
        $i++;
    }
?>
<main class="single single__company">
    <div class="container">
        <h1 class="single__company-title title title_fz24 text_fw500 text_upp"><?php the_title(); ?></h1>
        <div class="single__company-descr text text_fz17 text_fw300">
            <?php the_field('anonce_descr'); ?>
        </div>
        <div class="single__company-logo <?php echo $isSpeak; ?>">
            <?php the_post_thumbnail(); ?>
        </div>
        <div class="single__company-main text text_fz17 text_fw300">
            <?php the_field('descr'); ?>
        </div>
    </div>
</main>
<?php
    get_footer();
?>