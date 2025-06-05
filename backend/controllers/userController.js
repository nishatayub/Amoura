const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ data: newUser, msg: "User created successfully" });
        console.log(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email }).populate("cart");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "An error occurred while fetching user data.", error: error.message });
    }
};

const addAddress = async (req, res) => {
    try {
        const { email, address } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.addresses.push(address);
        await user.save();

        res.status(200).json({ message: "Address added successfully", addresses: user.addresses });
    } catch (error) {
        console.error("Error adding address:", error);
        res.status(500).json({ message: "An error occurred while adding the address.", error: error.message });
    }
};

const getUserDashboard = (req, res) => {
    res.json({ message: "Welcome to your Dashboard!", user: req.user });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token }); 
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "An error occurred while logging in.", error: error.message });
    }
};

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "An error occurred while registering the user.", error: error.message });
    }
};

module.exports = { signUp, getUserByEmail, addAddress, getUserDashboard, loginUser, registerUser };