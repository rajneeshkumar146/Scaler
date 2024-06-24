const userModel = require("../models/userModel")

const createUser = async function (req, res) {
    const { name, email } = req.body;

    try {
        const user = await userModel.create({
            name,
            email
        });
        return res.status(201).json({ user });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        console.log("All users", users);
        res.status(201).json(users);
    } catch (err) {
        res.status(400).send(err);
    }
}

getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id);
    res.status(200).json(user);
};

updateUserById = async (req, res) => {
    await userModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "User updated successfully" });
}

deleteUserById = async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: "User Deleted successfully" });
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}