const express = require("express");
const {
  register,
  login,
  getCurrentUser
} = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");

const User = require("../model/userModel");
const EmailHelper = require("../utils/emailHelper");

const userRouter = express.Router();

// Register a user.
userRouter.post("/register", register);

// Login for a user.
userRouter.post("/login", login);

// Current User.
userRouter.get("/get-current-user", auth, getCurrentUser);

//Function for otp generation
const otpGenerator = function () {
  return Math.floor(100000 + Math.random() * 900000);
};
/**
/**
* Math.random(): Generates a random floating-point number between 0 (inclusive) and 1
(exclusive).
Math.random() * 900000: Scales the random number to a range between 0 and 899999.
100000 + Math.random() * 900000: Shifts the range to be between 100000 and 999999.
Math.floor(): Rounds down to the nearest whole number.
*/
userRouter.patch("/forgetpassword", async function (req, res) {
  try {
    /****
    * 1. You can ask for email
    * 2. check if email is present or not
    * * if email is not present -> send a response to the user(user not found)
    * 3. if email is present -> create basic otp -> and send to the email
    * 4. also store that otp -> in the userModel
    *
    * ***/
    if (req.body.email == undefined) {
      return res.status(401).json({
        status: "failure",
        message: "Please enter the email for forget Password",
      });
    }
    // find the user -> going db -> getting it for the server
    let user = await User.findOne({ email: req.body.email });
    if (user == null) {
      return res.status(404).json({
        status: "failure",
        message: "user not found for this email",
      });
    }
    // got the user -> on your server
    const otp = otpGenerator();
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;
    // those updates will be send to the db
    await user.save();
    await EmailHelper("otp.html", user.email, {
      name: user.name,
      otp: otp,
    });
    res.status(200).json({
      status: "success",
      message: "otp sent to your email",
    });
    // send the mail to there email -> otp
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
  // email
});


userRouter.patch("/resetpassword/:email", async function (req, res) {
  // -> otp
  // newPassword and newConfirmPassword
  // -> params -> id
  try {
    let resetDetails = req.body;
    // required fields are there or not
    if (!resetDetails.password || !resetDetails.otp) {
      return res.status(401).json({
        status: "failure",
        message: "invalid request",
      });
    }
    // it will serach with the id -> user
    const user = await User.findOne({ email: req.params.email });
    // if user is not present
    if (user == null) {
      return res.status(404)
      return res.status(404).json({
        status: "failure",
        message: "user not found",
      });
    }
    // if otp is expired
    if (Date.now() > user.otpExpiry) {
      return res.status(401).json({
        status: "failure",
        message: "otp expired",
      });
    }
    user.password = req.body.password;
    // remove the otp from the user
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();
    res.status(200).json({
      status: "success",
      message: "password reset successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
});

module.exports = userRouter;

