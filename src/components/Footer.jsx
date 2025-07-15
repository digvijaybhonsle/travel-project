import React from "react";
import logo from "../assets/footerlogo.png";
import insta from "../assets/instafooter.png";
import facebook from "../assets/facebookfooter.png";
import linkedin from "../assets/linkedinfooter.png";
import twitter from "../assets/twitterfooter.png";
import youtube from "../assets/youtubefooter.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 sm:px-10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-5 gap-10 items-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-3">
        {/* Logo */}
        <div className="sm:col-span-1 flex justify-center sm:justify-start">
          <img src={logo} alt="Logo" className="w-[150px] h-auto" />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h2 className="font-bold text-lg mb-2">Company</h2>
          <p className="text-sm hover:underline cursor-pointer">About Us</p>
          <p className="text-sm hover:underline cursor-pointer">Contact Us</p>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h2 className="font-bold text-lg mb-2">Policies</h2>
          <p className="text-sm hover:underline cursor-pointer">Refund Policy</p>
          <p className="text-sm hover:underline cursor-pointer">Cancellation Policy</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <p className="text-sm">+91-9876543210</p>
          <p className="text-sm">connect@mytour.com</p>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4 sm:gap-5">
          {/* FOLLOW US vertically */}
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            {"FOLLOW US".split("").map((letter, index) => (
              <span
                key={index}
                className="text-sm font-semibold text-gray-500 tracking-widest"
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} My Tour & Travel Services Pvt. Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
