import React from "react";
import logo from "../assets/footerlogo.png";
import insta from "../assets/instafooter.png";
import facebook from "../assets/facebookfooter.png";
import linkedin from "../assets/linkedinfooter.png";
import twitter from "../assets/twitterfooter.png";
import youtube from "../assets/youtubefooter.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-around items-center gap-12">
        {/* Logo */}
        <div className="flex-shrink-0 min-w-[150px]">
          <img src={logo} alt="Logo" className="w-[150px] h-auto" />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2 min-w-[150px]">
          <h2 className="font-bold text-lg mb-2">Company</h2>
          <p className="text-sm hover:underline cursor-pointer">About Us</p>
          <p className="text-sm hover:underline cursor-pointer">Contact Us</p>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-2 min-w-[150px]">
          <h2 className="font-bold text-lg mb-2">Policies</h2>
          <p className="text-sm hover:underline cursor-pointer">
            Refund Policy
          </p>
          <p className="text-sm hover:underline cursor-pointer">
            Cancellation Policy
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 min-w-[150px]">
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <p className="text-sm">+91-9876543210</p>
          <p className="text-sm">connect@mytour.com</p>
        </div>

        {/* Follow Us On + Social Icons */}
        <div className="flex gap-6 items-start min-w-[150px]">
          <div className="flex flex-col text-sm uppercase tracking-widest text-gray-200">
            {"Follow us on".split("").map((char, index) => (
              <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-9">
            <img src={insta} alt="Instagram" className="w-6 h-6" />
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            <img src={youtube} alt="YouTube" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Copyright ©My tour & travel Services pvt ltd 
        </p>
      </div>
    </div>
  );
};

export default Footer;
