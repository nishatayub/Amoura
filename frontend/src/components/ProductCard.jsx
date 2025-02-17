import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ name, image, price }) => {
  if (!name || !image || price === undefined) {
    return <div className="text-red-500">Invalid Product Data</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-700 mt-1">₹{price}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

// ✅ PropTypes for validation
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// ✅ Default Props to prevent missing data issues
ProductCard.defaultProps = {
  name: "Unnamed Product",
  image: "https://via.placeholder.com/150",
  price: 0,
};

export default ProductCard;
