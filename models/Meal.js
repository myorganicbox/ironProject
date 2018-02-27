const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mealSchema = new Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String}
});



module.exports = mongoose.model("Meal",mealSchema);