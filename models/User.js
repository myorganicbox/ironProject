const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {type: String },
    address: {type: String},
    email: {type: String },
    password: {type: String},
    cart:{},
    
    facebookID: {type: String}
},
  {  timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
});



module.exports = mongoose.model("User",userSchema);