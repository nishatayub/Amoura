import { useState } from 'react';

const ProductForm = ({ email }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        images: [],
        email: email 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: [...e.target.files]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('email', formData.email); 
        formData.images.forEach((image, index) => {
            data.append('images', image);
        });

        console.log("Form data:", formData);

        try {
            const response = await fetch("http://localhost:4000/api/products", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                alert("Product added successfully!");
                // Reset form
                setFormData({
                    name: '',
                    description: '',
                    price: '',
                    images: [],
                    email: email // Reset email field
                });
            } else {
                const errorData = await response.json();
                console.error("Error response:", errorData);
                alert(errorData.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
            alert("An error occurred while adding the product.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-100 p-10">
            <div className="w-full max-w-lg p-10 bg-yellow-100 rounded-lg shadow-2xl">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Add New Product</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="description"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <div className="mb-8">
                        <label
                            htmlFor="images"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Product Images
                        </label>
                        <input
                            type="file"
                            id="images"
                            name="images"
                            multiple
                            onChange={handleImageChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-lg text-black bg-blue-200 rounded-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
