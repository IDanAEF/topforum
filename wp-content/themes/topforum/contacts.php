<?php
    /*
        Template Name: Contacts
    */
    get_header();
?>
<main class="contacts">
    <section class="contacts__departments">
        <div class="container">
            <div class="contacts__departments-map">
                <img src="<?php the_field('map') ?>" alt="">
            </div>
            <div class="contacts__departments-items">
                <?php
                    if (have_rows('sections')) {
                        while(have_rows('sections')) {
                            the_row();
                            ?>
                                <div class="contacts__departments-item">
                                    <div class="contacts__departments-item-title text text_fz15 text_fw500 text_upp"><?php the_sub_field('title') ?></div>
                                    <div class="contacts__departments-item-person text text_fz15"><?php the_sub_field('person') ?></div>
                                    <div class="contacts__departments-item-mail text text_fz15">
                                        E: <a href="mailto:<?php the_sub_field('email') ?>"><?php the_sub_field('email') ?></a>
                                    </div>
                                    <div class="contacts__departments-item-phone text text_fz15">
                                        P: <a href="tel:<?php echo preg_replace('/[^0-9]/', '', get_sub_field( 'phone' )); ?>"><?php the_sub_field( 'phone' ) ?></a>
                                    </div>
                                </div>
                            <?php
                        }
                    }
                ?>
            </div>
        </div>
    </section>
    <section class="contacts__feedback">
        <div class="container">
            <div class="contacts__feedback-title title title_fz24 text_fw500">
                <?php the_field('feedback_title') ?>
            </div>
            <div class="contacts__feedback-form">
                <div>
                    <?php echo do_shortcode('[contact-form-7 id="6" title="Contacts feedback"]') ?>
                </div>
                <div class="contacts__feedback-form-text">
                    <?php the_field('feedback_text') ?>
                </div>
            </div>
        </div>
    </section>
</main>
<?php
    get_footer();
?>