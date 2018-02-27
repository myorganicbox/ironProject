const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TYPES = require('./Basket-types');


const basketSchema = new Schema({
category: {type: String, enum: TYPES},
quantity: {type: Number}, // in Mongoose : agregar un MIN y un MAX
price: {type:Number},
name: {type : String},
image: {type: String,  default:"http://"}

});



module.exports = mongoose.model("Basket", basketSchema);