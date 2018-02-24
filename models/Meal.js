const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mealSchema = new Schema({
    name: {type: String, required: true },
    Description: {type: String, required: true},
    image: {type: String}
});



module.exports = mongoose.model("Meal",mealSchema);