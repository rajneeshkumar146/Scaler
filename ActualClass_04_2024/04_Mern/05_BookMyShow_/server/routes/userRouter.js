const express = require("express");
const {
    register,
    login,
    getCurrentUser
} = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddlewares");

const userRouter = express.Router();

// Register a user.
userRouter.post("/register", register);

// Login for a user.
userRouter.post("/login", login);

// Current user.
userRouter.get("/get-current-user",auth, getCurrentUser)

module.exports = userRouter;
