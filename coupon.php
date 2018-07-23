<script type="text/javascript">
jQuery(document).ready(function($){
	$('.coupon_btn').click(function(){
		// $('#coupon_submit').submit();
	});
});
</script>
<style type="text/css">
	.small_logo {
		display: none;
	}
</style>
<?php
	error_reporting(E_ERROR | E_PARSE);	

	$action = $_POST["action"];
	$print = $_POST["print"];
	//echo "action: $action<br>\n";
	
	global $smartprint_couponid; $your_key;
	$smartprint_couponid = "LDKE2TNEM3B7E";
	$your_key = "uePrg8FNDWEQVGgNXqr9RkppZB1VW4";
	
	if ($action) {
	
		$ip = getenv('REMOTE_ADDR');
		$ip = str_replace('.', '', $ip); 
		$time = time();
		$MID = ($ip + $time);
		echo "ip: $ip<br>\n";
		echo "time: $time<br>\n";
		echo "MID: $MID<br>\n";
		//echo "<br>\n";

		// test coupon
		
		echo "smartprint_couponid: $smartprint_couponid<br>\n";
		//echo "<br>\n";

		// test token URL
		$tokenURL = "http://coupons2.smartsource.com/smartsource2/TokenGeneratorServlet?Link=value1&MID=value2&key=value3";
		$tokenURL = str_replace('value1', $smartprint_couponid, $tokenURL); 
		$tokenURL = str_replace('value2', $MID, $tokenURL); 
		$tokenURL = str_replace('value3', $your_key, $tokenURL);
		//echo "tokenURL: $tokenURL<br>\n";
		//echo "<br>\n";

		$req =& new HTTP_Request("http://www.php.net");
		$req->setMethod(HTTP_REQUEST_METHOD_GET);
		$req->setURL("$tokenURL");
		if (!PEAR::isError($req->sendRequest())) {
			$token = $req->getResponseBody();
		} else {
			$token = "none";
		}
		//echo "token: $token<br>\n";
		//echo "<br>\n";

		// actual smartprint URL
		$smartprintURL = "http://coupons2.smartsource.com/smartsource2/index.jsp?Link=value1&MID=value2&token=value3";
		$smartprintURL = str_replace('value1', $smartprint_couponid, $smartprintURL); 
		$smartprintURL = str_replace('value2', $MID, $smartprintURL); 
		$smartprintURL = str_replace('value3', $token, $smartprintURL); 
		//echo "smartprintURL: $smartprintURL<br>\n";
		echo "<br>\n";

		HTTP::redirect("$smartprintURL");

	}
	if ($print){
		//HTTP::redirect("$smartprintURL");
		$req =& new HTTP_Request("http://www.php.net");
		$req->setMethod(HTTP_REQUEST_METHOD_GET);
		$req->setURL("$tokenURL");
		//setURL("$smartprintURL");
		//echo "Print";
	}	
?>
<img class="logo logo-2" src="img/logo-2.png">
<div class="coupon_holder clearfix">	
	<div class="col-sm-6 coupon_text_holder">
		<h1 style="text-align: left;" class="h1_title">Thanks for playing Juicy Juice Flavor Discovery Games!</h1>
		<br>
		<p class="thank_you_prize_claim_text coupon_text">Enjoy 75¢ off your next Juicy Juice purchase and stop back soon to play more Flavor Discovery games.
		</p>		
		<br>
		<!-- <a class="spin_btn coupon_btn" href="javascript:void(0);">SAVE 75¢</a> -->
		<form id="coupon_submit" method='post' action='/process_coupon.php'><input type='submit' name='action' value='Request Token'  style='background:url(/save-75-cents.png) no-repeat; background-size:100%;width:300px; height:66px;; text-indent:-99999px; border:none; display:block; margin: 0 auto;padding: 0;'>
		</form>
		<div class="coupon_disclaimer">off your purchase of any Juice Juice product</div>
	</div>
	<div class="col-sm-6 jj_products_holder">
		<img class="jj_products" src="img/jj_products.png">
	</div>
</div>