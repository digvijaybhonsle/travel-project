import Header from "../components/Header";
import Background from "../assets/background.jpg";
import Scroltext from "../components/Scroltext";
import "../css/Quote.css";
import Searchbar from "../components/Searchbar";
import google from "../assets/google.png";
import aeroplane from "../assets/aeroplane.png";
import check from "../assets/shieldcheck.png";
import bottomimg from "../assets/bottom.png";
import centerimg from "../assets/sliddercenter.png";
import leftimg from "../assets/leftimg.png";
import leftmosting from "../assets/leftmostimg.png";
import rightimg from "../assets/rightimg.png";
import rightmostimg from "../assets/rightmost.png";
import TransportSection from "../components/TransportationSection";
import GallerySection from "../components/GallerySection";
import PopularSection from "../components/PopularSection";
import LogoSection from "../components/LogoSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Testomonials from "../components/Testomonials";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

const Home = () => {
  const Slidder = [
    { image: leftmosting },
    { image: leftimg },
    { image: centerimg },
    { image: rightimg },
    { image: rightmostimg },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Background Section */}
      <div
        id="home"
        className="relative h-[520px] sm:h-[600px] md:h-[720px] bg-cover bg-top z-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
        <Scroltext />

        {/* Hero Content */}
        <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 -mt-20 gap-6 relative z-10">
          <p className="quote-text pb-8 text-[28px] sm:text-[42px] md:text-[56px] leading-snug text-white text-center">
            <span className="block leading-tight">Every Journey</span>
            <span className="block leading-snug">
              Begins with a <span className="text-yellow-400">smile</span>,
            </span>
            <span className="block leading-normal">
              &amp; ends with a <span className="text-pink-300">memory</span>!
            </span>
          </p>

          <Searchbar />

          {/* Social Icons */}
          <div className="absolute right-4 sm:right-10 top-[70%] -translate-y-1/2 flex flex-col gap-4 z-20">
            {[insta, facebook, linkedin, youtube].map((icon, index) => (
              <a
                href="#"
                key={index}
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={icon}
                  alt={`social-${index}`}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </a>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-3 sm:gap-6 pt-4 justify-center">
            {[
              { icon: google, text: "4.8 ⭐ Rating" },
              { icon: aeroplane, text: "100+ Trips" },
              { icon: check, text: "Easy Booking" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white text-sm sm:text-base"
              >
                <div className="bg-white rounded-full p-1">
                  <img src={item.icon} alt={item.text} className="w-5 h-5" />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Image */}
        <img
          src={bottomimg}
          alt="Bottom decoration"
          className="absolute bottom-[-20px] left-0 w-full z-20 pointer-events-none"
        />
      </div>

      {/* Sections */}
      <PopularSection />
      <LogoSection />
      <TransportSection Slidder={Slidder} />
      <GallerySection />
      <ContactUs />
      <Testomonials />
      <Footer />
    </div>
  );
};

export default Home;
