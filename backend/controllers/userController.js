const User = require("../models/userModel.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Signup = async(req, res) => {
    try {
        const { 
            // Common fields
            email, 
            password, 
            confirmPassword,
            role, 
            // Customer fields  
            firstName,
            lastName,
            phone,
            // Seller fields
            businessName,
            businessAddress,
            website,
            description,
        } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

        // Validate password strength
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            });
        }

        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        let userData = {
            email,
            password: hashedPassword,
            role: role || 'customer' 
        };

        // Handle different form structures
        if (firstName && lastName) {
            // Hero.jsx form structure
            userData.first_name = firstName;
            userData.last_name = lastName;
        } else {
            return res.status(400).json({
                success: false,
                message: "First name and last name are required"
            });
        }

        // Add role-specific fields
        if (role === 'seller' || businessName) {
            userData.role = 'seller';
            // Store seller-specific data in a seller profile object
            userData.sellerProfile = {
                businessName: businessName || `${userData.first_name}'s Business`,
                businessAddress: businessAddress || '',
                website: website || '',
                description: description || ''
            };
        }

        // Add customer-specific fields
        if (phone) {
            userData.phone = phone;
        }

        // Create new user
        const newUser = new User(userData);
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: newUser._id, 
                email: newUser.email, 
                role: newUser.role 
            },
            process.env.JWT_SECRET || 'fallback_secret_key',
            { expiresIn: '7d' }
        );

        // Remove password from response
        const userResponse = newUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                user: userResponse,
                token
            }
        });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}

const Login = async(req, res) => {
    try {
        const { email, password, rememberMe } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Generate JWT token
        const tokenExpiry = rememberMe ? '30d' : '7d';
        const token = jwt.sign(
            { 
                userId: user._id, 
                email: user.email, 
                role: user.role 
            },
            process.env.JWT_SECRET || 'fallback_secret_key',
            { expiresIn: tokenExpiry }
        );

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                user: userResponse,
                token
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}

module.exports = {
    Signup,
    Login
}