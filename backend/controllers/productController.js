const Product = require("../models/productModel");
const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Create product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const email = req.user.email; // Get seller's email from auth middleware

    // Get uploaded file paths
    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    if (images.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product image is required"
      });
    }

    const product = new Product({
      name,
      description,
      price: parseFloat(price),
      category,
      images,
      email,
      seller: req.user.id
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product
    });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: error.message
    });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products
    });
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving products",
      error: error.message
    });
  }
};

// Get products by seller
const getSellerProducts = async (req, res) => {
  try {
    const email = req.user.email;
    const products = await Product.find({ email }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      message: "Seller products retrieved successfully",
      data: products
    });
  } catch (error) {
    console.error("Get seller products error:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving seller products",
      error: error.message
    });
  }
};

// Get single product
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: product
    });
  } catch (error) {
    console.error("Get product error:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving product",
      error: error.message
    });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    const email = req.user.email;

    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    // Check if user owns this product
    if (product.email !== email) {
      return res.status(403).json({
        success: false,
        message: "You can only update your own products"
      });
    }

    // Update fields
    const updateData = { name, description, price: parseFloat(price), category };
    
    // If new images are uploaded, add them
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => `/uploads/${file.filename}`);
      updateData.images = newImages;
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
    
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct
    });
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error.message
    });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const email = req.user.email;

    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    // Check if user owns this product
    if (product.email !== email) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own products"
      });
    }

    await Product.findByIdAndDelete(id);
    
    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error.message
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSellerProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  upload
};
