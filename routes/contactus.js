const express = require('express');
const router  = express.Router();
const Contact = require("../models/Contact");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('contactus');
});
router.post("/", (req,res,next)=>{
  const name = req.body.name,
        email = req.body.email,
        phone = req.body.phone,
        message = req.body.message;
  if(name === "" || email === "" || phone === "" || message === ""){
      res.render("/contactus", {message: "Indicate name, email phone and your message"});
      return;
  }

     const newContact = new Contact({
        name,
        email,
        phone,
        message
     });
console.log(newContact)
     newContact.save()
      .then(()=>res.redirect('/'),
      console.log("done"))
     .catch(err => console.log(err))

});

//thanks for your comments. You will hear from us pretty soon.

module.exports = router;