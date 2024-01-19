import React, { useState } from 'react';
import { FaCog, FaEnvelope } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';

const Header = () => {
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);
  const Navigate =useNavigate()
  const handleSettingsClick = () => {
   
    setIsSettingsClicked(true);
    const jwttoken = localStorage.getItem('jwttoken');
    fetch('https://techsnap-pe2v.onrender.com/accounts/logout', {
      method: 'GET',  
      headers: {
        Authorization: `Token ${jwttoken}`,
      },
    })
      .then(response => {  
        console.log(response);
        window.alert("logged out");
        Navigate("/login");
      })
      .catch(error => {
        
        console.error(error);
      });
  };

  return (
    <div className="bg-[#1a202c] text-white p-4 fixed z-[9999] w-full flex items-center justify-between">
      <div className="flex items-center">
        <FaCog
          size={20}
          className="mr-4"
          onClick={handleSettingsClick} 
        />
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
