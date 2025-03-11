const Order = require("../models/orderModel");
const User = require("../models/userModel");

const placeOrder = async (req, res) => {
    try {
        const { email, cartProducts, selectedAddress, totalAmount } = req.body;

        console.log("Placing order for email:", email);

        const user = await User.findOne({ email });

        if (!user) {
            console.error("User not found for email:", email);
            return res.status(404).json({ message: "User not found" });
        }

        const orders = await Promise.all(cartProducts.map(async (product) => {
            const newOrder = new Order({
                user: user._id,
                address: selectedAddress,
                items: [{
                    product: product.product._id,
                    quantity: product.quantity
                }],
                totalAmount: product.product.price * product.quantity,
                status: "Pending"
            });

            await newOrder.save();
            return newOrder;
        }));

        res.status(201).json({ message: "Order placed successfully", orders });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "An error occurred while placing the order.", error: error.message });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const { email } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const orders = await Order.find({ user: user._id }).populate("items.product");

        res.status(200).json({ message: "User orders fetched successfully", orders });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ message: "An error occurred while fetching user orders.", error: error.message });
    }
};

const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.body;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.status = "Canceled";
        await order.save();

        res.status(200).json({ message: "Order canceled successfully", order });
    } catch (error) {
        console.error("Error canceling order:", error);
        res.status(500).json({ message: "An error occurred while canceling the order.", error: error.message });
    }
};

module.exports = { placeOrder, getUserOrders, cancelOrder };
