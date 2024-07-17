const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

        // Has the password.
        const saltRound = 10; // Heigh the number, more secure the passsword but it take more time to hash it.
        const hashedPassword = await bcrypt.hash(req.body.password, saltRound);
        console.log("hashedPassword: ", hashedPassword);

        const newUser = new userModel({
            ...req.body,
            password: hashedPassword,
        });
        await newUser.save();

        res.send({
            success: true,
            message: "User registered successfully, Please proceed with Login!",
        });
    } catch (err) {
        console.log("Error occured: ", err);
    }
}

async function hashPassword(password){
    console.time("time taken");
    const salt = await bcrypt.genSalt(10);
    console.log("salt", salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("hashedPassword: ", hashedPassword);
    console.timeEnd("time taken");
    console.log("*******************");
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

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.send({
                success: false,
                message: "Sorry, Invalid Password!, Try again.",
            })
        }

        // hashPassword(req.body.password);

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
    const user = await userModel.findById(req.body.userId).select("-password");
    // const user="r";
    console.log("found user", user);
    res.send({
        success: true,
        data: user,
        message: "You are authorized to go the protected route",
    });
};

module.exports = {
    register,
    login,
    getCurrentUser,
};