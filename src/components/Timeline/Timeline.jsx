 // TimelineItem.js

import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../BottomBar/Navbar';
import './style.css'; // Import the stylesheet

const TimelineItem = () => {
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
        setMovies(data.movies);
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
    <div className="timeline-container">
     <div className='text-xl font-bold text-white m-4' onClick={() => navigate("/timelinedetail")}>button</div>
      <div className="timeline">
        {/* Vertical line */}

       
        <div className="vertical-line"></div>

        {/* Movie section */}
        <div className="timeline-section">
          <div className='flex items-center mb-4 text-lg text-gray-300'>9/17/2021</div>
          <div className='flex flex-row overflow-x-auto overflow-y-hidden scrollb'> 
            {movies.map((item) => (
              <Link to={`/details/movie/${item.id}`} key={item.id}>
                <div className="relative  h-52 w-40  flex flex-col justify-between ">
                  <div className="movie-card ">
                    <img src={item.image_url} alt={item.title} className='w-full h-3/4 object-contain mb-4 rounded-4xl ' />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Circle for Movie section */}
          <div className="circle"></div>
        </div>

        {/* TV Shows section */}
        <div className="timeline-section">
          <div className='flex items-center mb-4 text-lg text-gray-300'>9/17/2021</div>
          <div className='flex flex-row overflow-x-auto overflow-y-hidden scrollb'> 
            {tvShows.map((item) => (
              <Link to={`/details/tvshow/${item.id}`} key={item.id}>
                <div className="relative movie-card-container h-64 w-40  flex flex-col justify-between ">
                  <div className="movie-card ">
                    <img src={item.image_url} alt={item.title} className='w-full h-3/4 object-contain mb-4 rounded-4xl ' />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Circle for TV Shows section */}
          <div className="circle"></div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default TimelineItem;
