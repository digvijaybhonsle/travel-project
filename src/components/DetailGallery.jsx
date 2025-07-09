import React from "react";
import kedarnath from "../assets/kedarnath.jpg";
import kedarnathvalley from "../assets/kedarnathvalley.jpg";
import kaalbhairav from "../assets/kaalbhairav.jpg";

const DetailGallery = () => {
  return (
    <div className="p-4">
      <div className="bg-[#F0F0F0] p-4 sm:p-6 rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Large Image */}
          <div className="relative w-full lg:w-2/3 h-[400px] lg:h-[905px] overflow-hidden rounded-xl">
            <img
              src={kedarnath}
              alt="Kedarnath"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-gray-300 bg-opacity-80 text-black text-sm px-3 py-2 rounded-full flex items-center gap-2 shadow-md">
              <img
                src="https://api.iconify.design/fluent-emoji-flat/star.svg"
                alt="Star"
                className="w-6 h-6 p-1 rounded-full"
              />
              <span>4.8/5 from 500+ Reviewer</span>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="relative h-[200px] lg:h-[50%] overflow-hidden rounded-xl">
              <img
                src={kaalbhairav}
                alt="Kaal Bhairav"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-2 left-2 bg-gray-300 bg-opacity-60 text-black text-xs px-3 py-2 rounded-full flex items-center gap-2">
                <img
                  src="https://api.iconify.design/ic:round-temple-buddhist.svg"
                  alt="Temple Icon"
                  className="w-6 h-6 p-1 bg-white rounded-full"
                />
                <span>Kaal Bhairav Temple</span>
              </div>
            </div>

            <div className="relative h-[200px] lg:h-[50%] overflow-hidden rounded-xl">
              {/* Full-sized image */}
              <img
                src={kedarnathvalley}
                alt="Kedarnath Valley"
                className="w-full h-full object-cover"
              />

              {/* Bottom-left overlay */}
              <div className="absolute bottom-2 left-2 bg-gray-300 bg-opacity-60 text-black text-xs px-3 py-2 rounded-full flex items-center gap-2">
                <img
                  src="https://api.iconify.design/icon-park-solid/mountain.svg"
                  alt="Mountain Icon"
                  className="w-6 h-6 p-1 bg-white rounded-full"
                />
                <span>Kedarnath Valley</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailGallery;
