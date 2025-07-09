import React from "react";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";

const testimonials = [
  {
    image: person1,
    name: "Vicky Nishad",
    review:
      "Best trip ever! Everything was perfectly organized. Highly recommended!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: person2,
    name: "Anjali R",
    review: "A smooth experience from booking to return. Amazing hospitality!",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: person3,
    name: "Priya Sharma",
    review: "A trip to remember! Thank you for the incredible planning.",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: person4,
    name: "Neha Kulkarni",
    review: "Beautiful destinations and very well managed services. Loved it!",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="px-12 py-16 bg-gray-50 text-start">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 font-poppins">
        Our Testimonials
      </h1>
      <div className="w-[204px] h-[8px] bg-black mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-xl shadow-md text-left flex flex-col items-center"
          >
            <div
              key={index}
              className="bg-black text-white p-6 rounded-xl shadow-md text-left flex flex-col"
            >
              <div className="flex items-start gap-4">
                {/* Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                />

                {/* Text Content */}
                <div>
                  <p className="text-yellow-400 text-lg sm:text-xl">
                    {t.rating}
                  </p>
                  <h3 className="font-semibold text-base sm:text-lg mt-1">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">{t.review}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
