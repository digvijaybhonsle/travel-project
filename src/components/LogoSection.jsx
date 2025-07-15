import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1461716835516-0bfe73046820?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
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
      <div className="h-[200px] sm:h-[250px] md:h-[300px] px-4 sm:px-10 md:px-24 w-full overflow-hidden">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-700 rounded-3xl"
        />
      </div>

      {/* Features Section */}
      <div className="bg-[#6DA0CC] font-inter px-4 sm:px-10 py-12 my-10 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          {/* Block 1 */}
          <div className="flex-1 w-full max-w-full sm:max-w-[320px] mx-auto flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12">
            <p className="font-bold text-[40px] sm:text-[60px]">100%</p>
            <div className="w-full mt-2">
              <p className="font-semibold text-[20px] sm:text-[24px] mb-2">
                Satisfaction Guaranteed
              </p>
              <ul className="list-disc pl-5 sm:pl-8 text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1 text-left">
                <li>Deluxe Stays</li>
                <li>Travel Guides</li>
                <li>Customized Trips</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-[234px] w-0 border-l-[10px] border-white opacity-100"></div>

          {/* Block 2 */}
          <div className="flex-1 w-full max-w-full sm:max-w-[320px] mx-auto flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-16">
            <p className="font-bold text-[40px] sm:text-[60px]">100%</p>
            <div className="w-full mt-2">
              <p className="font-semibold text-[20px] sm:text-[24px] mb-2">
                Best Services
              </p>
              <ul className="list-disc pl-5 sm:pl-8 text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1 text-left">
                <li>Affordability</li>
                <li>Safety Measures</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-[234px] w-0 border-l-[10px] border-white opacity-100"></div>

          {/* Block 3 */}
          <div className="flex-1 w-full max-w-full sm:max-w-[320px] mx-auto flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-16">
            <p className="font-bold text-[40px] sm:text-[60px]">24/7</p>
            <div className="w-full mt-2">
              <p className="font-semibold text-[20px] sm:text-[24px] mb-2">
                Active Support
              </p>
              <ul className="list-disc pl-5 sm:pl-8 text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1 text-left">
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
