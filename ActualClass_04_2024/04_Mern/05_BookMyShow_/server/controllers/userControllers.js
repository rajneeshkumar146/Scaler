const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "role":"admin"
 */
const register = async (req, res) => {
    try {
        const userExists = await userModel.findOne({ email: req.body.email });
        if (userExists) {
            return res.send({
                success: false,
                message: "User already exists",
            })
        }

        const newUser = new userModel(req.body);
        await newUser.save();

        res.send({
            success: true,
            message: "User registered successfully, Please proceed with Login!",
        });
    } catch (err) {
        console.log("Error occured: ", err);
    }
}

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        if (!user) {
            return res.send({
                success: false,
                message: "User not found, Please register yourself",
            })
        }

        if (req.body.password !== user.password) {
            return res.send({
                success: false,
                message: "Sorry, Invalid Password!, Try again.",
            })
        }

        res.send({
            success: true,
            message: "Login successful",
            data: token,
        });
    } catch (err) {
        console.log("Error occured: ", err);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}

const getCurrentUser = async (req, res) => {
    console.log("userId: ", req.body.userId);
    const user = await userModel.findById(req.body.userId).select("-password");

    // let user = "r";
    console.log("User Found: ", user);

    res.send({
        success: true,
        data: user,
        message: "You are authorized to go the protected route",
    });
}

module.exports = {
    register,
    login,
    getCurrentUser
}