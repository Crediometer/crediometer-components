import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/animsition/css/animsition.min.css";
import "./css/util.css"
import "./css/main.css";
import "./vendor/select2/select2.min.css";
import "./vendor/daterangepicker/daterangepicker.css";
import image from "../contact-us/images/bg-01.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'






const Contact = () => {
	console.log('home re-rending')
	return (
		
			<div class="container-contact100">
		<div class="wrap-contact100">
					<form class="contact100-form validate-form">
						<span class="contact100-form-title">
							Send Us A Message
						</span>

						<label class="label-input100" for="first-name">Full Name *</label>
						<div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
							<input id="first-name" class="input100" type="text" name="first-name" disabled placeholder="First name"/>
							<span class ="focus-input100"></span>
						</div>
						<div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
							<input class="input100" type="text" name="last-name" disabled placeholder="Last name"/>
							<span class ="focus-input100"></span>
						</div>

						<label class="label-input100" for="phone"> phone number</label>
						<div class="wrap-input100">
							<input id="phone" class="input100" disabled type="text" name="phone" placeholder="Eg. +1 800 000000"/>
							<span class ="focus-input100"></span>
						</div>

						

						<label class="label-input100" for="message">Message *</label>
						<div class="wrap-input100 validate-input" data-validate="Message is required">
							<textarea id="message" class="input100" name="message" placeholder="Write us a message"></textarea>
							<span class="focus-input100"></span>
						</div>

						<div class="container-contact100-form-btn">
							<button class="contact100-form-btn">
								Send Message
							</button>
						</div>
					</form>

					<div class="contact100-more flex-col-c-m" style={{backgroundImage: image}}>
						<div class="flex-w size1 p-b-47">
							<div class="txt1 p-r-25">
								<FontAwesomeIcon icon={["fal", "coffee"]} />
								<span class="lnr lnr-map-marker"></span>
							</div>

							<div class="flex-col size2">
								<span class="txt1 p-b-20">
									Address
								</span>

								<span class="txt2">
									52, Adejuiyegbe complex, Isikan, Ondo road, Akure, Ondo state, Nigeria.
								</span>
							</div>
						</div>

						<div class="dis-flex size1 p-b-47">
							<div class="txt1 p-r-25">
								<span class="lnr lnr-phone-handset"></span>
							</div>

							<div class="flex-col size2">
								<span class="txt1 p-b-20">
									Lets Talk
								</span>

								<span class="txt3">
									+234 806 619 8616
								</span>
							</div>
						</div>

						<div class="dis-flex size1 p-b-47">
							<div class="txt1 p-r-25">
								<span class="lnr lnr-envelope"></span>
							</div>

							<div class="flex-col size2">
								<span class="txt1 p-b-20">
									General Support
								</span>

								<span class="txt3">
									contact@crediometer.com
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>


	);
};
export default Contact;





{/* <div id="dropDownSelect1"></div>

<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
	<script>
		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-23581568-13');
	</script> */}