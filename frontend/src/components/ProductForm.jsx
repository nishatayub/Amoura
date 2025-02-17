import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: files });

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      alert("Please enter a valid product name and price.");
      return;
    }

    // Check before calling onAddProduct to avoid errors
    onAddProduct ? onAddProduct(product) : console.warn("onAddProduct function is missing.");

    setProduct({ name: "", price: "", description: "", images: [] });
    setImagePreviews([]);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add a New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="w-full p-2 border rounded"
          accept="image/*"
        />

        <div className="flex space-x-2 bg-amber-600">
          {imagePreviews.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index}`}
              className="w-16 h-16 object-cover rounded"
            />
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

// Default prop to prevent errors if onAddProduct is missing
ProductForm.defaultProps = {
  onAddProduct: () => console.warn("onAddProduct function is missing."),
};

export default ProductForm;
