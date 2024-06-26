const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{},
    email:{},
    password:{},
    role:{},
});
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;