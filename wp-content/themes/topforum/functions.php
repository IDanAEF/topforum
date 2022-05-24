<?php
    function topforum_customize_register( $wp_customize ) {
        $wp_customize->add_section(
            'data_site_section',
            array(
                'title' => 'Данные сайта',
                'capability' => 'edit_theme_options',
                'description' => "Указать данные сайта"
            )
        );
    
        //Номер телефона
        $wp_customize->add_setting(
            'site_phone',
            array(
                'default' => '',
                'type' => 'option'
            )
        );
        $wp_customize->add_control(
            'site_phone_control',
            array(
                'type' => 'text',
                'label' => "Номер телефона",
                'section' => 'data_site_section',
                'settings' => 'site_phone'
            )
        );
    
        //Адрес
        $wp_customize->add_setting(
            'site_address',
            array(
                'default' => '',
                'type' => 'option'
            )
        );
        $wp_customize->add_control(
            'site_address_control',
            array(
                'type' => 'text',
                'label' => "Адрес",
                'section' => 'data_site_section',
                'settings' => 'site_address'
            )
        );

        //E-mail
        $wp_customize->add_setting(
            'site_email',
            array(
                'default' => '',
                'type' => 'option'
            )
        );
        $wp_customize->add_control(
            'site_email_control',
            array(
                'type' => 'text',
                'label' => "E-mail",
                'section' => 'data_site_section',
                'settings' => 'site_email'
            )
        );
    }
    add_action( 'customize_register', 'topforum_customize_register' );

    add_theme_support( 'custom-logo' );

    add_theme_support( 'menus' );

    add_theme_support( 'post-thumbnails' );

    function topforumAddScripts() {
        wp_enqueue_style( 'topforum_main_style', get_template_directory_uri() . '/assets/css/style.min.css' );
    
        wp_enqueue_script( 'topforum_main_scrit', get_template_directory_uri() . '/assets/prodJs/script.js', array(), null, true );
    }
    
    add_action( 'wp_enqueue_scripts', 'topforumAddScripts' );