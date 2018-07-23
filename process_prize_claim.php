<?php
require_once 'db.php';

$erros = array();
$data = array();



if(empty($_POST['first_name'])) {
	$errors['first_name'] = 'Please enter your first name';
}
if(empty($_POST['last_name'])) {
	$errors['last_name'] = 'Please enter your last name';
}
if(empty($_POST['email'])) {
	$errors['email'] = 'Please enter your email address';
}
else {
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email_invalid'] = 'Please enter a valid email address';
	}
}
if(empty($_POST['email_conf'])) {
	$errors['email_conf'] = 'Please confirm your email address';
}
if(empty($_POST['phone'])) {
	$errors['phone'] = 'Please enter your phone number';
}
else {
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email_conf_invalid'] = 'Please enter a valid email address';
	}
}
if(!empty($_POST['email']) AND !empty($_POST['email_conf'])) {
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email_invalid'] = 'Please enter a valid email address';
	} else if (!filter_var($_POST['email_conf'], FILTER_VALIDATE_EMAIL)) {
		$errors['email_conf_invalid'] = 'Please enter a valid email address';
	} else {
		if($_POST['email'] != $_POST['email_conf']) {
			$errors['email_mismatch'] = 'Entered email addresses do not match';
		}
	}
	
}
if(empty($_POST['address_1'])) {
	$errors['address_1'] = 'Please enter your address';
}
if(empty($_POST['city'])) {
	$errors['city'] = 'Please enter your city';
}
if(empty($_POST['state'])) {
	$errors['state'] = 'Please enter your state';
}
if(empty($_POST['zip'])) {
	$errors['zip'] = 'Please enter your zip';
}
if(empty($_POST['legal'])) {
	$errors['legal'] = 'Please confirm';
}
// if errors exist ======================
if(!empty($errors)) {
	$data['errors'] = $errors;
	$data['success'] = false;
}
// if no errors exist ===================
else {
	$data['success'] = true;
	$data['message'] = 'it works';

	DB::insert('flavors_games_winners', array(
	  'first_name' => $_POST['first_name'],
	  'last_name' => $_POST['last_name'],
	  'email' => $_POST['email'],
	  'address_1' => $_POST['address_1'],
	  'address_2' => $_POST['address_2'],
	  'city' => $_POST['city'],
	  'state' => $_POST['state'],
	  'zip' => $_POST['zip'],
	  'phone' => $_POST['phone']	  
	));

}
echo json_encode($data);