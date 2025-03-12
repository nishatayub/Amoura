const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token; // Extract token from cookies

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user data to req.user
        next(); // Move to the next middleware/route handler
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
