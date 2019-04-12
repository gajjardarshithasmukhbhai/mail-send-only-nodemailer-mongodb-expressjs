//client-:346380356857-qvdqul9bikn8fung0ia4tvqnsc70fdip.apps.googleusercontent.com
//clientsecret:-3FtlfrqEvLPqG0ghNCVWOSQ



const path=require('path');
let inner_data=[];
const fs=require('fs');
let Cart=require("../modal/cart.js");
// let Data_conn=require("../modal/update_cart.js");
var sequelize=require('../util/database.js');
var Database=require('../modal/all_file_data.js');
var texsting=require('../index.js');
var User=require('../modal/user.js');
var Signup=require('../modal/signup.js');
let getdb=require('../util/database.js');
let mongodb=require('mongodb');
let bcrypt=require('bcryptjs');
let nodemailer=require('nodemailer');
let sendGridTransporter=require('nodemailer-sendgrid-transport');
let transporter=nodemailer.createTransport({
service:'gmail',
auth:{
	user:'testing.gajjar1998@gmail.com',
	pass:'Mnbvcxz@123'
}
});
exports.signup_enter_controller=(req,res,next)=>{
	let email=req.body.email1;
	let password=req.body.password1;
	let retype=req.body.password2;
	//signup se
	if(email!=null && password.length>5 && password==retype)
	{
		console.log("hasmukh Gajjar");
		return bcrypt.hash(password,12)
			.then(hashPassword=>{
			let signup=new Signup(email,hashPassword,hashPassword);
			setTimeout(()=>{
				signup.save()
				.then(resolve=>{
					req.session.loggedIn=true;
					res.redirect('shop');
					let mailOptions={
							from:'testing.gajjar1998@gmail.com',
							to:email,
							subject: `Hello user you signup`,
							html:`<html><body><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

<!-- START HEADER/BANNER -->

		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td align="center" valign="top" background="https://designmodo.com/demo/emailtemplate/images/header-background.jpg" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
							<table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">

								<tbody><tr>
									<td height="40"></td>
								</tr>


								<tr>
									<td align="center" style="line-height: 0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/logo.png" width="109" height="103" alt="logo">
									</td>
								</tr>



								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:24px; font-weight: bold; letter-spacing: 7px;">
										Darshit <span style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:39px; font-weight: 300; letter-spacing: 7px;">Gajjar</span>
									</td>
								</tr>





								<tr>
									<td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#ffffff; line-height:24px; font-weight: 300;">
										cismox.code@gmail.com for more infomtion <br>you contact our company official website given below llink
									</td>
								</tr>


								<tr>
									<td height="50"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END HEADER/BANNER -->


<!-- START 3 BOX SHOWCASE -->

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="35"></td>
					</tr>

					<tr>
						<td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#2a3a4b;">A creative website and android app<br> design our company main priority</td>
					</tr>

					<tr>
						<td height="10"></td>
					</tr>


					<tr>
						<td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
							Office Adress:<br>
							E-204 vinod tower shrinath recedency<br>karanagar road,kadi
						</td>
					</tr>

				</tbody></table>
			</td>
		</tr>

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
					<tbody><tr>
						<td height="10"></td>
					</tr>
					<tr>
						<td>


							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-about.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway', Arial, sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">About Us</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">CEO MR.Darshit Gajjar</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>





							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>



							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-team.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Team</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
													<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">one man army handle</td>
											</tr>



										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>



							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>



							<table class="col3" width="183" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-portfolio.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway',  sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Portfolio</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;"><a href="https://darshitgajjars.herokuapp.com">comapny website</a></td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>


						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>

			<tr>
					<td height="5"></td>
		</tr>


<!-- END 3 BOX SHOWCASE -->


<!-- START AWESOME TITLE -->

		<tr>
			<td align="center">
				<table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
					<tbody><tr>
						<td align="center" bgcolor="#2a3b4c">
							<table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td height="33"></td>
								</tr>
								<tr>
									<td>


										<table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">

											<tbody><tr>
											<td height="18"></td>
											</tr>

											<tr>
												<td align="center">
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-title.png" alt="img" width="156" height="136">
												</td>



											</tr>
										</tbody></table>



										<table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">

											<tbody><tr align="left" valign="top">
												<td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:30px; font-weight: bold;">you successfully signin Darshit Gajjar system </td>
											</tr>


											<tr>
												<td height="5"></td>
											</tr>


											<tr align="left" valign="top">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
													UserName:-${email}<br>password:-${password}<br><br>Encrypted password:-${hashPassword}<br>
												</td>
											</tr>

											<tr>
												<td height="10"></td>
											</tr>

											<tr align="left" valign="top">
												<td>
													<table class="button" style="border: 2px solid #fff;" bgcolor="#2b3c4d" width="30%" border="0" cellpadding="0" cellspacing="0">
														<tbody><tr>
															<td width="10"></td>
															<td height="30" align="center" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#ffffff;">
																<a href="#" style="color:#ffffff;">Read more</a>
															</td>
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="33"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END AWESOME TITLE -->


<!-- START WHAT WE DO -->

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px;">



		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td align="right">


							<table class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td align="center" style="line-height:0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-responsive.png" width="169" height="138">
									</td>
								</tr>
							</tbody></table>






							<table width="287" border="0" align="left" cellpadding="0" cellspacing="0" class="col2" style="">
								<tbody><tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">



											<tbody><tr align="left">
												<td style="font-family: 'Raleway', sans-serif; font-size:23px; color:#2a3b4c; line-height:30px; font-weight: bold;">What we do?</td>
											</tr>

											<tr>
												<td height="5"></td>
											</tr>


											<tr>
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#7f8c8d; line-height:24px; font-weight: 300;">
													We create responsive websites with modern designs and features for small businesses and organizations that are professionally developed and SEO optimized.
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END WHAT WE DO -->



<!-- START READY FOR NEW PROJECT -->

		<tr>
			<td align="center">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>


						<td align="center" bgcolor="#34495e">
							<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="35"></td>
								</tr>


								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:24px; font-weight: bold;">Ready for new project?</td>
								</tr>


								<tr>
									<td height="20"></td>
								</tr>


								<tr>
									<td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height: 1px; font-weight: 300;">
										Check out our price below.
									</td>
								</tr>


								<tr>
									<td height="40"></td>
								</tr>

							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END READY FOR NEW PROJECT -->


<!-- START PRICING TABLE -->

		<tr>
			<td align="center">
				<table width="600" class="col-600" align="center" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td>


							<table style="border:1px solid #e2e2e2;" class="col2" width="287" border="0" align="left" cellpadding="0" cellspacing="0">


								<tbody><tr>
									<td height="40" align="center" bgcolor="#2b3c4d" style="font-family: 'Raleway', sans-serif; font-size:18px; color:#f1c40f; line-height:30px; font-weight: bold;">Small Business Website</td>
								</tr>


								<tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
											<tbody><tr>
												<td height="20"></td>
											</tr>

											<tr align="center" style="line-height:0px;">
												<td style="font-family: 'Lato', sans-serif; font-size:48px; color:#2b3c4d; font-weight: bold; line-height: 44px;">$150</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>



											<tr>
												<td align="center">
													<table width="100" border="0" align="center" cellpadding="0" cellspacing="0" style="border: 2px solid #2b3c4d;">
														<tbody><tr>
															<td width="10"></td>
															
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>





							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>


							<table style="border:1px solid #e2e2e2;" class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">


								<tbody><tr>
									<td height="40" align="center" bgcolor="#2b3c4d" style="font-family: 'Raleway', sans-serif; font-size:18px; color:#f1c40f; line-height:30px; font-weight: bold;">E-commerce Website</td>
								</tr>


								<tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
											<tbody><tr>
												<td height="20"></td>
											</tr>

											<tr align="center" style="line-height:0px;">
												<td style="font-family: 'Lato', sans-serif; font-size:48px; color:#2b3c4d; font-weight: bold; line-height: 44px;">$289</td>
											</tr>


											<tr>
												<td height="30"></td>
											</tr>



											<tr align="center">
												<td>
													<table width="100" border="0" align="center" cellpadding="0" cellspacing="0" style=" border: 2px solid #2b3c4d;">
														<tbody><tr>
															<td width="10"></td>
															
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="20"></td>
								</tr>
							</tbody></table>

						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END PRICING TABLE -->


<!-- START FOOTER -->

		<tr>
			<td align="center">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td align="center" bgcolor="#34495e" background="https://designmodo.com/demo/emailtemplate/images/footer.jpg" height="185">
							<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="25"></td>
								</tr>

									<tr>
									<td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#f1c40f;">Follow us our company</td>
									</tr>


								<tr>
									<td height="25"></td>
								</tr>



								</tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://www.facebook.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png"> </a>
									</td>

									<td align="center" class="margin" width="30%" style="vertical-align: top;">
										 <a href="https://twitter.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png"> </a>
									</td>

									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://plus.google.com/+Designmodo/posts" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png"> </a>
									</td>
								</tr>
								</tbody></table>



							</td></tr></tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>

<!-- END FOOTER -->

						
					
				</tbody></table></body></html>`
							// text:'khatri chutyo'
						}
						transporter.sendMail(mailOptions,(err,data)=>{
							if(err)
							{
								console.log("darshit error avi",err);
							}
							else{
								console.log('email sent');
							}
						});	
		
				})
				.catch(err=>{
					console.log(err);
				});
			},60);
			});
			
	}
	else{
		console.log("gajjar darshit hasmukhbhai");
		res.render("signup",{show:"your password is minimu 5 character"});
	}
	
}
exports.add_product_data_controller=(req,res,next)=>{
		let UserId=User.UserId();
		let obj=new Database(req.body.Title,req.body.Image,req.body.price,req.body.description,UserId);
		obj.save()
		.then(resolve=>{
			if(resolve)
			{
				res.redirect("/shop");
			}
			else{
				res.render("index");
			}
		}).catch(err=>{
			console.log(err);
			res.end();
		});
}
exports.order_controller=(req,res,next)=>{
	res.render("order");
}
exports.admin_delete_product_controller=(req,res,next)=>{
	let delete_cart_id=req.params.iid;
	Database.productDelete(delete_cart_id)
	.then(e=>{
		res.redirect('/Admin_Product');
	})
	.catch(err=>{
		console.log('not solved');
			res.end();
	
	});
}
exports.add_products_controller=(req,res,next)=>{
	let email=req.body.email;
	let password=req.body.password;
		// User.saveUser(email,password)
		let sx=new User(email,password);
		sx.save()
		.then(resolve=>{
			if(resolve){
				console.log("gajju rock");
				req.session.loggedIn=true;
				res.redirect("/Add_product");//change res.redirect('Add_product');
				let mailOptions={
							from:'testing.gajjar1998@gmail.com',
							to:email,
							subject: `Hello user you sucessfully SignIn`,
							html:`<html><body><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

<!-- START HEADER/BANNER -->

		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td align="center" valign="top" background="https://designmodo.com/demo/emailtemplate/images/header-background.jpg" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
							<table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">

								<tbody><tr>
									<td height="40"></td>
								</tr>


								<tr>
									<td align="center" style="line-height: 0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/logo.png" width="109" height="103" alt="logo">
									</td>
								</tr>



								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:24px; font-weight: bold; letter-spacing: 7px;">
										Darshit <span style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:39px; font-weight: 300; letter-spacing: 7px;">Gajjar</span>
									</td>
								</tr>





								<tr>
									<td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#ffffff; line-height:24px; font-weight: 300;">
										cismox.code@gmail.com for more infomtion <br>you contact our company official website given below llink
									</td>
								</tr>


								<tr>
									<td height="50"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END HEADER/BANNER -->


<!-- START 3 BOX SHOWCASE -->

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="35"></td>
					</tr>

					<tr>
						<td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#2a3a4b;">A creative website and android app<br> design our company main priority</td>
					</tr>

					<tr>
						<td height="10"></td>
					</tr>


					<tr>
						<td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
							Office Adress:<br>
							E-204 vinod tower shrinath recedency<br>karanagar road,kadi
						</td>
					</tr>

				</tbody></table>
			</td>
		</tr>

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
					<tbody><tr>
						<td height="10"></td>
					</tr>
					<tr>
						<td>


							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-about.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway', Arial, sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">About Us</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">CEO MR.Darshit Gajjar</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>





							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>



							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-team.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Team</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
													<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">one man army handle</td>
											</tr>



										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>



							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>



							<table class="col3" width="183" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-portfolio.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway',  sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Portfolio</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;"><a href="https://darshitgajjars.herokuapp.com">comapny website</a></td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>


						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>

			<tr>
					<td height="5"></td>
		</tr>


<!-- END 3 BOX SHOWCASE -->


<!-- START AWESOME TITLE -->

		<tr>
			<td align="center">
				<table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
					<tbody><tr>
						<td align="center" bgcolor="#2a3b4c">
							<table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td height="33"></td>
								</tr>
								<tr>
									<td>


										<table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">

											<tbody><tr>
											<td height="18"></td>
											</tr>

											<tr>
												<td align="center">
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-title.png" alt="img" width="156" height="136">
												</td>



											</tr>
										</tbody></table>



										<table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">

											<tbody><tr align="left" valign="top">
												<td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:30px; font-weight: bold;">you successfully signin Darshit Gajjar system </td>
											</tr>


											<tr>
												<td height="5"></td>
											</tr>


											<tr align="left" valign="top">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
													UserName:-${email}<br>password:-${password}<br>
												</td>
											</tr>

											<tr>
												<td height="10"></td>
											</tr>

											<tr align="left" valign="top">
												<td>
													<table class="button" style="border: 2px solid #fff;" bgcolor="#2b3c4d" width="30%" border="0" cellpadding="0" cellspacing="0">
														<tbody><tr>
															<td width="10"></td>
															<td height="30" align="center" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#ffffff;">
																<a href="#" style="color:#ffffff;">Read more</a>
															</td>
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="33"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END AWESOME TITLE -->


<!-- START WHAT WE DO -->

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px;">



		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td align="right">


							<table class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td align="center" style="line-height:0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-responsive.png" width="169" height="138">
									</td>
								</tr>
							</tbody></table>






							<table width="287" border="0" align="left" cellpadding="0" cellspacing="0" class="col2" style="">
								<tbody><tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">



											<tbody><tr align="left">
												<td style="font-family: 'Raleway', sans-serif; font-size:23px; color:#2a3b4c; line-height:30px; font-weight: bold;">What we do?</td>
											</tr>

											<tr>
												<td height="5"></td>
											</tr>


											<tr>
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#7f8c8d; line-height:24px; font-weight: 300;">
													We create responsive websites with modern designs and features for small businesses and organizations that are professionally developed and SEO optimized.
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END WHAT WE DO -->



<!-- START READY FOR NEW PROJECT -->

		<tr>
			<td align="center">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>


						<td align="center" bgcolor="#34495e">
							<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="35"></td>
								</tr>


								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:24px; font-weight: bold;">Ready for new project?</td>
								</tr>


								<tr>
									<td height="20"></td>
								</tr>


								<tr>
									<td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height: 1px; font-weight: 300;">
										Check out our price below.
									</td>
								</tr>


								<tr>
									<td height="40"></td>
								</tr>

							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END READY FOR NEW PROJECT -->


<!-- START PRICING TABLE -->

		<tr>
			<td align="center">
				<table width="600" class="col-600" align="center" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td>


							<table style="border:1px solid #e2e2e2;" class="col2" width="287" border="0" align="left" cellpadding="0" cellspacing="0">


								<tbody><tr>
									<td height="40" align="center" bgcolor="#2b3c4d" style="font-family: 'Raleway', sans-serif; font-size:18px; color:#f1c40f; line-height:30px; font-weight: bold;">Small Business Website</td>
								</tr>


								<tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
											<tbody><tr>
												<td height="20"></td>
											</tr>

											<tr align="center" style="line-height:0px;">
												<td style="font-family: 'Lato', sans-serif; font-size:48px; color:#2b3c4d; font-weight: bold; line-height: 44px;">$150</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>



											<tr>
												<td align="center">
													<table width="100" border="0" align="center" cellpadding="0" cellspacing="0" style="border: 2px solid #2b3c4d;">
														<tbody><tr>
															<td width="10"></td>
															
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>





							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>


							<table style="border:1px solid #e2e2e2;" class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">


								<tbody><tr>
									<td height="40" align="center" bgcolor="#2b3c4d" style="font-family: 'Raleway', sans-serif; font-size:18px; color:#f1c40f; line-height:30px; font-weight: bold;">E-commerce Website</td>
								</tr>


								<tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
											<tbody><tr>
												<td height="20"></td>
											</tr>

											<tr align="center" style="line-height:0px;">
												<td style="font-family: 'Lato', sans-serif; font-size:48px; color:#2b3c4d; font-weight: bold; line-height: 44px;">$289</td>
											</tr>


											<tr>
												<td height="30"></td>
											</tr>



											<tr align="center">
												<td>
													<table width="100" border="0" align="center" cellpadding="0" cellspacing="0" style=" border: 2px solid #2b3c4d;">
														<tbody><tr>
															<td width="10"></td>
															
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="20"></td>
								</tr>
							</tbody></table>

						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END PRICING TABLE -->


<!-- START FOOTER -->

		<tr>
			<td align="center">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td align="center" bgcolor="#34495e" background="https://designmodo.com/demo/emailtemplate/images/footer.jpg" height="185">
							<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="25"></td>
								</tr>

									<tr>
									<td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#f1c40f;">Follow us our company</td>
									</tr>


								<tr>
									<td height="25"></td>
								</tr>



								</tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://www.facebook.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png"> </a>
									</td>

									<td align="center" class="margin" width="30%" style="vertical-align: top;">
										 <a href="https://twitter.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png"> </a>
									</td>

									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://plus.google.com/+Designmodo/posts" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png"> </a>
									</td>
								</tr>
								</tbody></table>



							</td></tr></tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>

<!-- END FOOTER -->

						
					
				</tbody></table></body></html>`
							// text:'khatri chutyo'
						}
						transporter.sendMail(mailOptions,(err,data)=>{
							if(err)
							{
								console.log("darshit error avi",err);
							}
							else{
								console.log('email sent');
							}
						});	
			
			}
			else{
				res.render("index",{valid:false});
			}
		})
		.catch(err=>{
			console.log(err);
				res.end();		
		});
	
}
exports.Logout_controller=(req,res,next)=>{
	req.session.destroy(err=>{
		res.redirect('/');
	});
}
exports.admin_product_controller=(req,res,next)=>{
	// res.clearCookie('loggedIn');
	let xy=req.session.loggedIn;
	if(xy)
	{
		Database.fetchall().then((ata)=>{
			res.render("Admin_product",{data:ata});
		});
	}
	else{
		res.render("index",{wer:"your account is not verified"});
	}
}
exports.admin_edit_product_controller=(req,res,next)=>{
	let confirmId;
	let user_data=req.params.id;
	let delete_cart_id=req.params.iid;
	Database.findProduct(user_data).then((ata)=>{
		res.render("Admin_edit_product",{verifies_data:ata,csrf:req.csrfToken()});
	}).catch(err=>{
			res.end();

	});	
}
exports.admin_update_product_controller=(req,res,next)=>{
	let Id=req.params.Id;
	let title=req.body.update_title;
	let price=req.body.update_price;
	let description=req.body.update_description;
	let image=req.body.update_image;
	let UserId=User.UserId();
	// let cookie=req.session.loggedIn;
	Database.upda(Id,title,price,description,image,UserId).then(er=>{
		res.redirect('/Admin_Product');
	})
	.catch(err=>{
		console.log(err)
			res.end();

	});	
}
exports.cart_controller=(req,res,next)=>{
	res.redirect("/Carts");
}
exports.carts_controller=(req,res,next)=>{
	let KmId=req.body.ProductId;
	let KmPrice=req.body.price;
	let KmTitle=req.body.Title;

	Cart.cart(KmId,KmPrice,KmTitle)
	.then(resolve=>{
		setTimeout(()=>{
			res.redirect("/Carts");				
		},50)
	}).catch(err=>{
		console.log(err);
			res.end();

	});
}
exports.SignUp_controller=(req,res,next)=>{
	res.render("signup");
}
exports.cart_show_controller=(req,res,next)=>{
	let obej;	
	let db=getdb.getDb();
		Cart.information()
		.then(products=>{
				let totalPrICE;
				let checking=true;
				let sd=Object.values(products[0]);//imporatant method
				let NaNobject=sd[4];//imporatant method
				let Id=sd[0];//imporatant method
				console.log(NaNobject,"<-");
				if(isNaN(NaNobject))
                    {
                    	checking=false;
                    	console.log('gajjau rock');
                        db.collection('user').updateOne({_id:new mongodb.ObjectId(Id)},{$set:{totalPrice:0}})
                        .then(wer=>{
							res.render("cart",{cart_data:obej,totalPrice:totalPrICE});

                        })
                        .catch(err=>{console.log('err',err)});
                    }
				products.map(wer=>{

					totalPrICE=wer.totalPrice;
				});
				//[{data}]->data leva Object.values(products[0].items);
				obej=Object.values(products[0].items);
				if(checking)
				{
					res.render("cart",{cart_data:obej,totalPrice:totalPrICE});
				}
			}).catch(err=>{
				res.end();
				console.log(err);
			});	
}
exports.products_controller=(req,res,next)=>{
	res.redirect("/Shop");
}
exports.carts_redirect_controller=(req,res,next)=>{
	res.render("cart");
}
exports.carts_delete_controller=(req,res,next)=>{
	let deleteId=req.params.deleteId;
	Cart.delete(deleteId).then(resolve=>{
		setTimeout(()=>{
			res.redirect("/Carts");//change1
		},50);
	})
	.catch(err=>{
		console.log(err);
			res.end();

	});
	// res.render("cart");
}
exports.product_controller=(req,res,next)=>{
	const uid=req.params.productId;
	Database.findId(uid).then((ata)=>{
			console.log(ata,"ata");
			res.render("product",{id_data:ata,csrf:req.csrfToken()});
	}).catch(err=>{
			res.end();

	});
}
exports.delete=(req,res,next)=>{
	res.end();
}
exports.shop_controller=(req,res,next)=>{
	let xy=req.session.loggedIn;
	console.log("darshu----------------------->>",req.session.gajjarDarshit);
	 // console.log("---->",req.session.loggedIn);
	if(xy){
				// res.redirect("/shop");
				// res.render("Add_product");
				Database.fetchall().then(products => {
	            res.render("shop", {
	                data: products,
	            	});
	        	})
		        .catch(err => {
		            console.log(err);
					res.end();
		        
		        });
		}
	else{
				res.render("index",{wer:"your account is not verified"});
			}
}
exports.home_controller=(req,res,next)=>{
	let session=req.session.loggedIn;
	if(session)
	{
		res.redirect("/shop");
	}	
	else
	{
		res.render("index",{wer:"your account is not verified"});
	}
}
exports.add_product_controller=(req,res,next)=>{
	let xy=req.session.loggedIn;
	console.log("darshu----------------------->>",req.session.gajjarDarshit);
	 // console.log("---->",req.session.loggedIn);
	if(xy){
		res.render("Add_product",{csrf:req.csrfToken()});
	}

	else{
		res.render("index",{wer:"your account is not verified please authicate"});
	}	
	
}