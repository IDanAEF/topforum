<?php
    get_header();
?>
<main class="main">
    <section class="main__promo slider-place">
        <div class="main__promo-slider slider-row">
            <?php
                if (have_rows('promo_slider')) {
                    while (have_rows('promo_slider')) {
                        the_row();
                        ?>
                            <div class="main__promo-slide slider-item">
                                <img src="<?php the_sub_field('image') ?>" alt="" class="img_bg img_sh">
                                <div class="container">
                                    <div class="main__promo-infoblock">
                                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/left_arrow_white.png" alt="" class="arrow arrow_left slider-left">
                                        <div class="main__promo-infoblock-date">
                                            <?php the_sub_field('date') ?>
                                        </div>
                                        <div class="main__promo-infoblock-text">
                                            <?php the_sub_field('descr') ?>
                                        </div>
                                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/right_arrow_white.png" alt="" class="arrow arrow_right slider-right">
                                    </div>
                                </div>
                            </div>
                        <?php
                    }
                }
            ?>
        </div>
    </section>
    <section class="main__about">
        <div class="container">
            <div class="main__about-descr text text_fz17 text_fw300">
                <?php the_field('about_descr'); ?>
            </div>
            <div class="main__about-addvantages">
                <?php
                    if (have_rows('about_addvantages')) {
                        while(have_rows('about_addvantages')) {
                            the_row();
                            ?>
                                <div class="main__about-addvantages-item">
                                    <div class="main__about-addvantages-item-img">
                                        <img src="<?php the_sub_field('icon'); ?>" alt="">
                                    </div>
                                    <h3 class="main__about-addvantages-item-title title title_fz17 text_fw500 text_upp">
                                        <?php the_sub_field('name'); ?>
                                    </h3>
                                    <div class="main__about-addvantages-item-descr text text_fw300 text_fz15">
                                        <?php the_sub_field('text'); ?>
                                    </div>
                                    <a href="<?php the_sub_field('link'); ?>" class="main__about-addvantages-item-link text_white text_fz13 text_fw400 button button_small">
                                        Learn more
                                    </a>
                                    <div class="main__about-addvantages-item-undertext">
                                        <?php the_sub_field('undertext'); ?>
                                    </div>
                                </div>
                            <?php
                        }
                    }
                ?>
            </div>
            <div class="main__about-buttons">
                <a href="#" class="button button_orange text_white">Register now</a>
                <a href="#" class="button button_black text_white">Subscribe</a>
            </div>
        </div>
    </section>
    <section class="main__reviews slider-place">
        <div class="container">
            <img src="<?php echo bloginfo('template_url') ?>/assets/images/left_arrow.png" alt="" class="arrow arrow_left slider-left">
            <h2 class="main__reviews-title title title_fz24 text_fw500">
                <?php the_field('reviews_title') ?>
            </h2>
            <div class="main__reviews-items">
                <div class="main__reviews-slider slider-row">
                    <?php
                        if (have_rows('reviews_review')) {
                            while(have_rows('reviews_review')) {
                                the_row();
                                ?>
                                    <div class="main__reviews-slider-item slider-item">
                                        <div class="main__reviews-slider-item-img <?php echo get_sub_field('photo') ? '' : 'no-picture'; ?>">
                                            <img src="<?php echo get_sub_field('photo') ? get_sub_field('photo') : bloginfo('template_url') . '/assets/images/no_picture.png' ?>" alt="">
                                        </div>
                                        <div class="main__reviews-slider-item-info">
                                            <div class="main__reviews-slider-item-name title title_fz17 text_fw500"><?php the_sub_field('name') ?></div>
                                            <div class="main__reviews-slider-item-date text_white text_fw300"><?php the_sub_field('date') ?></div>
                                            <div class="main__reviews-slider-item-text text text_fz14 text_fw300"><?php the_sub_field('text') ?></div>
                                        </div>
                                    </div>
                                <?php
                            }
                        }
                    ?>
                </div>
            </div>
            <img src="<?php echo bloginfo('template_url') ?>/assets/images/right_arrow.png" alt="" class="arrow arrow_right slider-right">
        </div>
    </section>
    <?php
        if (have_rows('video_materials')) {
            ?>
                <section class="main__video">
                    <div class="container">
                        <div class="main__video-title">
                            <?php the_field('video_title') ?>
                        </div>
                        <div class="main__video-items">
                            
                        </div>
                    </div>
                </section>
            <?php
        }
    ?>
    <section class="main__clients slider-place">
        <div class="container">
            <img src="<?php echo bloginfo('template_url') ?>/assets/images/left_arrow.png" alt="" class="arrow arrow_left slider-left">
            <h2 class="main__clients-title title title_fz24 text_fw500">
                <?php the_field('clients_title') ?>
            </h2>
            <div class="main__clients-items">
                <div class="main__clients-slider slider-row">
                    <?php
                        if (have_rows('clients_slider')) {
                            while (have_rows('clients_slider')) {
                                the_row();
                                ?>
                                    <div class="main__clients-slider-item slider-item">
                                        <img src="<?php the_sub_field('logo') ?>" alt="">
                                    </div>
                                <?php
                            }
                        }
                    ?>
                </div>
            </div>
            <img src="<?php echo bloginfo('template_url') ?>/assets/images/right_arrow.png" alt="" class="arrow arrow_right slider-right">
        </div>
    </section>
</main>
<?php
    get_footer();
?>