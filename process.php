<?php
require_once 'db.php';

$erros = array();
$data = array();

$email = $_POST['email'];
$recaptcha = $_POST['g-recaptcha-response'];
$session_id = $_POST['sid'];

// $age = $_POST['age'];

// Random string generator
function generateRandomString($length = 15) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
$safety_string = generateRandomString();

if(empty($email)) {
	$errors['email'] = 'Please enter your email';
}
if(empty($_POST['age'])) {
	$errors['age'] = 'Confirm age';
}
if(empty($_POST['optin'])) {
	$optin = 'no';
}
else {
	$optin = 'yes';
}
if(empty($recaptcha)) {
	$errors['recaptcha'] = 'empty_recaptcha';
}
if(empty($session_id)) {
	$errors['session_id'] = '';
}
// if errors exist ======================
if(!empty($errors)) {
	$data['errors'] = $errors;
	$data['success'] = false;
}
// if no errors exist ===================
else {

	// VALIDATE CAPTCHA =================
    $secret         = '6LelSDQUAAAAAOJfN7q0Xnnyjtd92iya7B8wLDjI';
    //get verify response data
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $recaptcha);
    $responseData   = json_decode($verifyResponse);

    if ($responseData->success) { // If recpatcha response verified
        $data['success'] = true;
		$data['message'] = 	'success';
		$data['safety_string'] = $safety_string;
		// Insert into database
		DB::insert('flavors_games_registered_users', array(
		  'email' => $email,
		  'safety_string' => $safety_string,
		  'session_id' => $session_id,
		  'opt_in' => $optin
		));
	}
	else { // If recpatcha response not verified
		$data['message'] = 'robot_verification_failed';
	}
}
echo json_encode($data);