const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }, phone: {
        type: Number,
        required: true,
    }, email: {
        type: String,
        required: true,
    }, owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: "users",
    }, isActive: {
        type: Boolean,
        required: false,
    }
}, {
    timestamps: true
});

const Theatre = mongoose.model("theatre", theatreSchema);
module.exports = Theatre;