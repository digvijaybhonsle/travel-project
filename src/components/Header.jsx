
import logo from "../assets/logo.png";

const Header = () => {
  const items = ["Home", "About Us", "Popular Tours", "Testimonials"];

  return (
    <div className="flex items-center justify-between px-6 bg-transparent shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-30" />
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 text-[#605F64] font-medium">
          {items.map((item, index) => (
            <li key={index} className="hover:text-black cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Header;
