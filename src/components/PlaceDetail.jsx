import React from "react";
import { MdHotel, MdOutlineAccessTime } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import locationimg from "../assets/locationimage.jpg";

const PlaceDetail = () => {
  return (
    <div className="p-4 font-inter">
      <div className="bg-[#F0F0F0] p-4 sm:p-6 rounded-2xl w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Card */}
          <div className="bg-white px-6 py-6 rounded-xl border border-gray-200 w-full md:w-[50%] shadow-sm">
            <h2 className="text-2xl font-semibold text-black mb-4 leading-snug">
              Call of Kedarnath: Journey to the Abode of Shiva
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Embark on a soul-stirring pilgrimage to the sacred Kedarnath
              Temple nestled in the heart of the Himalayas. Experience
              breathtaking mountain trails, spiritual serenity, and the divine
              presence of Lord Shiva. This journey promises both adventure and
              inner peace, leaving you with memories of a lifetime.
            </p>

            {/* Icon Tags */}
            <div className="flex flex-wrap gap-3 pb-6">
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm bg-white text-gray-800">
                <MdHotel className="text-lg" />
                Hotels & Stays
              </div>
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm bg-white text-gray-800">
                <MdOutlineAccessTime className="text-lg" />
                7 Days
              </div>
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm bg-white text-gray-800">
                <GoLocation className="text-lg" />
                5 Places
              </div>
            </div>

            {/* Price + Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-left">
                <p className="text-sm text-gray-600 font-medium mb-1">Price:</p>
                <p className="text-2xl font-bold text-black">
                  $299{" "}
                  <span className="text-sm font-normal text-gray-500">
                    per person
                  </span>
                </p>
              </div>
              <button className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="py-4 px-2 rounded-xl w-full md:w-[45%]">
            <p className="text-[22px] leading-[40px] tracking-tight text-justify text-gray-800">
              Tour and travel services in Kedarnath offer complete pilgrimage
              packages including transportation, accommodation, guided treks,
              and temple darshan assistance. Options range from budget to
              premium, with added services like helicopter rides, local
              sightseeing, and meal plans for a hassle-free spiritual journey.
            </p>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mt-12 px-4">
          <h2 className="text-[30px] font-semibold mb-6 leading-[40px] tracking-tight text-black">
            Your Travel Itinerary
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Itinerary List */}
            <ul className="flex-1 space-y-3 text-gray-800 text-[16px] font-medium">
              {[
                "Arrival in Haridwar",
                "Haridwar to Guptkashi",
                "Guptkashi to Gaurikund",
                "Kedarnath to Guptkashi",
                "Guptkashi to Chopta",
                "Chopta to Haridwar",
                "Departure",
              ].map((day, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  {`${index + 1}. ${day}`}
                  <HiArrowUp className="text-gray-500" />
                </li>
              ))}
            </ul>

            {/* Image */}
            <div className="flex-1">
              <img
                src={locationimg}
                alt="Location"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Day Details */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-base font-semibold text-gray-800 border border-black shadow-sm px-3 py-2 rounded-xl">
                <FaCalendarAlt className="text-lg" />
                Day 1: Tue, Jul 18 - Arrival in Haridwar
              </div>

              <h1 className="font-normal text-[30px] leading-[40px] tracking-[-1px] text-black text-justify">
                Arrive at Haridwar Railway Station
              </h1>

              <p className="text-[24px] font-normal leading-[40px] tracking-[-1px] text-gray-800 text-justify pb-12">
                Arrive at Haridwar or Rishikesh and immerse yourself in the
                spiritual ambiance. Attend the Ganga Aarti at Har Ki Pauri or
                visit Laxman Jhula. Enjoy an overnight stay at your chosen
                location.
              </p>

              <div className="text-[28px] leading-[40px] tracking-[-1px] font-normal text-black hover:underline cursor-pointer">
                Detail Information
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
