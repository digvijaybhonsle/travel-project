import React from 'react'
import triplogo from "../assets/triplogo.png";

const LogoSection = () => {
  return (
    <div>
        {/* Image */}
        <div className="h-[268px] px-[104px]">
          <img
            className="rounded-3xl w-full h-full object-cover"
            src={triplogo}
            alt="Trip Logo"
          />
        </div>

        {/* Features Section */}
        <div className="bg-[#6EE2DE] font-inter px-8 py-12 my-10 text-white">
          <div className="flex justify-around items-start gap-6 text-center">
            {/* Block 1 */}
            <div className="flex-1">
              <p className="font-bold text-[60px]">100%</p>
              <p className="font-semibold text-[24px] mb-4">
                Satisfaction Guaranteed
              </p>
              <ul className="text-[18px] font-medium space-y-1">
                <li>Deluxe Stays</li>
                <li>Travel Guides</li>
                <li>Customized Trips</li>
              </ul>
            </div>

            {/* Vertical Line */}
            <div className="h-[214px] w-0 border-l-[10px] border-white opacity-100"></div>

            {/* Block 2 */}
            <div className="flex-1">
              <p className="font-bold text-[60px]">100%</p>
              <p className="font-semibold text-[24px] mb-4">Best Services</p>
              <ul className="text-[18px] font-medium space-y-1">
                <li>Affordability</li>
                <li>Safety Measures</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            {/* Vertical Line */}
            <div className="h-[214px] w-0 border-l-[10px] border-white opacity-100"></div>

            {/* Block 3 */}
            <div className="flex-1">
              <p className="font-bold text-[60px]">24/7</p>
              <p className="font-semibold text-[24px] mb-4">Active Support</p>
              <ul className="text-[18px] font-medium space-y-1">
                <li>Easy Booking</li>
                <li>Customer Support</li>
                <li>Hassle-Free</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LogoSection