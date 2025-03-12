const express = require("express");
const { placeOrder, getUserOrders, cancelOrder } = require("../controllers/orderController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/place-order", authMiddleware,  placeOrder);
router.get("/user-orders/:email", authMiddleware,  getUserOrders); // Add endpoint to get user orders
router.post("/cancel-order", authMiddleware, cancelOrder); // Add endpoint to cancel order

module.exports = router;
