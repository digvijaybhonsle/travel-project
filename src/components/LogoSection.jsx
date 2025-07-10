import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Beach
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Mountain
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d", // City lights
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",     // Forest
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",     // Hot air balloons
];

const LogoSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Image Carousel */}
      <div className="h-[200px] px-24 w-full overflow-hidden">
        <img
          src={`${images[current]}?auto=format&fit=crop&w=1400&q=80`}
          alt={`Slide ${current + 1}`}
          className="w-full h-full px-4 object-cover object-center transition-all duration-700 rounded-3xl"
        />
      </div>

      {/* Features Section */}
      <div className="bg-[#6DA0CC] font-inter px-6 sm:px-10 py-12 my-10 text-white">
        <div className="flex flex-col lg:flex-row justify-around items-start gap-10">
          {/* Block 1 */}
          <div className="flex-1 w-full sm:max-w-[300px] flex flex-col items-center justify-center">
            <p className="font-bold text-[40px] sm:text-[60px] text-center">
              100%
            </p>
            <div className="w-full text-left mt-2 ml-28">
              <p className="font-semibold text-[20px] sm:text-[24px] mb-2">
                Satisfaction Guaranteed
              </p>
              <ul className="list-disc pl-5 text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1">
                <li>Deluxe Stays</li>
                <li>Travel Guides</li>
                <li>Customized Trips</li>
              </ul>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden lg:block h-[214px] w-0 border-l-[10px] border-white opacity-100"></div>

          {/* Block 2 */}
          <div className="flex-1 w-full sm:max-w-[300px] flex flex-col items-center justify-center">
            <p className="font-bold text-[40px] sm:text-[60px] text-center">
              100%
            </p>
            <div className="w-full text-left mt-2 ml-28">
              <p className="font-semibold text-[20px] sm:text-[24px] mb-2">
                Best Services
              </p>
              <ul className="list-disc pl-5 text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1">
                <li>Affordability</li>
                <li>Safety Measures</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="hidden lg:block h-[214px] w-0 border-l-[10px] border-white opacity-100"></div>

          {/* Block 3 */}
          <div className="flex-1 w-full sm:max-w-[300px] flex flex-col items-center justify-center">
            <p className="font-bold text-[40px] sm:text-[60px] text-center">
              24/7
            </p>
            <div className="w-full text-left mt-2 ml-28">
              <p className="font-semibold text-[20px] sm:text-[24px] mb-2">
                Active Support
              </p>
              <ul className="list-disc pl-5 text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1">
                <li>Easy Booking</li>
                <li>Customer Support</li>
                <li>Hassle-Free</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
