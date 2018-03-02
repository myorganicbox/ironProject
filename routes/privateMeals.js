const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login");
const Meal= require("../models/Meal");



// Private Meal Page access
router.get("/", ensureLogin.ensureLoggedIn(), (req, res) => { 
  Meal.find({}, (err, meals)=>{
  res.render("privateMeals", { 
    user: req.user, 
    meals,
    andrea:req.query
  });
})
  });

router.post("/", (req, res)=>{
  User.find({}, (err, order)=>{
    
  })
})




/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;