const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,  // Ensures no leading/trailing spaces
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price must be a positive number'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Product image URL is required'],
    match: [/\.(jpg|jpeg|png|gif)$/, 'Please provide a valid image URL'],
  },
});

// Create a model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
