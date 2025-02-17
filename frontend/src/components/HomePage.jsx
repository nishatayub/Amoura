import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Smartphone", image: "/images/phone.jpg", price: 14999 },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: 59999 },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: 2999 },
  { id: 4, name: "", image: "", price: undefined }, // Example of an invalid product
];

const Homepage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) =>
          product.name && product.image && product.price !== undefined ? (
            <ProductCard key={product.id} {...product} />
          ) : (
            <div
              key={product.id}
              className="bg-red-100 text-red-500 p-4 rounded-lg text-center"
            >
              Invalid Product Data
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Homepage;
