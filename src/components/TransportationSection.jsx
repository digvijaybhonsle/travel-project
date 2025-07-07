import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";

const TransportSection = ({ Slidder }) => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(2); // Default center image

  const scroll = (direction) => {
    let newIndex = direction === "left" ? centerIndex - 1 : centerIndex + 1;
    if (newIndex < 0 || newIndex >= Slidder.length) return;

    setCenterIndex(newIndex);

    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth / 5 + 20;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const centerImage = scrollRef.current?.children?.[centerIndex];
    if (centerImage) {
      const container = scrollRef.current;
      const offset = centerImage.offsetLeft - container.offsetWidth / 2 + centerImage.offsetWidth / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [centerIndex]);

  return (
    <div className="py-16 relative">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold font-poppins text-[30px] text-center">
          Our Transport Services
        </h1>
        <div className="w-[204px] h-[8px] bg-black mt-2 mb-8 rounded-full"></div>

        {/* Slider Section */}
        <div className="relative w-full max-w-[1280px] mx-auto px-4 flex items-center justify-center py-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaChevronLeft className="text-3xl text-gray-700" />
          </button>

          {/* Image Slider */}
          <div
            ref={scrollRef}
            className="flex gap-4 items-center overflow-x-auto scrollbar-hide scroll-smooth max-w-full"
          >
            {Slidder.map((item, index) => {
              let sizeClass = "";

              if (index === centerIndex) {
                sizeClass =
                  "w-[180px] h-[130px] sm:w-[250px] sm:h-[180px] md:w-[360px] md:h-[260px]";
              } else if (
                index === centerIndex - 1 ||
                index === centerIndex + 1
              ) {
                sizeClass =
                  "w-[100px] h-[90px] sm:w-[140px] sm:h-[130px] md:w-[190px] md:h-[200px]";
              } else {
                sizeClass =
                  "w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[110px] md:h-[120px]";
              }

              return (
                <img
                  key={index}
                  src={item.image}
                  alt={`Transport ${index + 1}`}
                  className={`rounded-xl shadow-md object-cover transition-all duration-300 ${sizeClass} flex-shrink-0`}
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaChevronRight className="text-3xl text-gray-700" />
          </button>
        </div>

        {/* Description */}
        <div className="mt-4 px-6 text-center max-w-7xl">
          <h1 className="font-bold font-poppins text-[30px] sm:text-[36px] md:text-[40px]">
            Your journey begins with us!!
          </h1>
          <p className="text-[12px] sm:text-base mt-4 text-gray-700">
            We provide the best travel facilities to ensure a smooth and
            enjoyable journey at every destination. Whether you're planning a
            solo escape, a family vacation, or a group tour, we've got you
            covered with our range of comfortable private buses, travellers, and
            cabs. Reliable, convenient, and tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransportSection;
