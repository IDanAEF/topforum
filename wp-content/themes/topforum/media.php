<?php
    /*
        Template Name: Media
    */
    get_header();
?>
<main class="media">
    <section class="media__descr">
        <div class="container">
            <div class="media__descr-title title title_fz24 text_fw500 text_upp"><?php the_field('title') ?></div>
            <div class="media__descr-text text text_fz17 text_fw300"><?php the_field('descr') ?></div>
        </div>
    </section>
    <section class="media__articles" data-count="<?php the_field('art_count') ?>">
        <div class="container">
            <?php
                $my_posts = get_posts(array(
                    'numberposts' => -1,
                    'category_name'    => 'media',
                    'orderby'     => 'date',
                    'order'       => 'ASC',
                    'post_type'   => 'post',
                    'suppress_filters' => true
                ));

                foreach ($my_posts as $post) {
                    setup_postdata($post);
                    ?>
                        <article class="media__articles-item hide">
                            <a href="<?php echo get_permalink(); ?>">
                                <div class="media__articles-item-image">
                                    <?php the_post_thumbnail(); ?>
                                </div>
                                <div class="media__articles-item-title title title_fz17 text_fw500 text_upp"><?php the_title(); ?></div>
                                <div class="media__articles-item-descr text text_fz15 text_fw300"><?php the_field('anonce_descr') ?></div>
                            </a>
                        </article>
                    <?php
			    }

			    wp_reset_postdata();
			?>
        </div>
    </section>
    <button class="media__button button button_small text_white text_fz13">
        More article
    </button>
</main>
<?php
    get_footer();
?>