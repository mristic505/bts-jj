<?php 
// if(empty($_POST['dsid'])) :
// 	return_to_hp();
// else :
// 	$result = DB::query("SELECT * FROM flavors_games_registered_users WHERE safety_string=%s", $_POST['dsid']);	
// 	if(empty($result)) return_to_hp();
?>
<style type="text/css">
	.small_logo {
		display: none;
	}
</style>
<div class="spin_holder registered">
	<div class="intro">
		<img class="logo" src="img/jj-flavor-logo.png">
		<div class="desktop">
			<h2 class="heading">Take a Spin with Your Kids</h2>
			<div class="intro_lead">Enjoy flavor-filled fun with games, puzzles and activities your kids will love.</div>
			<div class="intro_lead">Plus, you could win a juicy prize!</div>
			<button  id="spin_btn_1" class="spin"><span style="font-size: 50%;">CLICK TO</span><br>SPIN</button>
			<?php if (!$show_prize_message) : ?>
				<div class="parn">Today’s prize has already been awarded. You can still enjoy playing Flavor Discovery games now and come back tomorrow for a chance to win.</div>
			<?php endif; ?>
			<div class="intro_lead_small"><a target="_blank" style="color: #1a5632;" href="http://juicyjuice.com/products/juicy-juice-fruit-juice">Explore more about our 16 fun flavors here <span style="font-size: 12px;" class="glyphicon glyphicon-play" aria-hidden="true"></span></a></div>
		</div>
	</div>
	<?php include('wheel.php'); ?>
	<div class="mobile">
		<button  id="spin_btn_1" class="spin"><span style="font-size: 50%;">CLICK TO</span><br>SPIN</button>
		<?php if (!$show_prize_message) : ?>
				<div class="parn">Today’s prize has already been awarded. You can still enjoy playing Flavor Discovery games now and come back tomorrow for a chance to win.</div>
		<?php endif; ?>
		<h2 class="heading">Take a Spin with Your Kids</h2>		
		<div class="intro_lead">Enjoy flavor-filled fun with games, puzzles and activities your kids will love.<br>PLUS, you could win a juicy prize!</div>		
		<div class="intro_lead_small"><a target="_blank" style="color: #1a5632;" href="http://juicyjuice.com/products/juicy-juice-fruit-juice">Explore more about our 16 fun flavors here <span style="font-size: 12px;" class="glyphicon glyphicon-play" aria-hidden="true"></span></a></div>
	</div>
</div>
<?php 
// endif; ?>