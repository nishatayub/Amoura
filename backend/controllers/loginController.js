require("dotenv").config();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})
        if (!user) {
            console.log("User not found")
            return res.status(400).json({message: "User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            console.log("Invalid credentials")
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // Token expires in 1 hour
        );
        res.cookie("token", token, {
            httpOnly: true,   // Prevents client-side access
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
            sameSite: "Strict",
            maxAge: 60 * 60 * 1000 // Expires in 1 hour
        });

        res.status(200).json({ message: "User logged in successfully", token });

        console.log(user)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

module.exports = login