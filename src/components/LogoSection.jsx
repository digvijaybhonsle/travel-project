import React from 'react';
import triplogo from "../assets/triplogo.png";

const LogoSection = () => {
  return (
    <div>
      {/* Image */}
      <div className="h-auto px-4 sm:px-10 lg:px-[104px] mt-6">
        <img
          className="rounded-3xl w-full h-full max-h-[268px] object-cover"
          src={triplogo}
          alt="Trip Logo"
        />
      </div>

      {/* Features Section */}
      <div className="bg-[#6EE2DE] font-inter px-6 sm:px-10 py-12 my-10 text-white">
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-10 text-center">
          {/* Block 1 */}
          <div className="flex-1 max-w-[300px]">
            <p className="font-bold text-[40px] sm:text-[60px]">100%</p>
            <p className="font-semibold text-[20px] sm:text-[24px] mb-4">
              Satisfaction Guaranteed
            </p>
            <ul className="list-disc list-inside text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1 text-left">
              <li>Deluxe Stays</li>
              <li>Travel Guides</li>
              <li>Customized Trips</li>
            </ul>
          </div>

          {/* Vertical Line - hidden on small screens */}
          <div className="hidden lg:block h-[214px] w-0 border-l-[10px] border-white opacity-100"></div>

          {/* Block 2 */}
          <div className="flex-1 max-w-[300px]">
            <p className="font-bold text-[40px] sm:text-[60px]">100%</p>
            <p className="font-semibold text-[20px] sm:text-[24px] mb-4">
              Best Services
            </p>
            <ul className="list-disc list-inside text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1 text-left">
              <li>Affordability</li>
              <li>Safety Measures</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Vertical Line - hidden on small screens */}
          <div className="hidden lg:block h-[214px] w-0 border-l-[10px] border-white opacity-100"></div>

          {/* Block 3 */}
          <div className="flex-1 max-w-[300px]">
            <p className="font-bold text-[40px] sm:text-[60px]">24/7</p>
            <p className="font-semibold text-[20px] sm:text-[24px] mb-4">
              Active Support
            </p>
            <ul className="list-disc list-inside text-[16px] sm:text-[18px] font-medium font-probalibra space-y-1 text-left">
              <li>Easy Booking</li>
              <li>Customer Support</li>
              <li>Hassle-Free</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
