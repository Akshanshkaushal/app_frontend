import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { dumy, postimg1, postimg2, postimg3, postimg4, postimg5, postimg6, postimg7 } from '../../../assets';
import { FaCross, FaCut, FaFilter, FaHome, FaPlus, FaTicketAlt } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Navbar from '../../BottomBar/Navbar';
import { Sidebar } from 'react-feather';
import Filter from './Filter';



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
      <div className='' style={{ width: "40%" }}><img src={postimg2} className='h-[12.8rem] w-full object-cover' /></div>
      <div style={{ width: "60%" }} className='flex flex-col  h-full gap-2 px-2 '>
        <div className='text-lg text-gray-300'>{track.title}</div>
        <div className='flex flex-row items-center gap-2 mt-8'>
          <div>S1 E{track.episode}</div>
          <div>+2</div>
          <TiTick  className='ml-auto'/>
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


const movieData = [
   { id: 1, title: "Movie 1", episode: 3, status: 'continueWatching', image:  postimg1 },
  { id: 2, title: "Movie 2", episode: 4, status: 'continueWatching', image:  postimg2 },
  { id: 3, title: "Movie 3", episode: 2, status: 'continueWatching', image:  postimg3 },
 
   { id: 11, title: "Movie 11", episode: 1, status: "Havent started", image:  postimg1 },
  { id: 12, title: "Movie 12", episode: 5, status: "Havent started", image:  postimg2 },
  { id: 13, title: "Movie 13", episode: 3, status: "Havent started", image:  postimg3 },
 
   { id: 21, title: "Movie 21", episode: 1, status: 'Comming soon', image:  postimg2 },
  { id: 22, title: "Movie 22", episode: 6, status: 'Comming soon', image:  postimg5 },
  { id: 23, title: "Movie 23", episode: 4, status: 'Comming soon', image:  postimg7 },
 
   { id: 4, title: "Movie 4", episode: 2, status: 'continueWatching', image:  postimg5 },
  { id: 5, title: "Movie 5", episode: 3, status: 'continueWatching', image:  postimg6 },
 
 
  { id: 14, title: "Movie 14", episode: 4, status: "Havent started", image:  postimg1 },
  { id: 15, title: "Movie 15", episode: 2, status: "Havent started", image:  postimg2 },
 
  
  { id: 24, title: "Movie 24", episode: 5, status: 'Comming soon', image:  postimg7 },
  { id: 25, title: "Movie 25", episode: 3, status: 'Comming soon', image:  postimg5 },
   
];

movieData.forEach((movie, index) => {
  movie.value = (index + 1) * 5; // You can adjust this formula as needed
});

const MustStatic = () => {
   return (
    <div className='flex flex-col justify-center items-center'>
  <div className='grid grid-cols-2 justify-center mb-4 items-center'>
  <img src={postimg1}/>
  <img src={postimg2}/>
  <img src={postimg6}/>
  <img src={postimg4}/>
  </div>
  <p className='text-gray-300 text-sm'>you need to watch </p>
  </div>
  )
}

const MustStatic2 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

 <div className='grid grid-cols-2 justify-center mb-4 items-center'>
 <img src={postimg5}/>
 <img src={postimg6}/>
 <img src={postimg2}/>
 <img src={postimg1}/>
 </div>
 <p className='text-gray-300 text-sm'>All </p>
</div>
 )
}

const MustStatic3 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

 <div className='grid grid-cols-2 justify-center mb-4 items-center'>
 <img src={postimg5}/>
 <img src={postimg6}/>
 <img src={postimg2}/>
 <img src={postimg1}/>
 </div>
 <p className='text-gray-300 text-sm'>Watch Worthy </p>
</div>
 )
}

const MustStatic4 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

 <div className='grid grid-cols-2 justify-center mb-4 items-center'>
 <img src={postimg5}/>
 <img src={postimg6}/>
 <img src={postimg2}/>
 <img src={postimg1}/>
 </div>
 <p className='text-gray-300 text-sm'>heard its good</p>
</div>
 )
}

const MovieCardstatic = ({ movie, id }) => {
  return (
    <div className='flex flex-col justify-center'>
    <div
      className="shadow-md rounded-md h-[13rem] flex flex-row justify-center items-center px-2"
     
    >
      <div style={{ width: "40%" }}>
        <img src={movie.image} className='h-[12.8rem] w-full object-cover' alt={`Movie ${id}`} />
      </div>
      <div style={{ width: "60%" }} className='flex flex-col h-full gap-2 px-2 '>
        <div className='text-lg text-gray-300'>{movie.title}</div>
        <div className='flex flex-row items-center gap-2 mt-8'>
          <div>S1 E{movie.episode}</div>
          <div>+2</div>
          <TiTick  className='ml-auto'/>
        </div>
        <div className='text-sm text-gray-400 mt-2'>{movie.status}</div>
        <div className='bg-gray-500 text-white p-1 px-4 mt-auto w-3/4 rounded-lg mb-2 mx-2'>
          <button className='w-full flex flex-row justify-center items-center gap-2'>
            <FaHome />
            <div className='text-sm'>Watch Now</div>
          </button>
        </div>
      </div>
    </div>
    <div className="h-2 bg-green-500" style={{ width: `${movie?.value}%` }}></div>
</div>
  );
};



const renderMovies = ({activeTab}) => {
  console.log("render")
  console.log(activeTab)
  const filteredMoviesstatic = movieData.filter(movie => movie.status === activeTab);
  console.log(filteredMoviesstatic)
  return (
    <div className="grid grid-rows-1 gap-2">
      {filteredMoviesstatic.map(movie => (
        <MovieCardstatic key={movie.id} movie={movie} id={movie.id} />
      ))}
    </div>
  );
};

const PlaylistDetails = ({ playlistData, type, trackedData }) => {
 console.log(trackedData)
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tv');

   

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [showDropdown, setShowDropdown] = useState(false);


  const [value, setValue] = useState("50");

  const filteredData = playlistData?.movies.filter((item) => item.content_type === activeTab);
 
  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

console.log(activeTab)
  return (
    <div className="text-white overflow-x-hidden  shadow-md rounded-md">
      <div className='flex flex-row mb-4  items-center bg-gray-800 w-full h-[4rem]'>
        <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={() => navigate("/playlist")} />
        <h3 className="text-3xl font-bold mx-8">{playlistData?.title || "Tracked"}</h3>
      </div>
      {type !== 'Tracking'   && (
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
      )
      }

      {type === 'Tracking'  && (
        <div className='flex flex-row justify-center items-center gap-2 '>
     
          <div  onClick={() => handleTabChange('continueWatching')}
        className={` text-sm px-1 text-white cursor-pointer ${activeTab === 'continueWatching' ? 'bg-green-500' : 'bg-gray-700'}`}>continueWatching</div>
      
      <div  onClick={() => handleTabChange('Havent started')}
        className={` text-sm px-1  text-white  cursor-pointer ${activeTab === 'Havent started' ?  'bg-green-500' : 'bg-gray-700'}`}>Havent started</div>

<div  onClick={() => handleTabChange('Comming soon')}
        className={`text-sm  px-1 text-white  cursor-pointer ${activeTab === 'Comming soon' ?  'bg-green-500' : 'bg-gray-700'}`}>Comming soon</div>

        </div>
      )}

      {type !== 'Must Watch'   && (
      <div className='flex flex-row justify-center items-center gap-4 m-2 mt-4'>
        <div className=' text-gray-300 text-md p-1'>4 titles</div>
        <div className=' text-gray-300 text-md p-1 flex flex-row justify-center items-center' onClick={handleFilterClick}>
          <div>sorted by Relevance</div>
          <IoIosArrowDown  />
          {showDropdown && (
              <div className="absolute top-0 mt-44 w-56 bg-white border rounded-md shadow-md overflow-hidden z-10">
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
        <FaFilter className='ml-auto' onClick={toggleSidebar} />
        <Filter isOpen={isSidebarOpen} onClose={toggleSidebar} />

        <div className='text-xl rotate-45'>+</div>
       
      </div>
      )}
  <div className='bg-gray-300 w-full mb-4 opacity-25 mx-4 h-[0.1rem]'></div>


  {activeTab === 'continueWatching' && renderMovies({ activeTab })}
{activeTab === "Havent started" && renderMovies({ activeTab })}
{activeTab === 'Comming soon' && renderMovies({ activeTab })}

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
        <div className="grid grid-cols-2 justify-center items-center gap-8  p-8">
     <MustStatic/>
     <MustStatic2/>
     <MustStatic3/>
     <MustStatic4/>
         </div>      
        
      )}

      {type === 'Tracking'  && (
        <div className="grid grid-rows-1 gap-2">
          {trackedData &&
            trackedData.map((track, index) => (
              <div>
              <TrackCard key={index} track={track} id={track.content_id} />
              <div className="h-2 bg-green-500" style={{ width: `${value}%` }}></div>
              </div>
            ))}
        </div>      
      )}

      {type === 'Must Watch'  && (
      <div className="flex justify-center items-center fixed w-full bottom-0">
            <div className=" mb-2 bg-blue-700 w-3/4 h-[4rem] rounded-2xl flex flex-row p-4 items-center">
              <button className="text-white text-lg">New Collection</button>
              <FaPlus size={20}   className="text-white absolute right-0  mx-20" />
            </div>
          </div>
          )}

          <Navbar/>
    </div>
  );
};

export default PlaylistDetails;
