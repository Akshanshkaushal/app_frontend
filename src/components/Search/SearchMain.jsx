import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dumy, postimg1, postimg2, postimg3, postimg4, postimg5, postimg6, postimg7 } from '../../assets';
import "./style.css";
import Navbar from '../BottomBar/Navbar';
import { FaSearch } from 'react-icons/fa';

export default function SearchMain() {
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
    <div className="">
      <div className="flex flex-col overflow-x-auto gap-0 scrollb  ">

      <Slider {...sliderSettings} className=''>
        <div className='h-56'>
        <div className='relative'>
        <img src={postimg1} alt="Slider Image 1" className="w-full h-full object-contain " />
           </div>  
        </div>
        <div className='h-56'>
        <div className='relative'>
        <img src={postimg2} alt="Slider Image 1" className="w-full h-56 object-cover " />
           </div>  
        </div>
 
      </Slider>

      <div className="relative flex items-center gap-2 mb-1 mt-2 justify-center">
          <input
            type="text"
            placeholder="Search"
            className=" p-2 pl-8 rounded-lg text-gray-300 text-xl bg-[#1a202c] h-[2.5rem] "
            style={{ width: '90%' }}
            onClick={() => navigate("/moviesearch")} 
          />
          <FaSearch className="absolute left-8 cursor-pointer text-gray-400" />
        </div>

      <div className='flex flex-row text-xl text-gray-200 gap-2 mx-4 mb-2'> 
      <div className='flex flex-row justify-center items-center' onClick={() => navigate("/heading")} >
      <div>Top 10 Movies and TV</div>
      <IoIosArrowForward size={20} className='text-white mx-2' onClick={() => navigate("/home")} />
      </div>
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


<div className=' flex flex-row text-xl text-gray-200 gap-2 mx-4 mb-2'> 
      <div>Trending movies</div>
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
<Navbar/>
    </div>
  );
}
