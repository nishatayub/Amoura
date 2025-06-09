const express = require("express");
const { Signup, Login } = require("../controllers/userController");

const router = express.Router();

// POST /api/users/signup
router.post("/signup", Signup);

// POST /api/users/login
router.post("/login", Login);

module.exports = router;
