<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php the_title(); ?></title>
    <?php
        wp_head();
    ?>
</head>
<body>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <nav class="header__nav">
                    <?php 
                        wp_nav_menu( [
                            'menu'            => 'top_header',
                            'container'       => false,
                            'menu_class'      => 'header__nav-toplist',
                            'echo'            => true,
                            'fallback_cb'     => 'wp_page_menu',
                            'items_wrap'      => '<ul class="header__nav-toplist">%3$s</ul>',
                            'depth'           => 1
                        ] );
                    ?>
                </nav>
                <a href="#" class="header__top-button button button_lightorange text text_fz13">
                    Top Forum Club
                </a>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <div class="left_block">
                    <div class="header__logo">
                        <?php the_custom_logo(); ?>
                    </div>
                    <div class="header__bottom-menu">
                        <?php 
                            wp_nav_menu( [
                                'menu'            => 'bott_header',
                                'container'       => false,
                                'menu_class'      => 'header__nav-bottlist',
                                'echo'            => true,
                                'fallback_cb'     => 'wp_page_menu',
                                'items_wrap'      => '<ul class="header__nav-bottlist">%3$s</ul>',
                                'depth'           => 1
                            ] );
                        ?>
                    </div>
                </div>
                <a href="/registration/" class="header__bottom-button button button_orange text_white text_fz13">
                    Register Now
                </a>
            </div>
        </div>
    </header>