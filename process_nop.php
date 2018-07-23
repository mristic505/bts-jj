<?php
require_once 'db.php';

$erros = array();
$data = array();

$session_id = $_POST['session_id'];

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
	$data['success'] = true;
	$data['message'] = 	'success';

	$result = DB::query("SELECT * FROM flavors_games_registered_users WHERE session_id=%s", $session_id);
	if (!empty($result)) {
		$times_played = $result[0]['times_played'];
		if($times_played < 10) {			
			$times_played = $times_played + 1;
			DB::update('flavors_games_registered_users', array(
			  'times_played' => $times_played
			  ), "session_id=%s", $session_id);
		}
	}
}
echo json_encode($data);