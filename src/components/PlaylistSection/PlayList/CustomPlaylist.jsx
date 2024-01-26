import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { dumy } from '../../../assets';
import { FaBars, FaCross, FaCut, FaFilter, FaHome, FaSearch, FaTicketAlt } from 'react-icons/fa';
import { FaPlus, FaBookmark, FaEllipsisV, FaPaperPlane } from 'react-icons/fa'; // Importing icons from Font Awesome
import Navbar from '../../BottomBar/Navbar';

const MovieCard = ({ movie, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="bg-white text-black p-4 m-2 shadow-md rounded-md h-[12rem] w-[7.2rem]"
      style={{ background: `url(${movie.movie_photo}) top/cover no-repeat` }}
      onClick={handleClick}
    >
    </div>
  );
};

const TrackCard = ({ track, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className=" shadow-md rounded-md h-[13rem] flex flex-row justify-center items-center px-2"
      onClick={handleClick}
    >
      <div className='' style={{ width: "40%" }}><img src={dumy} className='h-[12.8rem] w-full object-cover' /></div>
      <div style={{ width: "60%" }} className='flex flex-col  h-full gap-2 px-2 '>
        <div className='text-lg text-gray-300'>{track.title}</div>
        <div className='flex flex-row items-center gap-2 mt-8'>
          <div>S1 E{track.episode}</div>
          <div>+2</div>
          <FaTicketAlt className='ml-auto' />
        </div>
        <div className='text-sm text-gray-400 mt-2'>The Breaking Point</div>
        <div className='bg-gray-500 text-white p-1 px-4 mt-auto w-3/4 rounded-lg mb-2 mx-2'><button className='w-full flex flex-row justify-center items-center gap-2'>
          <FaHome />
          <div className='text-xl '>Watch Now</div>
        </button></div>
      </div>  
    </div>
  );
};

const CustomPlaylist = ({ playlistData, type, trackedData }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('movie');
  const [searchTerm, setSearchTerm] = useState('');

  const [showDropdown, setShowDropdown] = useState(false);


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };
  
  const filteredData = playlistData?.movies.filter((item) => item.content_type === activeTab);
 console.log(trackedData)

  return (
    <div className="text-white overflow-x-hidden flex flex-col justify-center shadow-md rounded-md">
      <div className='flex flex-row mb-4  items-center bg-gray-800 w-full h-[4rem]'>
        <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={() => navigate("/playlist")} />
        <h3 className="text-3xl font-bold mx-8">{playlistData?.title || "Tracked"}</h3>
      </div>
    
      <div className="relative flex items-center gap-2 mt-2 justify-center">
          <input
            type="text"
            placeholder="Search Collections"
            className=" p-2 pl-8 rounded-lg text-white bg-gray-800 h-[2.5rem] w-3/4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-8 cursor-pointer" />
          <div className="relative inline-block text-left" onClick={handleFilterClick}>
      <div className='text-white bg-gray-800 px-1 rounded-lg'>SORT</div>   
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
         </div>

         <div className='flex pt-16 px-16 shadow-lg justify-center items-center'>
<img src={dumy} className=''/>
         </div>

         <div className='flex flex-row items-center gap-4 bg-gray-900 p-2 my-2 '>
      <FaPlus className='icon' size={20}/> {/* Plus icon */}
      <FaBookmark className='icon' size={20} /> {/* Bookmark icon */}
      <FaFilter className='icon'  size={20}/> {/* Filter icon */}
      <div className='flex flex-row items-center ml-auto gap-4'>
      <FaEllipsisV className='icon' size={20} />  
      <FaPaperPlane className='icon' size={20} />
      </div>  
    </div>

      
        <div className="grid grid-cols-3 gap-2">
        {filteredData.map((item, index) => (
          <MovieCard key={index} movie={item} id={item.content_id} />
        ))}
        </div>
        
      <Navbar/>
    </div>
  );
};

export default CustomPlaylist;
