import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../BottomBar/Navbar';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { dumy } from '../../../assets';
import Filter from '../../PlaylistSection/PlayList/Filter';
import { BsThreeDotsVertical } from 'react-icons/bs';

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  // const jwttoken = localStorage.getItem('jwttoken');

  const [showDropdown, setShowDropdown] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() !== '') {
      // Simulating API call with dummy data
      const dummyResults = [
        { id: 1, username: 'user1', profile_pic: dumy },
        { id: 2, username: 'user2', profile_pic: dumy },
        { id: 3, username: 'user3', profile_pic: dumy },
      ];
      setResults(dummyResults);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const renderResults = () => {
    return results.map((result) => (
      <Link to={`/profiledetails/${result.id}`} key={result.id}>
        <div className="relative p-4 border border-gray-700 mb-2 rounded-md h-[15rem]">
          <div className=' p-2 flex flex-col justify-center items-center gap-2'>
            <img
              src={result?.profile_pic || dumy}
              alt={result.username}
              className="w-[5.5rem] h-[5rem] object-cover rounded-lg"
            />
            <p className="text-white">{result.username}</p>
            <p className="text-white">{result.username}</p>
            <div className='border border-red-500 rounded-lg text-red-400 px-1'> <button >Follow</button> </div>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="bg-gray-900  text-white  ">
       <form className="text-center ">
      <div className="relative flex items-center gap-2 mt-2 pb-4 justify-center">
          <input
            type="text"
            placeholder="Search (ex: Ramesh)"
            className=" p-2 pl-8 rounded-lg text-gray-300 bg-gray-800 h-[2.5rem] "
            style={{ width: '90%' }}
            value={query}
            onChange={handleInputChange}
          />
          <FaSearch className="absolute left-8 cursor-pointer text-gray-400" />
          <div className="  text-left">
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer  absolute right-12 top-3" onClick={handleFilterClick} />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md overflow-hidden z-10">
                <div className="py-1">
                  <button
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort Alphabetically
                  </button>
                  <button
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort by Movie Count
                  </button>
                  <button
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort by Date of Creation
                  </button>
                </div>
              </div>
            )}
          </div>
          <FaFilter className='ml-auto absolute right-8 cursor-pointer text-gray-400' onClick={toggleSidebar} />
        <Filter isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
      
      <h1 className='text-gray-200 font-bold text-2xl flex justify-start items-start mx-12 '>Users With Similar Interests</h1>
      
        {showResults && 
        <div className="grid grid-cols-3 gap-2 mt-16">    
        {renderResults()}
        </div>}
      </form>

      <Navbar />
    </div>
  );
};

export default UserSearch;
