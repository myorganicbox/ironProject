var express = require('express');
var router = express.Router();
const Basket = require('../models/Basket');
const User= require("../models/User");
const ensureLogin = require("connect-ensure-login");

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





router.get('/:id/edit-my-profile', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err)       { return next(err) }
    if (!user) { return next(new Error("404")) }
    return res.render('profile/edit-my-profile', {
      user: req.user, })
  });
});



router.get("/", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("/:id/profile/edit-my-profile", { 
    user:req.user });
});




// router.post('/:id/edit', ensureLoggedIn('/login'), authorizeCampaign, (req, res, next) => {
//   const updates = {
//     title: req.body.title,
//     goal: req.body.goal,
//     description: req.body.description,
//     category: req.body.category,
//     deadline: req.body.deadline
//   };
//   Campaign.findByIdAndUpdate(req.params.id, updates, (err, campaign) => {
//     if (err) {
//       return res.render('campaigns/edit', {
//         campaign,
//         errors: campaign.errors
//       });
//     }
//     if (!campaign) {
//       return next(new Error('404'));
//     }
//     return res.redirect(`/campaigns/${campaign._id}`);
//   });
// });






module.exports = router;

