const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSellerProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  upload
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProduct);

// Protected routes (require authentication)
router.post("/", authMiddleware, upload.array("images", 5), createProduct);
router.get("/seller/my-products", authMiddleware, getSellerProducts);
router.put("/:id", authMiddleware, upload.array("images", 5), updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
