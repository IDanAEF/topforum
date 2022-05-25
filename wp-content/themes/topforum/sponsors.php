<?php
    /*
        Template Name: Sponsors+Exhibitors+Speakers
    */
    get_header();
?>
<main class="sponsors">
    <section class="sponsors__descr">
        <div class="container">
            <h1 class="sponsors__descr-title title title_fz24 text_fw500">
                <?php the_field('title') ?>
            </h1>
            <div class="sponsors__descr-text text text_fz17 text_fw300">
                <?php the_field('descr') ?>
            </div>
        </div>
    </section>
    <section class="sponsors__clients">
        <div class="container">
            <div class="sponsors__clients-subtext title title_fz17 text_upp text_fw500">
                please select a conference
            </div>
            <div class="sponsors__clients-tab">
                <span class="text text_fz14 text_fw300"><?php the_field('conferences_0_name'); ?></span>
                <img src="<?php bloginfo('template_url') ?>/assets/images/down_arrow.png" alt="" class="sponsors__clients-tab-arrow">
                <div class="sponsors__clients-tab-list hide">
                    <?php
                        $i = 0;
                        while(get_field('conferences_' . $i . '_name')) {
                            ?>
                                <div class="sponsors__clients-tab-item text text_fz14 text_fw300">
                                    <?php the_field('conferences_' . $i++ . '_name'); ?>
                                </div>
                            <?php
                        }
                    ?>
                </div>
            </div>
            <div class="sponsors__clients-pages">
                <?php
                    $i = 0;
                    while(get_field('conferences_' . $i . '_name')) {
                        ?>
                            <div class="sponsors__clients-page <?php echo mb_strtolower(get_the_title()); echo "_page"; ?>">
                                <?php
                                    $j = 0;
                                    while(get_field('conferences_' . $i . '_sponsors_' . $j . '_name')) {
                                        ?>
                                            <div class="sponsors__clients-page-item <?php echo mb_strtolower(get_the_title()); echo "_page"; ?>">
                                                <div class="sponsors__clients-page-item-type text text_fw500 text_orange text_upp"><?php the_field('conferences_' . $i . '_sponsors_' . $j . '_type'); ?></div>
                                                <div class="sponsors__clients-page-item-logo <?php echo mb_strtolower(get_the_title()); echo "_page"; ?>">
                                                    <img src="<?php the_field('conferences_' . $i . '_sponsors_' . $j . '_logo'); ?>" alt="">
                                                </div>
                                                <div class="sponsors__clients-page-item-name title title_fz17 text_fw500 text_upp"><?php the_field('conferences_' . $i . '_sponsors_' . $j . '_name'); ?></div>
                                                <div class="sponsors__clients-page-item-descr text text_fz15 text_fw300"><?php the_field('conferences_' . $i . '_sponsors_' . $j . '_descr'); ?></div>
                                                <a href="<?php the_field('conferences_' . $i . '_sponsors_' . $j . '_link'); ?>" class="sponsors__clients-page-item-link text_white text_fz13 button button_small">
                                                    Learn more
                                                </a>
                                            </div>
                                        <?php
                                        $j++;
                                    }
                                    $i++;
                                ?>
                            </div>
                        <?php
                    }
                ?>
            </div>
        </div>
    </section>
</main>
<?php
    get_footer();
?>