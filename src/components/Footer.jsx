import React from "react";
import logo from "../assets/footerlogo.png";
import insta from "../assets/instafooter.png";
import facebook from "../assets/facebookfooter.png";
import linkedin from "../assets/linkedinfooter.png";
import twitter from "../assets/twitterfooter.png";
import youtube from "../assets/youtubefooter.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-start gap-10">
        {/* Logo */}
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
          <img src={logo} alt="Logo" className="w-[150px] h-auto" />
        </div>

        {/* Links Sections */}
        <div className="flex flex-wrap justify-between gap-10 sm:gap-16 w-full sm:w-auto">
          {/* Company */}
          <div className="flex flex-col gap-2 min-w-[150px]">
            <h2 className="font-bold text-lg mb-2">Company</h2>
            <p className="text-sm hover:underline cursor-pointer">About Us</p>
            <p className="text-sm hover:underline cursor-pointer">Contact Us</p>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-2 min-w-[150px]">
            <h2 className="font-bold text-lg mb-2">Policies</h2>
            <p className="text-sm hover:underline cursor-pointer">Refund Policy</p>
            <p className="text-sm hover:underline cursor-pointer">Cancellation Policy</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 min-w-[150px]">
            <h2 className="font-bold text-lg mb-2">Contact Us</h2>
            <p className="text-sm">+91-9876543210</p>
            <p className="text-sm">connect@mytour.com</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 items-start min-w-[150px]">
            {/* Vertical Text */}
            <div className="flex flex-col text-sm uppercase tracking-widest text-gray-300">
              {"Follow us on".split("").map((char, index) => (
                <span key={index}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex flex-col gap-2 mt-9">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" className="w-6 h-6 cursor-pointer" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="w-6 h-6 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} My Tour & Travel Services Pvt. Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
