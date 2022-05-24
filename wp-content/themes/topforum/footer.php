<footer class="footer">
    <div class="container">
        <div class="footer__top">
            <div class="footer__top-left text_fw300 text_white text_fz14">
                <?php 
                    wp_nav_menu( [
                        'menu'            => 'footer',
                        'container'       => false,
                        'menu_class'      => 'footer__top-list',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="footer__top-list">%3$s</ul>',
                        'depth'           => 1
                    ] );
                ?>
            </div>
            <div class="footer__top-right text_fw300 text_white text_fz14">
                <?php
                    $contItem = wp_get_nav_menu_items( 'bott_header' );
                ?>
                <div>
                    <a href="<?php echo $contItem[1]->url; ?>" class="footer__top-right-title text_orange text_upp">
                        Contacts
                    </a>
                </div>
                <div>
                    Top Forum Group
                </div>
                <div class="address">
                    <?php echo get_option( 'site_address' ); ?>
                </div>
                <div>
                    <a href="tel:<?php echo preg_replace('/[^0-9]/', '', get_option( 'site_phone' )); ?>"><?php echo get_option( 'site_phone' ); ?></a>
                </div>
                <div>
                    <a href="mailto:<?php echo get_option( 'site_email' ); ?>"><?php echo get_option( 'site_email' ); ?></a>
                </div>
            </div>
        </div>
        <div class="footer__bott">
            <div class="footer__bott-copy text_white text_fz14 text_fw300">
                © 2014 Top Forum Group. All rights reserved.
            </div>
        </div>
    </div>
</footer>
<?php
    wp_footer();
?>
</body>
</html>