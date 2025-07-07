import React from "react";
import Card from "../components/Card";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";

const PopularSection = () => {
  const items = ["Adventure", "Culture", "Wildlife", "Mountains", "Luxury"];

  const destinations = [
    { image: card1, title: "Kedarnath", location: "Uttarakhand, India" },
    { image: card2, title: "Manali", location: "Himachal, India" },
    { image: card3, title: "Srinagar", location: "Kashmir, India" },
    { image: card4, title: "Gangtok", location: "Sikkim, India" },
    { image: card1, title: "Badrinath", location: "Uttarakhand, India" },
    { image: card2, title: "Shimla", location: "Himachal, India" },
  ];

  return (
    <div className="pt-24 px-6 text-start max-w-6xl mx-auto pb-6">
      {/* Section Heading */}
      <p className="font-inter font-normal text-[40px] leading-[1] tracking-normal text-black">
        POPULAR Destinations
      </p>
      <p className="font-inter font-normal text-base leading-snug mt-4 text-[#444]">
        Where divinity meets the mountains, rivers sing serenity, and every
        path leads to peace,
        <br />
        adventure, and soul-stirring moments.
      </p>

      {/* Category Buttons + Cards */}
      <div className="bg-[#D9D9D9] my-6 rounded-2xl py-6 px-4">
        {/* Category Buttons */}
        <div className="flex gap-4 mb-8 justify-start flex-wrap">
          {items.map((item, idx) => (
            <button
              key={idx}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Card Section */}
        <div className="flex overflow-x-auto gap-6 scrollbar-hide">
          {destinations.map((dest, i) => (
            <div key={i} className="flex-shrink-0">
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
