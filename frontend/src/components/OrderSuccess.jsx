import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Order Successful</h1>
            <p className="text-lg mb-6">Thank you for your order! Your order has been placed successfully.</p>
            <Link to="/home">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export default OrderSuccess;
