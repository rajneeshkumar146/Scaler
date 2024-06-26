const userModel = require("../model/userModel");

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
            message: "Login successful"
        });
    } catch (err) {
        console.log("Error occured: ", err);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}

module.exports = {
    register,
    login,
}