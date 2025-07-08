import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const items = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about-us" },
    { name: "Popular Tours", id: "popular-tours" },
    { name: "Testimonials", id: "testimonials" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between bg-transparent">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-16 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-medium">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleScroll(item.id)}
                className={`cursor-pointer hover:text-black transition ${
                  activeSection === item.id ? "text-black" : "text-[#605F64]"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <button className="ml-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 pb-4">
          <ul className="flex flex-col gap-4 font-medium">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleScroll(item.id)}
                className={`cursor-pointer hover:text-black transition ${
                  activeSection === item.id ? "text-black" : "text-[#605F64]"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
