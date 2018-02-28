const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login");
const Meal= require("../models/Meal");



// Private Meal Page access
router.get("/", ensureLogin.ensureLoggedIn(), (req, res) => { Meal.find({}, (err, meals)=>{
  res.render("privateMeals", { user: req.user, meals });
})
  });




/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;