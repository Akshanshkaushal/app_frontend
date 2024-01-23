import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { dumy } from '../../../assets';
import { FaCross, FaCut, FaFilter, FaHome, FaTicketAlt } from 'react-icons/fa';

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

const PlaylistDetails = ({ playlistData, type, trackedData }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('movie');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  
  const filteredData = playlistData?.movies.filter((item) => item.content_type === activeTab);
 console.log(trackedData)

  return (
    <div className="text-white overflow-x-hidden  shadow-md rounded-md">
      <div className='flex flex-row mb-4  items-center bg-gray-800 w-full h-[4rem]'>
        <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={() => navigate("/playlist")} />
        <h3 className="text-3xl font-bold mx-8">{playlistData?.title || "Tracked"}</h3>
      </div>
      <div className='flex flex-row  text-2xl font-bold mb-6   gap-6 w-full'>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <button
            className={`flex justify-start items-center focus:outline-none `}
            onClick={() => handleTabChange('movie')}
          >
            Movies
          </button>
          {activeTab === 'movie' && <div className="h-1 rounded-lg bg-green-500 w-full"></div>}
        </div>
         <div className='flex flex-col justify-center items-center w-1/2'>
          <button
            className={`focus:outline-none `}
            onClick={() => handleTabChange('tv')}
          >
            TV Shows
          </button>
          {activeTab === 'tv' && <div className="h-1 bg-green-500 w-full"></div>}
        </div>
      </div>

      {type === 'Tracking'  && (
      <div className='flex flex-row justify-center items-center gap-2 m-2 my-4'>
        <div className='bg-gray-400 text-black p-1'>continue watching</div>
        <div className='bg-gray-400 text-black p-1'>continue watching</div>
        <div className='bg-gray-400 text-black p-1'>continue watching</div>
      </div>
      )}

      <div className='flex flex-row justify-center items-center gap-4 m-2 mt-4'>
        <div className=' text-gray-300 text-md p-1'>4 titles</div>
        <div className=' text-gray-300 text-md p-1 flex flex-row justify-center items-center'>
          <div>sorted by Relevance</div>
          <IoIosArrowDown/>
        </div>
        <FaFilter className='ml-auto'/>
        <div className='text-xl rotate-45'>+</div>
       
      </div>

      <div className='bg-gray-300 w-full mb-4 opacity-25 mx-4 h-[0.1rem]'></div>


      {/* <div className="grid grid-cols-2 gap-2">
        {filteredData.map((item, index) => (
          <MovieCard key={index} movie={item} id={item.content_id} />
        ))}
      </div> */}
      
      {type === 'Seen'  && (
        <div className="grid grid-cols-3 gap-2">
        {filteredData.map((item, index) => (
          <MovieCard key={index} movie={item} id={item.content_id} />
        ))}
        </div>
        
      )}

      {type === 'Liked'  && (
        <div className="grid grid-cols-3 gap-2">
        {filteredData.map((item, index) => (
          <MovieCard key={index} movie={item} id={item.content_id} />
        ))}
        </div>
        
      )}

      {type === 'Must Watch'  && (
        <div className="grid grid-cols-3 gap-2">
        {filteredData.map((item, index) => (
          <MovieCard key={index} movie={item} id={item.content_id} />
        ))}
        </div>
        
      )}

      {type === 'Tracking' && activeTab === 'tv' && (
        <div className="grid grid-rows-1 gap-2">
          {trackedData &&
            trackedData.map((track, index) => (
              <div>
              <TrackCard key={index} track={track} id={track.content_id} />
              <div className="h-2 bg-green-500 w-1/2 mx-2"></div>
</div>
            ))}
        </div>
        
      )}

    </div>
  );
};

export default PlaylistDetails;
