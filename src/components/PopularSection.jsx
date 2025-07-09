import { useState } from "react";
import Card from "../components/Card";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";

const PopularSection = () => {
  const items = ["Adventure", "Culture", "Wildlife", "Mountains", "Luxury"];
  const [activeCategory, setActiveCategory] = useState("Adventure");

  const destinations = [
    { image: card1, title: "Kedarnath", location: "Uttarakhand, India" },
    { image: card2, title: "Manali", location: "Himachal, India" },
    { image: card3, title: "Srinagar", location: "Kashmir, India" },
    { image: card4, title: "Gangtok", location: "Sikkim, India" },
    { image: card1, title: "Badrinath", location: "Uttarakhand, India" },
    { image: card2, title: "Shimla", location: "Himachal, India" },
  ];

  return (
    <div
      id="popular-tours"
      className="pt-20 sm:pt-24 px-4 sm:px-6 lg:px-10 text-start max-w-7xl mx-auto pb-10"
    >
      {/* Section Heading */}
      <p className="font-inter font-semibold text-[32px] sm:text-[40px] leading-tight text-black">
        POPULAR Destinations
      </p>
      <p className="font-inter text-base sm:text-lg text-[#444] mt-3 sm:mt-4">
        Where divinity meets the mountains, rivers sing serenity, and every path
        leads to peace,
        <br className="hidden sm:block" />
        adventure, and soul-stirring moments.
      </p>

      {/* Category Buttons + Cards Container */}
      <div className="bg-[#D9D9D9] my-6 sm:my-10 rounded-2xl py-6 px-4 sm:px-6">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(item)}
              className={`px-4 py-2 border rounded-full text-sm transition ${
                activeCategory === item
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Card Section (Responsive scroll on mobile) */}
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {destinations.map((dest, i) => (
            <div key={i} className="flex-shrink-0 w-[260px]">
              <Card 
                image={dest.image}
                title={dest.title}
                location={dest.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
