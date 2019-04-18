# Email sending Web App in MongoDB,ExpressJS,ReactJS,NodeJS
**in this web-app i learn lot**
```
in this web-app my main priority not only making webApp.But Also security si
I give security features like 
->session hijacking
->CSRF protection
->Encrypted protection system
```
### Encrypted password code
```javascript
let bcrypt=require('bcryptjs');
return bcrypt.hash(password,12)
			.then(hashPassword=>{
        console.log("hashpassword",hashPassword);
      })
      .catch(err=>{
        console.log("error",err);
      });
```
---
### CSRF Token
```javascript
var csrf=require('csurf');
var csrfprotection=csrf();
app.get("/cart",csrfprotection,cart.cart_controller);
app.post("/Cart",csrfprotection,cart.carts_controller);
```
---
**when you request post method so that time CSRF invalid Error is occur so solve this thing**
```html
<input type="hidden" name="_csrf" value="#{csrf}">
```
---



### E-Mail sending
```javascript
const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
service:'gmail',
auth:{
	user:'testing.gajjar1998@gmail.com',
	pass:'Mnbvcxz@123'
}
});
let mailOptions={
	from:'testing.gajjar1998@gmail.com',
	to:email,
	subject: `Hello user you signup`,
	html:`your html code`,
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
```

