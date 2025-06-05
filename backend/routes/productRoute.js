const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts, getProductsByUserEmail, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/", authMiddleware,  addProduct);
router.get("/", getAllProducts);
router.get("/user/:email", authMiddleware,  getProductsByUserEmail);
router.get("/:id", getProductById); 
router.put("/:id", authMiddleware,  updateProduct); 
router.delete("/:id", authMiddleware,  deleteProduct); 
module.exports = router;

