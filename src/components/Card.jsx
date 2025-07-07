import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const Card = ({ image, title, location = "" }) => {
  const [city = "", country = ""] = location.split(",");

  return (
    <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 px-2 py-2 relative">
      {/* Image with heart icon */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl"
        />
        {/* Heart Icon */}
        <div className="absolute top-2 right-2 bg-transparent rounded-full p-2 shadow-md cursor-pointer hover:bg-pink-100 transition border-[1px]">
          <FaHeart className="text-pink-500 text-sm" />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Destination Text */}
        <div>
          <p className="font-inter text-lg font-semibold text-gray-800">
            {title}
          </p>
          <p className="font-inter text-sm text-gray-500">
            {city},
            <span className="font-bold text-black"> {country}</span>
          </p>
        </div>

        {/* Arrow Icon */}
        <FaArrowRight className="text-gray-500 hover:text-black text-md cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
