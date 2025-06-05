require("dotenv").config()
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const connectDB = require("./configurations/db");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
    cors({
        origin: `http://localhost:5174`, 
        credentials: true, 
    })
);

app.use(express.json());
app.use(cookieParser());
app.use(
    fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 }, 
    })
);


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
    res.send("API is running");
});
app.use(express.json({ limit: "50mb" })); 
app.use(express.urlencoded({ limit: "50mb", extended: true })); 

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.get("/api/protected-route", (req, res) => {
    res.status(200).json({ message: "Protected route accessed successfully!" });
});

connectDB().then(() => {
    app.listen(4000, () => {
        console.log("Server is listening on port 4000 ");
    });
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
});