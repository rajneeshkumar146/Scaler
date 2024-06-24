const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: Date,
    updataedAt: Date
});




const userModel = mongoose.model('user', userSchema);

module.exports = userModel;