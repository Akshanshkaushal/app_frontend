import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { dumy } from '../../../assets';

const MovieCard = ({ movie, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="bg-white text-black p-4 m-2 shadow-md rounded-md h-[14rem] w-[9rem]"
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
      className=" p-4 m-2 shadow-md rounded-md h-[13rem]"
      onClick={handleClick}
      
      style={{ background: `url(${dumy}) center/cover`, color: 'white' }}
    >
      <h3 className="text-lg font-bold mb-2">Episode {track.episode}</h3>
      <h3 className="text-lg font-bold mb-2">{track.title}</h3>
    </div>
  );
};

const PlaylistDetails = ({ playlistData, type, trackedData }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('movie');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredData = playlistData.movies.filter((item) => item.content_type === activeTab);

  return (
    <div className="text-white   shadow-md rounded-md">
    <div className='flex flex-row justify-center mb-4  items-center bg-gray-800 w-full h-[4rem]'>
    <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={()=>navigate("/playlist")}/>
       <h3 className="text-3xl font-bold ">{playlistData.title}Tab</h3>
       </div>
      <div className='flex flex-row justify-center text-2xl mb-6 items-center gap-6 w-full'>
      <button
          className={`flex justify-start items-center ${activeTab === 'movie' ? 'text-blue-500' : ''}`}
          onClick={() => handleTabChange('movie')}
        >
          Movies
        </button>
        <button
          className={` ${activeTab === 'tv' ? 'text-blue-500' : ''}`}
          onClick={() => handleTabChange('tv')}
        >
          TV Shows
        </button>
      </div>

   
 

      <div className="grid grid-cols-2 gap-2">
        {filteredData.map((item, index) => (
          <MovieCard key={index} movie={item} id={item.content_id} />
        ))}
      </div>

      {type === 'Tracking' && activeTab === 'tv' && (
        <div className="grid grid-cols-2 gap-2">
          {trackedData &&
            trackedData.map((track, index) => (
              <TrackCard key={index} track={track} id={track.content_id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistDetails;
