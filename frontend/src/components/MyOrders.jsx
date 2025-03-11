import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyOrders = () => {
    const { email } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/api/orders/user-orders/${email}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "User orders fetched successfully") {
                    setOrders(data.orders);
                } else {
                    console.error("Error fetching user orders:", data.message);
                }
            })
            .catch((error) => console.error("Error fetching user orders:", error));
    }, [email]);

    const handleCancelOrder = (orderId) => {
        fetch("http://localhost:4000/api/orders/cancel-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ orderId })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "Order canceled successfully") {
                    setOrders((prevOrders) =>
                        prevOrders.map((order) =>
                            order._id === orderId ? { ...order, status: "Canceled" } : order
                        )
                    );
                } else {
                    console.error("Error canceling order:", data.message);
                }
            })
            .catch((error) => console.error("Error canceling order:", error));
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">My Orders</h1>
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order, index) => (
                        <li key={index} className="mb-4 p-4 border rounded-lg">
                            <p><strong>Order ID:</strong> {order._id}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                            <p><strong>Items:</strong></p>
                            <ul>
                                {order.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <p><strong>Product:</strong> {item.product.name}</p>
                                        <p><strong>Quantity:</strong> {item.quantity}</p>
                                    </li>
                                ))}
                            </ul>
                            {order.status !== "Canceled" && (
                                <button
                                    onClick={() => handleCancelOrder(order._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200 mt-4"
                                >
                                    Cancel Order
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default MyOrders;
