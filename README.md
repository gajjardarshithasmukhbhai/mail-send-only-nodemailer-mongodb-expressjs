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
### CSRF Token
```javascript
var csrf=require('csurf');
var csrfprotection=csrf();
app.get("/cart",csrfprotection,cart.cart_controller);
app.post("/Cart",csrfprotection,cart.carts_controller);
```
**when you request post method so that time CSRF invalid Error is occur so solve this thing
```html
<input type="hidden" name="_csrf" value="#{csrf}">
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

