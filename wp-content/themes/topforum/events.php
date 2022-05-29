<?php
    /*
        Template Name: Events
    */
    get_header();
?>
<main class="events">
    <div class="container">
        <h1 class="events__title title title_fz24 text_fw500 text_upp">
            <?php the_field('title'); ?>
        </h1>
        <div class="events__descr text text_fz17 text_fw300">
            <?php the_field('descr'); ?>
        </div>
        <div class="events__items">
            <?php
                $my_posts = get_posts(array(
                    'numberposts' => -1,
                    'category_name'    => 'events',
                    'orderby'     => 'date',
                    'order'       => 'ASC',
                    'post_type'   => 'post',
                    'suppress_filters' => true
                ));

                foreach ($my_posts as $post) {
                    setup_postdata($post);
                    ?>
                        <article class="events__item">
                            <a href="<?php echo get_permalink(); ?>" class="events__item-image">
                                <?php if (get_field('isend')) : ?>
                                <span>SOLD OUT</span>
                                <?php endif; ?>
                                <?php the_post_thumbnail(); ?>
                            </a>
                            <div class="events__item-descr">
                                <div class="events__item-descr-title title title_fz17 text_fw500 text_upp"><?php the_title(); ?></div>
                                <div class="events__item-descr-date text_fz15 text_orange"><?php the_field('datatype'); ?></div>
                                <div class="events__item-descr-text text text_fz15 text_fw300"><?php the_field('anonce_descr') ?></div>
                                <a href="<?php echo get_permalink(); ?>" class="events__item-descr-btn button button_small text text_fz13 text_white">Learn More</a>
                            </div>
                        </article>
                    <?php
                }

                wp_reset_postdata();
            ?>
        </div>
    </div>
</main>
<?php
    get_footer();
?>