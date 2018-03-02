const express = require('express');
const router  = express.Router();
const Contact = require("../models/Contact");
const Order = require('../models/Order');
const User = require('../models/User')

/* GET home page. */
router.get('/', (req, res, next) => {
    //res.send(req.query)
    var order = new Order({
        box : req.query.box,
    quantity : req.query.quantity,
    price : req.query.price
    });
    order.save();
    User.findOneAndUpdate({_id:req.user._id},
    {
        $push:{orders:order}
    })
    
    .then(response=>{
        var checkOrder = {
            box : req.query.box,
    quantity : req.query.quantity,
    price : req.query.price
        }
        res.render('checkout',{message:null, checkOrder});
    })
    .catch();
  //
});





// router.post("/", (req,res,next)=>{
//   const name = req.body.name,
//         email = req.body.email,
//         phone = req.body.phone,
//         message = req.body.message;
//   if(name === "" || email === "" || phone === "" || message === ""){
//       res.render("/contactus", {message: "Indicate name, email phone and your message"});
//       return;
//   }

//      const newContact = new Contact({
//         name,
//         email,
//         phone,
//         message
//      });
// console.log(newContact)
//      newContact.save()
//       .then(()=>res.render('contactus', {message:"Hecho "}),
//       console.log("done"))
//      .catch(err => console.log(err))

// });

// //thanks for your comments. You will hear from us pretty soon.

module.exports = router;