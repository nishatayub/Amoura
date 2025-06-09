const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["Roses", "Lilies", "Tulips", "Sunflowers", "Orchids", "Carnations", "Mixed", "Tropical", "Seasonal", "Premium"]
    },
    images: {
        type: [String],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    stock: {
        type: Number,
        default: 1,
        min: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);
