const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login");



// Private Meal Page access
router.get("/", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("privateMeals", { user: req.user });
  });




/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;