const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nishatayub702:nishat702@cluster0.qr0na.mongodb.net/ecom")
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB", error.message)
        process.exit(1)
    }
}

module.exports = connectDB