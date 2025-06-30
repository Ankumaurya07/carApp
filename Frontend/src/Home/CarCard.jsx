import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CarCard = ({ car }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  const handleAddToCart = () => {
    alert(`Added ${car.name} to cart!`);
  };

  return (
    <div className="group relative border rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 bg-white hover:scale-[1.03]">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      {/* Like Icon */}
      <button
        onClick={toggleLike}
        className="absolute top-4 cursor-pointer right-4 text-red-500 text-xl hover:scale-110 transition-transform"
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>

      <h3 className="text-xl font-bold mb-1">{car.name}</h3>
      <p className="text-gray-600 text-sm">Brand: {car.brand}</p>
      <p className="text-gray-600 text-sm">Model: {car.model}</p>
      <p className="text-gray-600 text-sm">Engine: {car.cc_engine} cc</p>
      <p className="text-green-600 font-semibold text-lg mt-1">₹{car.price.toLocaleString()}</p>

      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md cursor-pointer hover:bg-indigo-700 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CarCard;
