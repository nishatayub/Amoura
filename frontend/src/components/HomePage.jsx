import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";

const Homepage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Smartphone", image: "/images/phone.jpg", price: 14999 },
    { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: 59999 },
  ]);

  // Function to add new product
  const addProduct = (newProduct) => {
    const newId = products.length + 1;

    // Take the first image (or use placeholder)
    const productImage =
      newProduct.images.length > 0
        ? URL.createObjectURL(newProduct.images[0])
        : "https://via.placeholder.com/150";

    const productData = {
      id: newId,
      name: newProduct.name,
      price: newProduct.price,
      image: productImage,
    };

    setProducts([...products, productData]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      {/* Product Form */}
      <ProductForm onAddProduct={addProduct} />

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
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
