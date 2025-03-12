const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts, getProductsByEmail, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/", authMiddleware,  addProduct);
router.get("/", getAllProducts);
router.get("/user/:email", authMiddleware,  getProductsByEmail);
router.get("/:id", getProductById); // Add route for fetching a single product by ID
router.put("/:id", authMiddleware,  updateProduct); // Add route for updating product
router.delete("/:id", authMiddleware,  deleteProduct); // Add route for deleting product

module.exports = router;

