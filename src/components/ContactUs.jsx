import React from "react";
import holiday from "../assets/holiday.png";
import pencil from "../assets/pencil.png";
import email from "../assets/email2.png";
import nameIcon from "../assets/name.png";
import phone from "../assets/phone.png";

const ContactUs = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Top Header Section */}
      <div className="flex items-center justify-center mb-10">
        <h1 className="font-purpleplus text-[32px] sm:text-[40px] font-bold">
          Feel Free to Contact Us
        </h1>
        <img
          src={holiday}
          alt="Holiday"
          className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-auto"
          style={{ transform: "rotate(17.22deg)" }}
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        {/* Left Empty or Optional Description Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-600 text-lg font-inter">
            We would love to hear from you. Fill out the form and our team will
            get back to you as soon as possible!
          </p>
        </div>

        {/* Right Form Section */}
        <form className="w-full lg:w-1/2 space-y-4 bg-black py-8 px-6">
          {/* Name */}
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <img src={nameIcon} alt="Name" className="w-6 h-6 mr-3" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <img src={phone} alt="Phone" className="w-6 h-6 mr-3" />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <img src={email} alt="Email" className="w-6 h-6 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex items-start border rounded-md px-3 py-2 bg-white">
            <img src={pencil} alt="Message" className="w-6 h-6 mr-3 mt-1" />
            <textarea
              placeholder="Your Message"
              className="w-full outline-none resize-none"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center lg:text-right">
            <button className="w-full h-[40px] bg-black text-white rounded-md font-semibold hover:bg-white hover:text-black transition border border-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
