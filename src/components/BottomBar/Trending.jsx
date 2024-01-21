import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dumy } from '../../assets';
import "./Trending.css";

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [activeTab, setActiveTab] = useState('movies');
  const [error, setError] = useState(null);

  const jwttoken = localStorage.getItem('jwttoken');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://techsnap-pe2v.onrender.com/movies/trending/', {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.trending_movies);
        setTvShows(data.trending_series);
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  // Hide arrows
  };


  return (
    <div className="mb-4">
      <div className="flex flex-col overflow-x-auto gap-0 scrollb  ">

      <Slider {...sliderSettings} className='m-4'>
 
        <div className='h-56'>
        <div className='relative'>
        <img src={dumy} alt="Slider Image 1" className="w-full h-48 object-cover rounded-lg" />
          <div className="text-gray-200 absolute bottom-20 text-xl mx-2">Heading</div>
          <div className="text-gray-300 absolute bottom-12 text-md mx-2">Text</div>
          <div className='bg-green-500 flex flex-row absolute top-0 w-full rounded-lg'>
         <div className='bg-black px-2 m-1 text-white mx-2 rounded-md'>TV</div>
         <div className='ml-auto mx-2 text-white m-1' >Subscribe To Watch</div>
         <div className='bg-black px-2 m-1 text-white mr-2 rounded-md'>tv</div>
        </div>
          </div>
          <div className='bg-gray-600 gap-2 flex flex-row absolute bottom-3 mx-4 opacity-80 rounded-md p-1 pl-2 pr-16 text-white'>
          <div className='bg-black px-1 '>tv+</div>
          <div className='text-xl'>Play on Apple TV+</div>
        </div>
    
        </div>
     
        <div>
        </div>
    
      </Slider>


      <div className='flex flex-row text-gray-200 gap-2 mx-4 mb-2'> 
      <div>popular tv shows</div>
      <IoIosArrowForward size={20} className='text-white mx-2' onClick={() => navigate("/home")} />
            </div>
      <div className='flex flex-row overflow-x-auto overflow-y-hidden scrollb'> 
  {movies.map((item) => (
    <Link to={`/details/movie/${item.id}`} key={item.id}>
      <div className="relative movie-card-container h-64 w-40  flex flex-col justify-between ">
        <div className="movie-card ">
          <img src={item.image_url} alt={item.title} className='w-full h-3/4 object-contain mb-4 rounded-4xl ' />
        </div>
        <h3 className='absolute bottom-8 left-4  text-gray-200 text-md'>{item.title}</h3>

      </div>
    </Link>
    
  ))}
</div>


<div className='flex flex-row text-gray-200 gap-2 mx-4 mb-2'> 
      <div>popular tv shows</div>
      <IoIosArrowForward size={20} className='text-white mx-2 ' onClick={() => navigate("/home")} />
            </div>
      <div className='flex flex-row overflow-x-auto overflow-y-hidden scrollb'> 
  {movies.map((item) => (
    <Link to={`/details/movie/${item.id}`} key={item.id}>
      <div className="relative movie-card-container h-64 w-40  flex flex-col justify-between ">
        <div className="movie-card ">
          <img src={item.image_url} alt={item.title} className='w-full h-3/4 object-contain mb-4 rounded-4xl ' />
        </div>
        <h3 className='absolute bottom-8 left-4  text-gray-200 text-md'>{item.title}</h3>

      </div>
    </Link>
    
  ))}
</div>






</div>  
    </div>
  );
}
