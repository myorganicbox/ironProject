var express = require('express');
var router = express.Router();
const Basket = require('../models/Basket');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Basket.find()
  .then(docs=>{
    res.render('viewname', {baskets:docs});
  })
});

module.exports = router;