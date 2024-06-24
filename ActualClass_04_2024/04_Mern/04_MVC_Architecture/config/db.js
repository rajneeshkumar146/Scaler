const mongoose = require("mongoose");

const dbURL = "mongodb+srv://rajneeshkumar146:SAfmmRVnZLAIMmUk@cluster0.twfteet.mongodb.net/";

// connect to DB.

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error: ", err);
    }

}

module.exports = connectDb;