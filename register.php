<?php ?>
<?php 

?>
<style type="text/css">
	.small_logo {
		display: none;
	}
</style>
<div class="spin_holder">
	<div class="intro">
		<img class="logo" src="img/jj-flavor-logo.png">
		<div class="desktop">
			<h2 class="heading">Take a Spin with Your Kids</h2>
			<div class="intro_lead">Enjoy flavor-filled fun with games, puzzles and activities your kids will love.</div>
			<div class="intro_lead">Plus, you could win a juicy prize!</div>
			<button  id="spin_btn_1" class="spin"><span>CLICK TO SPIN</span></button>
			<div class="intro_lead_small">Explore more about our 16 fun flavors here <span style="font-size: 12px;" class="glyphicon glyphicon-play" aria-hidden="true"></span></div>
		</div>
	</div>
	<div class="roulette_holder">       
	    <div class="container">         
	        <div class="prize_info"><span></span></div>
	        <div class="ghost"></div>
	        <div class="roulette">
	            <form id="register" action="process.php" method="POST">
	                <div class="form-group" id="form_intro">
	                    <label>Parents, To Get Started, <br>Please Enter Your Email</label>
	                </div>              
	                <div class="form-group" id="email-group">
	                    <input type="email" name="email">
	                </div>
	                <div class="form-group" id="age-group">
	                    <div class="btn-group" data-toggle="buttons">
	                        <label class="btn btn-default big_checkbox">
	                            <input type="checkbox" autocomplete="off" name="age" id="age">
	                            <span class="glyphicon glyphicon-ok"></span>
	                        </label>
	                        <label for="age">I am 18 years or older, I’ve read and agree to the <a class="rules_link" target="_blank" style="color: #1a5633;text-decoration: underline;" href="?page=official-rules">Official Rules</a> of the promotion.</label>
	                    </div>
	                </div>
	                <div class="form-group" id="optin-group">
	                    <div class="btn-group" data-toggle="buttons">
	                        <label class="btn btn-default big_checkbox active">
	                            <input type="checkbox" name="optin" id="optin" value="yes" checked="checked">
	                            <span class="glyphicon glyphicon-ok"></span>
	                        </label>
	                        <label for="age">I would like to receive offers and information from Juicy Juice<sup>®</sup>.</label>
	                    </div>
	                </div>
	                <div class="form-group" id="recaptcha">
	                    <div class="g-recaptcha" data-sitekey="6LelSDQUAAAAAAptQhqPrh1bsrzV0TYgLkLHC966"></div>
	                </div>
	                <input type="hidden" value="<?php echo session_id(); ?>" name="sid" >
	                <input type="submit" value="Submit">
	            </form>
	            <div class="ghost"></div>
	        </div>
	    </div>
	</div>
	<button  id="spin_btn_1" class="spin"><span>CLICK TO SPIN</span></button>
	<div class="mobile">
		<button  id="spin_btn_1" class="spin"><span>CLICK TO SPIN</span></button>
		<h2 class="heading">Take a Spin with Your Kids</h2>		
		<div class="intro_lead">Enjoy flavor-filled fun with games, puzzles and activities your kids will love.</div>
		<div class="intro_lead">Plus, you could win a juicy prize!</div>
		<div class="intro_lead_small"><a target="_blank" style="color: #1a5632;" href="http://juicyjuice.com/products/juicy-juice-fruit-juice">Explore more about our 16 fun flavors here <span style="font-size: 12px;" class="glyphicon glyphicon-play" aria-hidden="true"></span></a></div>
	</div>
</div>
<div class="overlay"></div>

