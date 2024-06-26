const express = require("express");
const {
    register,
    login
} = require("../controllers/userControllers");

const userRouter = express.Router();

// Register a user.
userRouter.post("/register", register);

// Login for a user.
userRouter.post("/login", login);

module.exports = userRouter;
