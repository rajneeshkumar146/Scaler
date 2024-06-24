const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: Date,
    updataedAt: Date
});

// Hooks

userSchema.pre('save', function (next) {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

userSchema.post('save', function(doc,next){
    console.log(`User ${doc.name} has been saved`);
    next();
});


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;