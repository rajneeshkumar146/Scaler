const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    try {
        console.log("req hedader: ", req.headers.authorization);

        const token = req.headers.authorization.split(" ")[1];
        console.log("token: ", token);

        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified Token: ", verifiedToken);

        req.body.userId = verifiedToken.userId;

        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Token is Invalid!" })
    }
}

module.exports = auth;