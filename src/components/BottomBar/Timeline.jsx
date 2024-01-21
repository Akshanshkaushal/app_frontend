import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

export default function  Timeline() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [activeTab, setActiveTab] = useState('movies');
  const [error, setError] = useState(null);

  const jwttoken = localStorage.getItem('jwttoken');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://techsnap-pe2v.onrender.com//movies/upcoming/', {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
console.log(data)
         setMovies(data.movies);
        console.log(data.movies)
        console.log(data.tv_shows)
        setTvShows(data.tv_shows);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, [jwttoken]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
 
      <div className="mb-4">
           <div className='flex flex-row justify-center mb-4  items-center bg-gray-800 w-full h-[4rem]'>
    <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={()=>navigate("/home")}/>
       <h3 className="text-3xl font-bold text-white ">Timeline</h3>
       </div>
      <div className='flex flex-row justify-center text-2xl mb-6 items-center gap-6 w-full'>
      <button
          className={`flex justify-start items-center ${activeTab === 'movies' ? 'text-blue-500' : 'text-white'}`}
          onClick={() => setActiveTab('movies')}
        >
          Movies
        </button>
        <button
          className={` ${activeTab === 'tv' ? 'text-blue-500' : 'text-white'}`}
          onClick={() => setActiveTab('tv')}
        >
          TV Shows
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 mx-2">
        {activeTab === 'movies' &&
          movies.map((item) => (
            <Link to={`/details/movie/${item.id}`} key={item.id}>
            <div key={item.id} className="movie-card">
              <img src={item.image_url} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
            </Link>
          ))}

        {activeTab === 'tv' &&
          tvShows.map((item) => (
            <Link to={`/details/tv/${item.id}`} key={item.id}>
            <div key={item.id} className="movie-card">
              <img src={item.image_url} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
