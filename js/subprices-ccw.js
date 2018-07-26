jQuery(document).ready(function($) {

    // CONFIGURE SPINNER ================================ 
    var options = {
        prices: [{
                name: 'Fruit <br>Punch',
                bg: '#df2626',
                slug: 'fruit_punch',
                url: '?page=fruity-match&play=fruit-punch'
            },
            {
                name: 'Strawberry <br>Watermelon',
                bg: '#f27e5a',
                slug: 'str_melon',
                url: '?page=pop-a-fruit&play=straw_watermelon'
            },
            {
                name: 'Kiwi <br>Strawberry',
                bg: '#f97799',
                slug: 'kiwi_str',
                url: '?page=lunchtime-flavorites&play=kiwi-strawberry'
            },
            {
                name: 'Apple <br>Raspberry',
                bg: '#d31a68',
                slug: 'apple_ras',
                url: '?page=pop-a-fruit&play=apple_raspberry'
            },
            {
                name: 'Cherry',
                bg: '#b92654',
                slug: 'cherry',
                url: 'cherry',
                url: '?page=memory-match&play=cherry'
            },
            {
                name: 'Cranberry <br>Apple',
                bg: '#892433',
                slug: 'cran_apple',
                url: '?page=juicy-jigsaw&play=cranberry'
            },
            {
                name: 'Passion <br>Dragonfruit',
                bg: '#9c2164',
                slug: 'pdrfr',
                url: '?page=juicy-jokes&play=dragonFruit'
            },
            {
                name: 'Grape',
                bg: '#94398b',
                slug: 'grape',
                url: '?page=pop-a-fruit&play=grape'
            },
            {
                name: 'Berry',
                bg: '#477bbd',
                slug: 'berry',
                url: '?page=hidden-pictures&play=berry'
            },
            {
                name: 'Grand Prize',
                bg: '#fff',
                slug: 'hurricane_white',
                url: ''
            },
            {
                name: 'Tropical',
                bg: '#138995',
                slug: 'tropical',
                url: '?page=juicy-jigsaw&play=tropical'
            },
            {
                name: 'Apple',
                bg: '#65a521',
                slug: 'apple',
                url: '?page=lunchtime-flavorites&play=apple'
            },
            {
                name: 'White <br>Grape',
                bg: '#9ca943',
                slug: 'w_grape',
                url: '?page=memory-match&play=grape'
            },
            {
                name: 'Strawberry <br>Banana',
                bg: '#fec53d',
                slug: 'str_ban',
                url: '?page=juicy-jokes&play=strawberryBanana'
            },
            {
                name: 'Orange <br>Tangerine',
                bg: '#f18a23',
                slug: 'or_tang',
                url: '?page=lunchtime-flavorites&play=orange'
            },
            {
                name: 'Peach <br>Apple',
                bg: '#f27e5a',
                slug: 'p_apple',
                url: '?page=juicy-jigsaw&play=peach'
            },
            {
                name: 'Mango',
                bg: '#e5541b',
                slug: 'mango',
                url: '?page=hidden-pictures&play=mango'
            }
        ],
        duration: 3500,
        clockWise: false,
        min_spins: 1, // The minimum number of spins 
        max_spins: 10, // The maximum number of spins
    };

    var $r = $('.roulette').fortune(options);


    if ($('body').hasClass('p0')){
        prizes = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 10, 11, 12, 13, 14, 15, 16];
        var land_on = prizes[Math.floor(Math.random() * prizes.length)];
        // var land_on = 13;
    }
    if ($('body').hasClass('p1')){
        var land_on = 9;
    }


    var clickHandler = function() {
        $('.spin').off('click');
        $('.spinner span').hide();           
        //var price = Math.floor((Math.random() * 8));
        $r.spin(land_on).done(function(price) {
            // Update number of plays
            $.ajax({
                type: 'POST',
                url: 'process_nop.php',
                data: {
                    session_id : $('#session_id_footer').val()
                },
                dataType: 'json',
                encode: true
            }).done(function(data) {
                // console.log(data);
            });
            if (price.name == "Grand Prize") {
                   window.location.href = '?page=spin&play=pcf';                             
            } else {
                $('.prize_info')
                    .html(function() {
                        setTimeout(function() {
                            
                            $('.wheel_logo').fadeOut(300); 
                        }, 0);
                        setTimeout(function() {
                            $('.prize_info span').html('<span>'+price.name+'</span>').fadeIn();
                        }, 700);
                        setTimeout(function() {
                            $('.prize_info span').fadeOut();
                        }, 2000);
                        setTimeout(function() {
                            $('.prize_info span').html('<img src="img/bottles/' + price.slug + '.png">').fadeIn();
                        }, 2500);
                        setTimeout(function() {
                            window.location.href = price.url; 
                        }, 3500);
                    });
                   
            }
            // console.log(price.name);
            // $('.spinner').css('background-color', price.bg);
            $('#prize_hurricane')
                .attr('src', 'img/' + price.slug + '.png')
                .css('opacity', 1);
            // $('.spin').on('click', clickHandler);
            $('.spinner span').show();
        });
    };
    

    $('.spin').on('click', clickHandler);


    // END OF SPINNER CONFIG ====================================


    /***************** REGISTRATION FORM ******************/

    $('#register').submit(function(event) {
        // Clear Form Errors
        $('.has-error').each(function() { $(this).removeClass('has-error'); });
        $('label[for="age"]').removeClass('red');
        // Get form data
        var formData = $(this).serialize();
        // Process the form
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            dataType: 'json',
            encode: true
        }).done(function(data) {
            // console.log(data);

            // if errors exist
            if (!data.success) {
                if (data.errors.email) {
                    $('#email-group').addClass('has-error');
                }
                if (data.errors.age) {
                    $('#age-group').addClass('has-error');
                }
                if (data.errors.recaptcha) {
                    $('#recaptcha').addClass('has-error');
                }
                if (data.errors.recaptcha) {
                    $('#recaptcha').addClass('has-error');
                }
            }
            // if no errors
            else {
                console.log(data.safety_string);
                // $('#register').append('<div class="alert alert-success">' + data.message + '</div>');
                var form = '<form id="safety" action="?page=spin" method="POST"><input type="hidden" name="dsid" id="dsid" value="' + data.email + '"></form>';
                $('body').append(form);
                $('#safety').submit();
            }
        });
        event.preventDefault();
    });

    /***************** PRIZE CLAIM FORM ******************/

    $('#prize_form').submit(function(event) {
        // Clear Form Errors
        $('.has-error').each(function() { $(this).removeClass('has-error'); });
        $('label[for="age"]').removeClass('red');
        $('.help-block').each(function(){
            $(this).remove();
        });
        // Get form data
        var formData = $(this).serialize();
        // Process the form
        $.ajax({
            type: 'POST',
            url: 'process_prize_claim.php',
            data: formData,
            dataType: 'json',
            encode: true
        }).done(function(data) {
            console.log(data);

            // if errors exist
            if (!data.success) {                  
                if (data.errors.first_name) {
                    $('#first-name-group').addClass('has-error');
                }  
                if (data.errors.last_name) {
                    $('#last-name-group').addClass('has-error');
                } 
                if (data.errors.email) {
                    $('#email-group').addClass('has-error');
                }               
                if (data.errors.email_conf) {
                    $('#email-conf-group').addClass('has-error');
                }
                if (data.errors.email_invalid) {
                    $('#email-group').addClass('has-error').append('<div class="help-block">' + data.errors.email_invalid + '</div>');
                }
                if (data.errors.email_conf_invalid) {
                    $('#email-conf-group').addClass('has-error').append('<div class="help-block">' + data.errors.email_conf_invalid + '</div>');
                }
                if (data.errors.email_mismatch) {
                    $('.email-group-holder').addClass('has-error').append('<div class="help-block">' + data.errors.email_mismatch + '</div>');
                }
                if (data.errors.address_1) {
                    $('#address-group').addClass('has-error');
                }
                if (data.errors.city) {
                    $('#city-group').addClass('has-error');
                }
                if (data.errors.state) {
                    $('#state-group').addClass('has-error');
                }  
                if (data.errors.zip) {
                    $('#zip-group').addClass('has-error');
                }  
                if (data.errors.phone) {
                    $('#phone-group').addClass('has-error');
                } 
                if (data.errors.legal) {
                    $('#legal-group').addClass('has-error');
                }       
                $('html, body').animate({
                    scrollTop: $(".has-error").offset().top
                }, 500);
            }
            // if no errors
            else {
                // console.log(data.safety_string);
                // // $('#register').append('<div class="alert alert-success">' + data.message + '</div>');
                // var form = '<form id="safety" action="?page=spin" method="POST"><input type="hidden" name="dsid" id="dsid" value="' + data.safety_string + '"></form>';
                // $('body').append(form);
                // $('#safety').submit();
                $('.thank_you_prize_claim').addClass('visible_on');
                $('.pcf_title, .pfi').addClass('visible_off');
                $('#prize_form').removeClass('visible_on');
                $('html, body').animate({
                    scrollTop: $(".logo-2").offset().top
                }, 500);

            }
        });
        event.preventDefault();
    });

    $('.rules_link').click(function(){
        window.location.href = '?page=official-rules';
    });

    /********************** MEMORY MATCH ********************/

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var play = getParameterByName('play');
    if (play == 'grape') {
        $('.game_holder').css('background', 'url(memory-images/grape_bg.png)');
        end_message = '“White” grapes are <br>actually green.';
        end_fruit = 'grape';
    }
    if (play == 'cherry') {
        $('.game_holder').css('background', 'url(memory-images/cherry_bg.png)');
        end_message = 'A cherry tree<br>can be harvested<br>in seven seconds.';
        end_fruit = 'cherry';
    }
    if (play == 'kiwi-strawberry') {
        $('.game_holder').css('background', 'url(memory-images/kiwi_strawberry_bg.png)');
        end_message = 'Kiwis and strawberries<br>both have more<br>Vitamin C than oranges.';
        end_fruit = 'kiwi_str';
    }
    if (play == 'pcf') {
        $('#roulette').prepend('<div style="z-index: 99999;" id="register"> <div class="clearfix prc_holder"> <h1 class="h1_title">Congratulations!</h1> <img class="prc_boy_big" src="img/boy_big.png"> <div class="prc_wheel_copy"> <div class="prc1">You are a potential prizewinner.</div><div class="prc2">As soon as we receive your prize claim form and verify your compliance with the Official Rules and game play validation, you will be named an OFFICIAL WINNER! <br><br>To get started, please complete: </div><a class="spin_btn prc_btn" href="?page=prize-claim-form">PRIZE CLAIM FORM</a> </div></div><div class="ghost"></div></div>');
        $('.spin_holder').after('<div  class="overlay"></div>');
        $('#roulette .spinner').hide();
    }

    function end_action(end_message_holder, end_fruit_holder) {
        $('.memory_game_board').append($('<div class="completed_holder"> <img class="you_did_it" src="img/you_did_it.png"> <div class="ctext">You’ve completed the Memory Match Game.</div><div class="message_board"> <div class="holder"> <img class="fruit_fact_head" src="img/fruit_fact_head_'+end_fruit_holder+'.png"> <div class="fruit_fact_info">'+end_message_holder+'</div></div><div class="ghost"></div><img class="girl" src="img/boy.png"> <img class="fruit_fact" src="img/fruit_fact_'+end_fruit_holder+'.png"> </div><div class="end_ctas"><a class="play_again" href="javascript:void(0);" onClick="window.location.reload()">PLAY AGAIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><a class="spin_again" href="?page=spin">SPIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><br><a class="get_coupon_btn" target="_blank" href="?page=coupon">GET COUPON</a></div></div>').hide().fadeIn(1000));
    }    

    $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function() {
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });
        this.each(function(i) {
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };

    $('.clickme').shuffle();

    $(".clickme").flip({
        axis: 'x',
        trigger: 'manual'
    });

    var selected_values = [];
    var i = 0;    
    $('.clickme').click(function() {

        // If not clicked on the same card
        if (!$(this).hasClass('selected')) {
            var numItems = $('.selected').length;            
            i++;
            if(i < 3) {
                $(this)
                    .stop()
                    .flip(true)
                    .addClass('selected');                 
                selected_values.push($(this).attr('data-value'));
                if(i == 2) {                    
                    setTimeout(function() {
                        if (selected_values[1] != selected_values[0]) {
                            $('.selected').each(function() {                        
                                $(this).removeClass('selected').stop().flip(false);
                                i = 0; 
                                selected_values = [];
                            });    
                        }
                        if (selected_values[1] == selected_values[0]) {
                            $('.selected').each(function() { 
                                $(this).removeClass('clickme').removeClass('selected').addClass('solved');
                                i = 0;
                                selected_values = [];
                            }); 
                            if($('.clickme').length === 2) {
                                setTimeout(function() {
                                    end_action(end_message, end_fruit);
                                }, 3000);                
                            }
                        }                        
                    }, 700); 

                }
            }                      
        } 
    });

    // UNCOMMENT THIS TO FORCE END STATE
    // end_action(end_message, end_fruit);

    $('.start-game-button').click(function(){
        $('.completed_holder').fadeOut(function(){
            setTimeout(function() {
                     $('.completed_holder').remove();
            }, 1000);
        });
    });

    // MASK INPUT
    $("#phone-group input").mask("(999) 999-9999");
    $("#zip-group input").mask("99999");

    //Stick footer to the bottom
    $(window).on('load resize', function () {
        var footer_height = $('footer').outerHeight();
        if($(window).width() > 767) {                    
            setTimeout(function() {
                     $('main').css('padding-bottom', 50 + footer_height +'px');
            }, 0);
        }
    });

    // Fade In MAIN div
    setTimeout(function() {         
        $('main').css('opacity',1);
    }, 100);


});