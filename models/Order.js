const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: {type: Schema.Types.ObjectId, ref: 'Basket',required: true},
    deliveryDate: Date
});



module.exports = mongoose.model("Order",orderSchema);