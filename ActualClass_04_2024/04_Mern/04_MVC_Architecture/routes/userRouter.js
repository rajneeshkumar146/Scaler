const express = require("express");
const { getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUserById);
userRouter.delete("/:id", deleteUserById);

module.exports = userRouter;