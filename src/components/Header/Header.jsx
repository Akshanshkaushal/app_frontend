// Header.js

import React from 'react';
import { FaCog, FaEnvelope } from 'react-icons/fa';  
 

const Header = () => {
  return (
    <div className="bg-[#111111] text-white p-4 fixed z-[9999] w-full flex items-center justify-between">
  
      <div className="flex items-center">
      <FaCog size={20} className="mr-4" />
 
      </div>

    
      <div className="flex-grow text-center">
        <p className="text-xl font-semibold">Instagram</p>
  
      </div>

  
      <div className="flex items-center">
        <FaEnvelope size={20} className="mr-4" />
      </div>
    </div>
  );
};

export default Header;
