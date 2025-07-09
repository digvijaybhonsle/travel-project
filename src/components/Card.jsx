import React, { useState } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"

const Card = ({ image, title, location = "" }) => {
  const [city = "", country = ""] = (location || "").split(",");
  const [liked, setLiked] = useState(false);

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
        <div
          onClick={() => setLiked(!liked)}
          className={`absolute top-2 right-2 rounded-full p-2 border-[1.5px] transition cursor-pointer`}
        >
          <FaHeart className={`text-sm ${liked ? "text-pink-500" : "text-white"}`} />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <p className="font-inter text-lg font-semibold text-gray-800">
            {title}
          </p>
          <p className="font-inter text-sm text-gray-500">
            {city}, <span className="font-bold text-black">{country}</span>
          </p>
        </div>

        {/* Arrow Icon */}
        <Link to="/detail"><FaArrowRight className="text-gray-500 hover:text-black text-md cursor-pointer" /></Link>
      </div>
    </div>
  );
};

export default Card;
