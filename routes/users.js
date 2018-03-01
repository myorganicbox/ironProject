var express = require('express');
var router = express.Router();
const Basket = require('../models/Basket');
const User= require("../models/User");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

/* GET baskets listing. */
router.get('/', function(req, res, next) {
  Basket.find()
  User.find()
  .then(docs=>{
    res.render('profile/edit-my-profile', {
      baskets:docs, 
      user: req.user});

  })
});
module.exports = router;


router.get("/", (req, res) => {
  res.render("profile/edit-my-profile", {
    user: req.user
  });
});

router.post("/edit", ensureLoggedIn('/login'), (req,res)=>{
  console.log("entrando")
  User.findOneAndUpdate({_id:req.user._id}, {
    username:req.body.newusername,
    email:req.body.newemail,
    address:req.body.newaddress
  })
  .then(result=>{
    res.redirect("/user");
  })
  .catch(err=>res.send("error"+err));
});

// router.post('/profile/edit-my-profile', (req, res, next) => {
//   if (req.user){
// const   username = req.body.username,
//         email = req.body.email,
//         address = req.body.address,
//         newpassword = req.body.password
       

//         user.save((err) => {
//             if (err) {
//                 next()
//             } else {
//                 res.render("/profile/edit-my-profile",{
//                   User.findOne({})
//                   history:
//                   user:
//                 })
                
//             }
//         });
//       } else {

//       res.render('/profile/edit-my-profile');
//       }
 
// })

// router.get('/:id/edit-my-profile', (req, res, next) => {
//   User.findById(req.params.id, (err, user) => {
//     if (err)       { return next(err) }
//     if (!user) { return next(new Error("404")) }
//     return res.render('profile/edit-my-profile', {
//       user: req.user, })
//   });
// });



// router.get("/", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("/:id/profile/edit-my-profile", { 
//     user:req.user });
// });




// router.post('/:id/edit-my-profile', (req, res, next) => {
//   const updates = {
//     username: req.body.newusername,
//     email: req.body.newemail,
//     address: req.body.newaddress,
//     password: req.body.newpassword
//   };
//   User.findByIdAndUpdate(req.params.id, updates, (err, updt) => {
//     if (err) {
//       return res.render('/profile/edit-my-profile', {
//         updates,
//         errors: updates.errors
//       });
//     }
//     if (!updates) {
//       return next(new Error('404'));
//     }
//     return res.redirect(`/profile/{user._id}/edit-my-profile/$`);
//   });
// });






module.exports = router;

