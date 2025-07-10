import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div className="flex items-center gap-2 bg-white rounded-full px-4 pt-2 shadow-md w-fit z-30">
      <input
        type="text"
        placeholder="Search Nainital"
        className="flex-grow w-[300px] h-8 outline-none rounded-full px-4 text-black text-base z-20"
      />
      <FiSearch className="text-gray-600 w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default Searchbar;
