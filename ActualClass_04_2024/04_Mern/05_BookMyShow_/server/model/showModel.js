const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }, time: {
        type: String,
        required: true,
    }, movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movies",
        required: true,
    }, ticketPrice: {
        type: Number,
        required: true,
    }, TotalSeats: {
        type: Number,
        required: true,
    }, bookedSeats: {
        type: Array,
        default: []
    },
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "theatre",
        required: true
    }
}, {
    timestamps: true
});

const Shows = mongoose.model("shows", showSchema);
module.exports = Shows;