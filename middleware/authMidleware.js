const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({ msg: "Invalid authorization!" });
    }

    const token = authHeader.split(" ")[1];
    // console.log( authHeader);
    // console.log( token);

    try {
        const { username, userid } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { username, userid };
        next();
    } catch (error) {
        console.error("JWT verification error:", error.message);
        return res.status(400).json({ msg: "Invalid token!" });
    }
}

module.exports = authMiddleware;
