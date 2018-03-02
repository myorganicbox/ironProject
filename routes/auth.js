const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);  // const bcryptSalt = 10 diferencia ??

//passport
const passport = require("passport");

//ensureLogin
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');


//facebook login
router.get("/auth/facebook", passport.authenticate("facebook", {scope: 'email'}));
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login"
}));
//facebook login

//google login
router.get("/auth/google", passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login",
            "https://www.googleapis.com/auth/plus.profile.emails.read"]
  }));
  
  router.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/"
  }));

  //google login

// Para el Login
router.get("/login", (req, res, next) => {
    res.render("authentification/login",{"message": req.flash("authentification error")} );
  });
  
router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,   
    passReqToCallback: true,
    successRedirect: "/", 
  }));


  // Logout
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

// Para el Signup
router.get("/signup", (req,res, next)=>{
    res.render("authentification/signup");
})

.post("/signup", (req,res,next)=>{
    const username = req.body.username,
          email = req.body.email,
          address = req.body.address,
          password = req.body.password;
    if(username === "" || password === "" || email === "" || address === ""){
        res.render("authentification/signup", {message: "Indicate username, password, email and your address"});
        return;
    }
if(password != req.body.password2){
    res.render("authentification/signup", {message: "Your passwords don't match"});
    return;
}
    User.findOne({username}, "username", (err, user)=>{
       if (user !== null){
           res.render("authentification/signup", {message:"The username already exists"});
           return;
       }

       const hashPass = bcrypt.hashSync(password, salt);

       const newUser = new User({
          username,
          email,
          address,
          password:hashPass
       });
console.log(newUser)
       newUser.save()
        .then(()=>res.redirect('/'))
       .catch(err => console.log(err))
    });
});





  // Cart Access
router.get("/my-cart", ensureLoggedIn(), (req, res) => {
    res.render("cart", { user: req.user });
  });

module.exports = router;