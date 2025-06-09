const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["seller", "customer"],
        default: "customer"
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    },
    addresses: {
        type: [Object],
        default: []
    },
    // Seller-specific fields
    sellerProfile: {
        businessName: {
            type: String,
            required: function() { return this.role === 'seller'; }
        },
        businessAddress: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        rating: {
            type: Number,
            default: 0
        },
        totalSales: {
            type: Number,
            default: 0
        }
    }
}, {
    timestamps: true // This adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model("User", userSchema);