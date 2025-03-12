const express = require("express");
const { addToCart, getCartProducts, updateQuantity } = require("../controllers/cartController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/add", authMiddleware, addToCart);
router.get("/:userId", authMiddleware, getCartProducts);
router.post("/update-quantity", authMiddleware, updateQuantity);

module.exports = router;
