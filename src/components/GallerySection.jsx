import React from "react";
import camera from "../assets/camera.png";
import bigimg from "../assets/bigimg.jpg";
import bigimg2 from "../assets/bigimg2.jpg";
import mediumimg from "../assets/mediumimg.jpg";
import mediumimg2 from "../assets/mediumimg2.jpg";
import mediumimg3 from "../assets/mediumimg3.jpg";
import smallimg from "../assets/smallimg1.jpg";
import smallimg2 from "../assets/smallimg2.jpg";
import smallimg3 from "../assets/smallimg3.jpg";
import smallimg4 from "../assets/smallimg4.jpg";

const GallerySection = () => {
  return (
    <div className="px-4 sm:px-10 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mb-10">
        <h1 className="font-prozalibra text-[32px] sm:text-[42px] md:text-[50px] font-semibold">
          Tour Gallery
        </h1>
        <img
          src={camera}
          alt="Camera Icon"
          className="w-[80px] sm:w-[90px] md:w-[114px] h-auto"
        />
      </div>

      {/* Gallery Layout */}
      <div className="flex flex-col lg:flex-row gap-6 mx-auto max-w-[910px]">
        {/* Left Column */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Left Nested Column */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <img
                src={mediumimg2}
                alt="Medium 2"
                className="rounded-xl w-full object-cover"
              />
              <div className="flex gap-4">
                <img
                  src={smallimg}
                  alt="Small 1"
                  className="rounded-xl w-[47%] object-cover"
                />
                <img
                  src={smallimg2}
                  alt="Small 2"
                  className="rounded-xl w-[47%] object-cover"
                />
              </div>
            </div>

            {/* Right Column (Top Right Medium Image) */}
            <div className="w-full sm:w-1/2">
              <img
                src={mediumimg}
                alt="Medium"
                className="rounded-xl w-full h-full max-h-[415px] object-cover"
              />
            </div>
          </div>

          {/* Bottom Big Image */}
          <img
            src={bigimg}
            alt="Big 1"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Top Small Pair */}
          <div className="flex gap-4">
            <img
              src={smallimg3}
              alt="Small 3"
              className="rounded-xl w-1/2 object-cover h-[152px]"
            />
            <img
              src={smallimg4}
              alt="Small 4"
              className="rounded-xl w-1/2 object-cover h-[152px]"
            />
          </div>

          {/* Middle Medium Image */}
          <img
            src={mediumimg3}
            alt="Medium 3"
            className="rounded-xl w-full object-cover"
          />

          {/* Bottom Big Image */}
          <img
            src={bigimg2}
            alt="Big 2"
            className="rounded-xl w-full h-[60%] object-cover max-h-[395px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
