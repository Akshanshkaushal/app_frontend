import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../BottomBar/Navbar';
import './style.css'; // Import the stylesheet

export default function TimelineDetail() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const months = [
    'JAN', 'FEB', 'MAR', 'APR',
    'MAY', 'JUN', 'JUL', 'AUG',
    'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const generateWeeks = () => {
    let weeks = [];
    for (let i = 1; i <= 4; i++) {
      weeks.push(`${i + (months.indexOf(selectedMonth) * 4)}`);
    }
    return weeks;
  };

  const weeksInMonth = selectedMonth ? generateWeeks() : [];
  const sampleMovies = [
    { title: 'Movie 1', releaseDate: '2024-01-01' },
    { title: 'Movie 2', releaseDate: '2024-01-02' },
    { title: 'Movie 3', releaseDate: '2024-01-03' },
  ];

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    // Reset selectedWeek when a new month is clicked
    setSelectedWeek(null);
  };

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
    // You can use the selectedMonth and selectedWeek to filter movies from your data source
  };


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
    <div className=" text-white flex flex-col justify-center">
      <div className=" flex flex-col justify-center">
      <div className='bg-gray-300 w-full opacity-50 h-[0.1rem]'></div>
        <div className="mx-2 ">{currentYear}</div>
        <div className='flex mx-2 flex-row overflow-x-auto overflow-y-hidden scrollb  '>
        {months.map((month, index) => (
          <button
            key={index}
            className={` pr-4 pt-1 rounded ${
              selectedMonth === month ? 'text-blue-500' : 'text-gray-200'
            }`}
            onClick={() => handleMonthClick(month)}
          >
            {month}
          </button>
        ))}
        </div>
      </div>
      <div className='bg-gray-300 w-full opacity-50 h-[0.1rem]'></div>


      {selectedMonth && (
        <div className="mx-2">
        <div className='flex flex-row overflow-x-auto overflow-y-hidden scrollb  '>

           {weeksInMonth.map((week, index) => (
            <button
              key={index}
              className={`pr-4 pb-1 rounded  ${
                selectedWeek === week ?  'text-blue-500' : 'text-gray-200'
              }`}
              onClick={() => handleWeekClick(week)}
            >
              Week {week}
            </button>
          ))}
        </div>
        </div>
      )}
      <div className='bg-gray-300 w-full opacity-50 h-[0.1rem]'></div>


      {selectedWeek && (
        <div className='mx-2'>
 <div className='text-3xl my-2  font-bold'>26 jan - 01 Feb 2024</div>
 <div className='grid grid-cols-2 gap-2 my-4'> 
            {movies.map((item) => (
              <Link to={`/details/movie/${item.id}`} key={item.id}>
                <div className="relative  w-48  flex flex-col ">
                  <div className="movie-card ">
                    <img src={item.image_url} alt={item.title} className='w-full h-3/4 object-contain  rounded-xl ' />
                    <div>{item.title}</div>
                     
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
