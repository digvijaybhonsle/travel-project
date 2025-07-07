import React from "react";
import camera from "../assets/camera.png";

const GallerySection = () => {
  return (
    <div className="" >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center py-10">
        <h1 className="font-prozalibra text-[32px] sm:text-[42px] md:text-[50px] font-semibold">
          Tour Gallery
        </h1>
        <img
          src={camera}
          alt="Camera Icon"
          className="w-[80px] sm:w-[90px] md:w-[114px] h-auto"
        />
      </div>
      <div className="">
        image
      </div>
    </div>
  );
};

export default GallerySection;
