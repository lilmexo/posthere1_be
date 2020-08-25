const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    const secret = process.env.JWT_SECRET || "Your secret is safe with me";

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ you: "Token not verified" })
            } else {
                req.jwt = decodedToken;
                next()
            }
        })
    } else {
        res.status(401).json({ you: "shall not pass!" })
    }
};