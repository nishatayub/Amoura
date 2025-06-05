const express = require("express");
const { signUp, getUserByEmail, addAddress } = require("../controllers/userController");
const login = require("../controllers/loginController");
const User = require("../models/userModel");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware.js");

const { loginUser, registerUser } = require("../controllers/userController");

router.post("/login", login); 
router.post("/signup", signUp);
router.get("/:email", authMiddleware, getUserByEmail);
router.post("/add-address", authMiddleware,  addAddress);

router.get("/:email/addresses", authMiddleware,  async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.addresses);
    } catch (error) {
        console.error("Error fetching addresses:", error);
        res.status(500).json({ message: "An error occurred while fetching addresses.", error: error.message });
    }
});

router.get("/api/protected-route", authMiddleware, (req, res) => {
    res.status(200).json({ message: "Protected route accessed!", user: req.user });
});

module.exports = router;