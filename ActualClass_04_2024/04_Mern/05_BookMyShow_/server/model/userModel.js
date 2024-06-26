const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user", "partner"],
        required: true,
        default: "user"
    },
});
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;