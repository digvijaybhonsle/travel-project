import React from "react";
import kedarnath from "../assets/kedarnath.jpg";
import kedarnathvalley from "../assets/kedarnathvalley.jpg";
import kaalbhairav from "../assets/kaalbhairav.jpg";

const DetailGallery = () => {
  return (
    <div className="p-4">
      <div className="bg-[#F0F0F0] p-4 sm:p-6 rounded-2xl shadow">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Main Large Image */}
          <div className="relative w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-3xl">
            <img
              src={kedarnath}
              alt="Kedarnath"
              className="w-full h-full object-cover"
            />

            {/* Rating Badge */}
            <div className="absolute top-3 left-3 bg-white bg-opacity-80 text-black text-sm px-3 py-2 rounded-full flex items-center gap-2 shadow-md">
              <img
                src="https://api.iconify.design/fluent-emoji-flat/star.svg"
                alt="Star"
                className="w-5 h-5"
              />
              <span>4.8/5 from 500+ Reviewers</span>
            </div>

            {/* Location Tag */}
            <div className="absolute bottom-0 right-12 bg-white bg-opacity-90 text-black px-4 pt-6 pb-3 rounded-t-3xl rounded-b-outside-3xl flex items-center gap-3 shadow-lg">
              <img
                src="https://api.iconify.design/mdi:map-marker.svg"
                alt="Location Icon"
                className="h-full p-2 border border-gray-400 rounded-full"
              />
              <div className="px-6 py-2 pr-12 h-11 border border-gray-400 rounded-full flex flex-col justify-center">
                <h1 className="font-semibold text-[16px]">Kedarnath Temple</h1>
                <p className="text-gray-700 text-sm">Uttarakhand, India</p>
              </div>
            </div>
          </div>

          {/* Side Column Images */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {/* Kaal Bhairav Image */}
            <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-3xl">
              <img
                src={kaalbhairav}
                alt="Kaal Bhairav"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-gray-300 bg-opacity-70 text-black font-semibold text-sm px-3 py-1 rounded-full flex items-center gap-2">
                <img
                  src="https://api.iconify.design/ic:round-temple-buddhist.svg"
                  alt="Temple Icon"
                  className="w-5 h-5 bg-white rounded-full p-1"
                />
                <span>Kaal Bhairav Temple</span>
              </div>
            </div>

            {/* Kedarnath Valley Image */}
            <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-3xl">
              <img
                src={kedarnathvalley}
                alt="Kedarnath Valley"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-gray-300 bg-opacity-70 text-black font-semibold text-sm px-3 py-1 rounded-full flex items-center gap-2">
                <img
                  src="https://api.iconify.design/icon-park-solid/mountain.svg"
                  alt="Mountain Icon"
                  className="w-5 h-5 bg-white rounded-full p-1"
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
