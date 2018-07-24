<style type="text/css">
	.small_logo {
		display: none;
	}
</style>
<div class="form_holder">
	<img class="logo logo-2" src="img/logo-2.png">
	<h1 class="h1_title pcf_title">Prize Claim Form</h1>
	<div class="pfi">
		Please provide the following information to claim your prize upon winner verification:<br><span>All fields are required unless otherwise indicated.</span>
	</div>
	<form id="prize_form" class="visible_on" action="prize_claim_form.php" method="POST">
		<div class="form-group-holder clearfix">
			<div id="first-name-group" class="form-group col-sm-6">
				<label>First Name</label><br>
				<input type="text" class="form-control-noboot" name="first_name" placeholder="">
			</div>
			<div id="last-name-group" class="form-group col-sm-6">
				<label>Last Name</label><br>
				<input type="text" class="form-control-noboot" name="last_name" placeholder="">
			</div>
		</div>
		<div class="form-group-holder email-group-holder clearfix">
			<div id="email-group" class="form-group col-sm-6">
				<label>Email Address</label><br>
				<input value="<?php echo $result[0]['email']; ?>" readonly type="email" class="form-control-noboot" name="email" placeholder="">
			</div>
			<div id="email-conf-group" class="form-group col-sm-6">
				<label>Confirm Email Address</label><br>
				<input value="<?php echo $result[0]['email']; ?>" readonly type="email" class="form-control-noboot" name="email_conf" placeholder="">
			</div>
		</div>
		<div class="form-group-holder clearfix">
			<div id="address-group" class="form-group col-sm-6">
				<label>Address <span>(Please Note: No P.O. Boxes)</span></label><br>
				<input type="text" class="form-control-noboot" name="address_1" placeholder="">
			</div>
			<div id="" class="form-group col-sm-6">
				<label>Address 2 <span>(optional)</span></label><br>
				<input type="text" class="form-control-noboot" name="address_2" placeholder="">
			</div>
		</div>
		<div class="form-group-holder clearfix">
			<div id="city-group" class="form-group col-sm-6">
				<label>City</label><br>
				<input type="text" class="form-control-noboot" name="city" placeholder="">
			</div>
			<div id="state-zip-group" class="form-group col-sm-6">
				<div id="state-group" class="form-group col-sm-6">
					<label>State</label><br>
					<select name="state">
						<option class="placeholder" value="" disabled="" selected="" hidden="">Select</option>
						<option value="AL">AL</option>
						<option value="AK">AK</option>
						<option value="AR">AR</option>	
						<option value="AZ">AZ</option>
						<option value="CA">CA</option>
						<option value="CO">CO</option>
						<option value="CT">CT</option>
						<option value="DC">DC</option>
						<option value="DE">DE</option>
						<option value="FL">FL</option>
						<option value="GA">GA</option>
						<option value="HI">HI</option>
						<option value="IA">IA</option>	
						<option value="ID">ID</option>
						<option value="IL">IL</option>
						<option value="IN">IN</option>
						<option value="KS">KS</option>
						<option value="KY">KY</option>
						<option value="LA">LA</option>
						<option value="MA">MA</option>
						<option value="MD">MD</option>
						<option value="ME">ME</option>
						<option value="MI">MI</option>
						<option value="MN">MN</option>
						<option value="MO">MO</option>	
						<option value="MS">MS</option>
						<option value="MT">MT</option>
						<option value="NC">NC</option>	
						<option value="NE">NE</option>
						<option value="NH">NH</option>
						<option value="NJ">NJ</option>
						<option value="NM">NM</option>			
						<option value="NV">NV</option>
						<option value="NY">NY</option>
						<option value="ND">ND</option>
						<option value="OH">OH</option>
						<option value="OK">OK</option>
						<option value="OR">OR</option>
						<option value="PA">PA</option>
						<option value="RI">RI</option>
						<option value="SC">SC</option>
						<option value="SD">SD</option>
						<option value="TN">TN</option>
						<option value="TX">TX</option>
						<option value="UT">UT</option>
						<option value="VT">VT</option>
						<option value="VA">VA</option>
						<option value="WA">WA</option>
						<option value="WI">WI</option>	
						<option value="WV">WV</option>
						<option value="WY">WY</option>
					</select>		
				</div>
				<div id="zip-group" class="form-group col-sm-6">
					<label>Zip Code</label>
					<input type="text" class="form-control-noboot" name="zip" placeholder="">
				</div>
			</div>
		</div>
		<div class="form-group-holder clearfix">
			<div id="phone-group" class="form-group col-sm-6">
				<label>Phone</label>
				<input type="text" class="form-control-noboot" name="phone" placeholder="">
			</div>
			<div id="contact_epsilon" class="form-group col-sm-6">
				<label>If you have questions, please contact <a style="color: inherit;" href="mailto:MarketingServices@epsilon.com">MarketingServices@epsilon.com</a></label>				
			</div>
		</div>
		<div class="form-group" id="">
            <div class="btn-group" id="legal-group" data-toggle="buttons">
                <label class="btn btn-default big_checkbox ">
                    <input type="checkbox" autocomplete="off" name="legal" id="legal" >
                    <span class="glyphicon glyphicon-ok"></span>
                </label>
                <label for="age">By checking this box, I represent that I am a legal U.S. resident and at least 18 years old or the age of majority in my state and that I am not an employee or member of the immediate family member of Harvest Hill Beverage Company (“Sponsor”), Epsilon Data Management, LLC (“Administrator”) or Brand Connections. I affirm and represent that I have read and complied with and agree to the terms of the Official Rules and that I have not committed any fraud or deception in participating in this Game or in claiming a prize. I acknowledge that I am not a winner until my eligibility and compliance with the Official Rules have been verified. I understand that, should I become a verified winner, Sponsor will have the right, but not the obligation, to use my name, likeness, city and state of residence for publicity purposes, including but not limited to winner announcements made on social media, without additional compensation or permission, where permitted by law. I understand that the prize is $40 prepaid card and that I will be responsible for all federal, state and local taxes on this prize. If any statement made by me in this prize claim form is false, then, in addition to any other remedies that may be taken against me, I agree to return to the Sponsor any prize awarded to me. I hereby release, discharge and Sponsor, Administrator and Brand Connections and their respective parents, subsidiaries and affiliated companies and officers, directors, employees, agents, licensees and assigns, and sponsors, advertisers, partners and agencies, from any and all actions, suits, claims and demands of any kind whatsoever, which I, my heirs, executors, administrators and assigns, had, now have or hereafter may have, by reason of any matter connected in any way with the Game, including, but not limited to the operation of the Game, the awarding of prizes, any loss or damage to any prize, and any action, claim or suit for personal injury or loss or damage to property in connection with the receipt and use of the prize.</label>
            </div>
        </div>
        <input type="submit" value="Submit">
	</form>
	<div class="thank_you_prize_claim clearfix">
		<div class="col-sm-4">
			<img class="girl-big" src="img/girl-big.png">
		</div>
		<div class="col-sm-8">
			<h1 style="text-align: left;" class="h1_title">Thanks for completing the prize claim form.</h1>
			<br>
			<p class="thank_you_prize_claim_text">Once you have been verified as a winner, your prize will be shipped directly to the address provided on your prize claim form within 4–6 weeks. You will be notified in the event of a disqualification.
			</p>
			<p class="thank_you_prize_claim_text">As a winner, you will not be eligible for another prize, but there is no limit to the fun you and your kids can have with the Juicy Juice Flavor Discovery Games. 
			<br>
			<br>
			<span style="color:#65a621;font-size: 20px;">So keep playing and enjoying!</span>
			</p>
			<br>
			<a class="spin_btn" href="?page=spin">SPIN</a>
		</div>
	</div>
</div>
