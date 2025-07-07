import React from 'react';
import '../css/Scroltext.css';

const Scroltext = () => {
  const message =
    'Get up to 20% Early Bird Discount – Available for the First 100 Bookings Only!';

  return (
    <div className="bg-black px-4 py-1 overflow-hidden">
      <div className="scroll-wrapper">
        <p className="scroll-text text-white text-[15px] font-light font-poppins whitespace-nowrap">
          <span className="message">{message}</span>
          <span className="mx-8">||</span>
          <span className="message">{message}</span>
          <span className="mx-8">||</span>
          <span className="message">{message}</span>
          <span className="mx-8">||</span>
          <span className="message">{message}</span>
        </p>
      </div>
    </div>
  );
};

export default Scroltext;
