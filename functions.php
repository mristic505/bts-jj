<?php

include 'db.php';

$base_url_slug = '/';
$body_class = 'p0 wheel_gray';
date_default_timezone_set('America/New_York');
$current_date = date("m-d-Y");
$current_time = time();

function decrypt_email($email_to_decrypt)
{
    $key       = 'hzrd7vhs9o';
    $data      = base64_decode(strtr($email_to_decrypt, '._-', '+/='));
    $iv        = substr($data, 0, mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC));
    $decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, hash('sha256', $key, true), substr($data, mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC)), MCRYPT_MODE_CBC, $iv), "\0");
    return $decrypted;
}

function encrypt_email($email_to_encrypt)
{
    $key    = 'hzrd7vhs9o';
    $string = $email_to_encrypt;
    
    $iv = mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC), MCRYPT_DEV_URANDOM);
    
    $encrypted = base64_encode($iv . mcrypt_encrypt(MCRYPT_RIJNDAEL_128, hash('sha256', $key, true), $string, MCRYPT_MODE_CBC, $iv));
    return strtr($encrypted, '+/=', '._-');
}

function return_to_hp()
{
    header('location: ' . $GLOBALS['base_url_slug']);
    die();
}

$url_string = $_SERVER['QUERY_STRING'];

// Routing 
if (strpos($url_string, 'page') !== false) {
    
    $page = $_GET['page'];
    
    if ($page == 'spin') {
        $page_title = 'Spin the Wheel';
        $inlcude    = 'spin.php';
    }
    if ($page == 'hidden-pictures') {
        $page_title = 'Hidden Pictures';
        $inlcude    = 'hidden_pictures.php';
    }
    if ($page == 'memory-match') {
        $page_title = 'Memory Match';
        $inlcude    = 'memory-match.php';
    }
    if ($page == 'pop-a-fruit') {
        $page_title = 'Pop a Fruit';
        $inlcude    = 'pop_a_fruit.php';
    }
    if ($page == 'fruity-match') {
        $page_title = 'Fruity Match';
        $inlcude    = 'matching_numbers.php';
    }
    if ($page == 'juicy-jokes') {
        $page_title = 'Juicy Jokes';
        $inlcude    = 'laugh-factory.php';
    }
    if ($page == 'prize-claim-form') {
        $page_title = 'Prize Claim Form';
        $inlcude    = 'prize_claim_form.php';
    }
    if ($page == 'official-rules') {
        $page_title = 'Official Rules';
        $inlcude    = 'official_rules.php';
    }
    if ($page == 'lunchtime-flavorites') {
        $page_title = 'Lunchtime Flavorites';
        $inlcude    = 'lunchtime_flavorites.php';
    }
    if ($page == 'faq') {
        $page_title = 'FAQ';
        $inlcude    = 'faq.php';
    }
    // if ($page == 'coupon') {
    //     $page_title = 'Offer';
    //     $inlcude    = 'coupon.php';
    // } 
    if ($page == 'coupon') {
        $page_title = 'Offer';
        $inlcude    = 'coupon_redirect.php';
    }  
    // if ($page == 'coupon-test') {
    //     $page_title = 'Offer';
    //     $inlcude    = 'coupon.php';
    // }  
    if ($page == 'prizes') {
        $page_title = 'Prizes';
        $inlcude    = 'prizes.php';
    }
    if ($page == 'juicy-jigsaw') {
        $page_title = 'Juicy Jigsaw';
        $inlcude    = 'jigsaw_puzzle.php';
    }
    if ($page == 'register') {
        $page_title = 'Register';
        $inlcude    = 'register.php';
    }
    
} else {
    $page_title = 'Register';
    $page       = 'register';
    $inlcude    = 'register.php';
    
}

/********************************************/
/***************** SESSIONS *****************/
/********************************************/

// Terminate session after 60 minutes ===========================
if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 3600)) {
    // last request was more than 60 minutes ago
    session_unset(); // unset $_SESSION variable for the run-time 
    session_destroy(); // destroy session data in storage
    header("Location: ?page=register");
    exit;
}
$_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp    

// Start Session
session_start();


if (strpos($url_string, 'page') !== false) {
    // If on register page unset seesion and start a new one ===========================
    if ($page == 'register') {
        session_unset();
        session_regenerate_id(true);
    }
    $restricted_pages = array(
        'spin',
        'hidden-pictures',
        'juicy-jigsaw',
        'pop-a-fruit',
        'laugh-factory',
        'memory-match',
        'matching-numbers',
        'prize-claim-form',
        'coupon',
        'fruity-match',
        'juicy-jokes'
    );
    // If on one of restricted pages ======================================
    // foreach ($restricted_pages as $restricted_page) {
    //     if ($page == $restricted_page) {  
    //         // Look for session ID in the DB ==============================         
    //         $result = DB::query("SELECT * FROM flavors_games_registered_users WHERE session_id=%s", session_id());
    //         if (empty($result)) { 
    //             header("Location: ?page=register"); // If session ID not found redirect to registration page ==============
    //         } else { 
    //             $times_played = $result[0]['times_played'];
    //             if($restricted_page == 'spin') { 
    //                 // if on spin page and already played 10 times redirect to registration page ===============
    //                 if ($times_played > 9) header("Location: ?page=register");
    //             } else {                    
    //                 if ($times_played < 11) {

    //                 } else {
    //                     // if on any other restricted page and already played 10 times redirect to registration page ===============
    //                     header("Location: ?page=register");
    //                 }
    //             }                    
    //         }
    //     }
    // }
}

// IF no query strings in the URL ===========================
if (empty($_GET)) {
    header("Location: ?page=register");
    exit;
}

/********************************************/
/*************** PRIZE HANDLING *************/
/********************************************/
if (strpos($url_string, 'page') !== false) {

    $page = $_GET['page'];
    
    if ($page == 'spin' OR $page == 'prize-claim-form') {        
        $prize_availability = true;
        $show_prize_message = true;
        $result_2 = DB::query("SELECT * FROM flavors_games_awards WHERE prize_date=%s", $current_date);
        $already_won = $result_2[0]['already_won'];
        $prize_time = strtotime($result_2[0]['prize_time']);
        $prize_id = $result_2[0]['id'];
        $uemail = $result[0]['email'];
    }
    // PRIZE HANDLING on the Spin page
    if ($page == 'spin') {

        // Check if the same person won in the past ======
        $result_3 = DB::query("SELECT email FROM flavors_games_winners WHERE email=%s", $uemail);

        /**************************************************/
        /**** DETERMINE IF PRIZE AVAILABLE FOR THE DAY ****/
        /**************************************************/
        // If no prize exists in DB or prize already won
        if(empty($result_2) || $already_won > 0) {
            $prize_availability = false;  
            if($already_won > 0) {
                if (empty($result_3)) {
                    $show_prize_message = false; 
                } else {
                    $show_prize_message = true;
                }                              
            }
        }
        // if prize exists in DB and not previously won today
        else {
            /*******************************************/
            /**** DETERMINE IF IT IS TIME FOR PRIZE ****/
            /*******************************************/
            // If current time is after the prize time =========
            if ($current_time > $prize_time) {                
                // If person has never won, make the prize available =======
                if (empty($result_3)) {
                    $prize_availability = true;   
                    $body_class = "p1 wheel_color";              
                } 
                // If person already won in the past, make prize not available =======
                else {
                    $prize_availability = false; 
                    $body_class = "p0 wheel_gray";   
                    $show_prize_message = true;                     
                }                   
            // If current time is before the prize time ========
            } else {                
                $prize_availability = false;
                $body_class = "p0";
                // If person has never won, show the wheel in color =======
                if (empty($result_3)) {
                    $body_class .= " wheel_color";
                } 
                // If person already won in the past, gray out the wheel =======  
                else {
                    $body_class .= " wheel_gray";
                    $show_prize_message = true;                      
                }                                           
            }            
        }

        if (!$prize_availability) {
            // $body_class = "p0";
        }
        if ($prize_availability) {
            // mark prize as won in DB ===========
            DB::update('flavors_games_awards', array('already_won' => 1, 'won_by' => $uemail), "prize_date=%s", $current_date);
        } 
    }
    // PRIZE HANDLING on the Prize Claim page
    if ($page == 'prize-claim-form') {
        // if prize won today by the current user
        if($uemail == $result_2[0]['won_by'] && !empty($result_2)) {
            // check if user already filled out prize claim form
            $result_4 = DB::query("SELECT email FROM flavors_games_winners WHERE email=%s", $uemail);
            // If user is already filled out prize claim form redirect to spin page
            if (!empty($result_4)) {
                header("Location: ?page=spin");
            }            
        }
        else {
            header("Location: ?page=spin");
        }
    }    
}