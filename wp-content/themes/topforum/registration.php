<?php
    /*
        Template Name: Registration
    */
    get_header();
?>
<main class="registration">
    <div class="container">
        <h1 class="registration__title title title_fz24 text_fw500 text_upp"><?php the_field('title'); ?></h1>
        <div class="registration__ways">
            <div class="registration__ways-item text text_fz14 text_fw500 text_upp text_orange">FILL IN THE FORM IN ENGLISH</div>
            <img src="<?php bloginfo('template_url') ?>/assets/images/down_arrow.png" alt="" class="registration__ways-arrow">
            <div class="registration__ways-item text text_fz14 text_fw500 text_upp text_orange">READ THOROUGHLY TERMS&CONDITIONS</div>
        </div>
        <form action="">
            <div class="registration__inputs">
                <div class="registration__inputs-row">
                    <label for="regconf" class="text text_fw500 text_fz14">Please, choose a conference:</label>
                    <div class="registration__tab" data-inp="regconf">
                        <span class="text text_fz14 text_fw300">Wealth TOP FORUM Israel 2016</span>
                        <img src="<?php bloginfo('template_url') ?>/assets/images/down_arrow.png" alt="" class="registration__tab-arrow">
                        <div class="registration__tab-list hide">
                            <div class="registration__tab-item text text_fz14 text_fw300">Wealth TOP FORUM Israel 2016</div>
                            <div class="registration__tab-item text text_fz14 text_fw300">Wealth TOP FORUM Israel 2017</div>
                            <div class="registration__tab-item text text_fz14 text_fw300">Wealth TOP FORUM Israel 2018</div>
                        </div>
                    </div>
                    <input type="text" id="regconf" value="" name="regconf" class="text text_fz14 text_fw300" hidden>
                </div>
                <div class="registration__inputs-row">
                    <label for="regpack" class="text text_fw500 text_fz14">Please choose delegate package:</label>
                    <div class="pack" data-inp="regpack">
                        <span data-val="Standard" class="text text_fz14 text_fw500 text_upp">Standard</span>
                        <span data-val="Premium" class="text text_fz14 text_fw500 text_upp">Premium</span>
                    </div>
                    <input type="text" id="regpack" value="" name="regpack" class="text text_fz14 text_fw300" hidden>
                </div>
                <div class="registration__inputs-row"><label for="regname" class="text text_fw500 text_fz14">Name:</label><input type="text" id="regname" name="regname" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row"><label for="regsurname" class="text text_fw500 text_fz14">Surname:</label><input type="text" id="regsurname" name="regsurname" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row"><label for="regcompname" class="text text_fw500 text_fz14">Company Name:</label><input type="text" id="regcompname" name="regcompname" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row">
                    <label for="regbusarea" class="text text_fw500 text_fz14">Business Area:</label>
                    <div class="registration__tab" data-inp="regbusarea">
                        <span class="text text_fz14 text_fw300">Forex companies</span>
                        <img src="<?php bloginfo('template_url') ?>/assets/images/down_arrow.png" alt="" class="registration__tab-arrow">
                        <div class="registration__tab-list hide">
                            <div class="registration__tab-item text text_fz14 text_fw300">Forex companies</div>
                            <div class="registration__tab-item text text_fz14 text_fw300">Forex companies1</div>
                            <div class="registration__tab-item text text_fz14 text_fw300">Forex companies2</div>
                        </div>
                    </div>
                    <input type="text" id="regbusarea" value="" name="regbusarea" class="text text_fz14 text_fw300" hidden>
                </div>
                <div class="registration__inputs-row"><label for="regposit" class="text text_fw500 text_fz14">Position:</label><input type="text" id="regposit" name="regposit" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row"><label for="regemailorg" class="text text_fw500 text_fz14">E-mail (for organizers):</label><input type="text" id="regemailorg" name="regemailorg" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row"><label for="regemailspons" class="text text_fw500 text_fz14">E-mail (for registration):</label><input type="text" id="regemailspons" name="regemailspons" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row"><label for="regphone" class="text text_fw500 text_fz14">Mobile Number (for organizers):</label><input type="text" id="regphone" name="regphone" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row"><label for="regcountry" class="text text_fw500 text_fz14">Country:</label><input type="text" id="regcountry" name="regcountry" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row"><label for="regwebsite" class="text text_fw500 text_fz14">Web-site:</label><input type="text" id="regwebsite" name="regwebsite" class="text text_fz14 text_fw300"></div>
                <div class="registration__inputs-row">
                    <label for="regpay" class="text text_fw500 text_fz14">Method of payment</label>
                    <div class="paym" data-inp="regpay">
                        <span data-val="Free"><img src="<?php bloginfo('template_url') ?>/assets/images/pay1.png" alt=""></span>
                        <span data-val="Visa"><img src="<?php bloginfo('template_url') ?>/assets/images/pay2.png" alt=""></span>
                        <span data-val="Invoice"><img src="<?php bloginfo('template_url') ?>/assets/images/pay3.png" alt=""></span>
                        <span data-val="PayPal"><img src="<?php bloginfo('template_url') ?>/assets/images/pay4.png" alt=""></span>
                    </div>
                    <input type="text" id="regpay" value="" name="regpay" class="text text_fz14 text_fw300" hidden>
                </div>
            </div>
            <div class="registration__accept">
                <div class="registration__accept-checkbox">
                    <input type="checkbox" name="regaccept" id="regaccept">
                    <label for="regaccept" class="text text_fz14 text_fw300">I accept Terms&Conditions</label>
                </div>
                <button class="button button_orange text text_fz13 text_white">Submit</button>
            </div>
        </form>
    </div>
</main>
<?php
    get_footer();
?>