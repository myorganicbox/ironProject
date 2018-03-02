const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    _owner: {type: Schema.Types.ObjectId, ref: 'User' },
    // content: {type: Schema.Types.ObjectId, ref: 'Basket'},
    box: {type: String},
    quantity: {type: String},
    price: {type: String},
    meal:[]
    // deliveryDate: Date
},
{  timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
});



module.exports = mongoose.model("Order",orderSchema);