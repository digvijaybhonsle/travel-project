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

const Home = () => {
  const Slidder = [
    { image: leftmosting },
    { image: leftmosting },
    { image: leftimg },
    { image: centerimg },
    { image: rightimg },
    { image: rightmostimg },
    { image: rightmostimg },
  ];

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative h-[720px] bg-cover bg-top z-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
        <Scroltext />

        {/* Hero Content */}
        <div className="h-full flex flex-col items-center justify-center text-center px-4 -mt-10 gap-6 relative z-10">
          <p className="quote-text pb-6">
            <span className="block">Every Journey</span>
            <span className="block">
              Begins with a <span className="text-yellow-400">smile</span>,
            </span>
            <span className="block">
              &amp; ends with a <span className="text-pink-300">memory</span>!
            </span>
          </p>

          <Searchbar />

          <div className="flex gap-8 pt-1">
            <div className="flex items-center gap-2 text-white text-sm">
              <img src={google} alt="Google rating" className="w-5 h-5" />
              <p>4.8 ⭐ Rating</p>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <img src={aeroplane} alt="Trips" className="w-5 h-5" />
              <p>100+ Trips</p>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <img src={check} alt="Easy Booking" className="w-5 h-5" />
              <p>Easy Booking</p>
            </div>
          </div>
        </div>

        <img
          src={bottomimg}
          alt="Bottom decoration"
          className="absolute bottom-[-20px] left-0 w-full z-20 pointer-events-none"
        />
      </div>
      <PopularSection />
      <LogoSection />
      <TransportSection Slidder={Slidder} />;
      <GallerySection />
      <ContactUs />
      <Testomonials />
      <Footer />
    </div>
  );
};

export default Home;
