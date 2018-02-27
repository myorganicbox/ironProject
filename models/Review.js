const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    mealDestination: {type: Schema.Types.ObjectId, ref: 'Meal', required: true},
    description: String,
    rate: String // have to calculate an avergae..
});



module.exports = mongoose.model("Review",reviewSchema);