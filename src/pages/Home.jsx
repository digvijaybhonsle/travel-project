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
    <div className="w-full overflow-hidden">
      {/* Background Section */}
      <div
        id="home"
        className="relative h-[600px] sm:h-[650px] md:h-[720px] bg-cover bg-top z-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
        <Scroltext />

        {/* Hero Content */}
        <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 -mt-10 gap-6 relative z-10">
          <p className="quote-text pb-6 text-white font-semibold">
            <span className="block">Every Journey</span>
            <span className="block">
              Begins with a <span className="text-yellow-400">smile</span>,
            </span>
            <span className="block">
              &amp; ends with a <span className="text-pink-300">memory</span>!
            </span>
          </p>

          <Searchbar />

          <div className="flex flex-wrap gap-4 sm:gap-8 pt-3 justify-center">
            {/* Feature 1 */}
            <div className="flex items-center gap-2 text-white text-sm">
              <div className="bg-white rounded-full p-1">
                <img src={google} alt="Google rating" className="w-5 h-5" />
              </div>
              <p>4.8 ⭐ Rating</p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-2 text-white text-sm">
              <div className="bg-white rounded-full p-1">
                <img src={aeroplane} alt="Trips" className="w-5 h-5" />
              </div>
              <p>100+ Trips</p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-2 text-white text-sm">
              <div className="bg-white rounded-full p-1">
                <img src={check} alt="Easy Booking" className="w-5 h-5" />
              </div>
              <p>Easy Booking</p>
            </div>
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
