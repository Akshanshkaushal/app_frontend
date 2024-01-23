import React, { useEffect, useState } from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import { IoIosArrowDropdown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export default function Heading() {

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
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

  return (
    <div className='flex flex-col justify-center gap-2 text-white mx-2 pt-2 p-1'>
    <div className='font-bold text-xl'>New TV Shows On</div>
    <div className='flex flex-row gap-2 items-center bg-gray-700 p-1 rounded-lg' style={{width:"40%"}}>
        <div className='font-bold text-xl '>Every Service</div>
        <IoIosArrowDropdown/>
    </div> 

<div className='flex flex-col justify-center my-4 '>
    <div className=''>New TV Shows</div>
    <p className='text-sm text-gray-300'>djwlddlkdll</p>
</div>
    <div className='flex flex-row justify-center gap-4'>
        <div className='border  rounded-md py-[0.1rem] px-2 flex flex-row items-center gap-2 ml-auto'>
            <div>filter</div>
            <IoIosArrowDropdown/>
        </div>
        <div className='border  rounded-md px-2 py-[0.1rem] flex flex-row items-center gap-2'>
            <div>SORT BY DEFAULT</div> 
            <IoIosArrowDropdown/>
        </div>
        <div className='flex flex-col justify-start items-start'>
        <div className='text-sm text-gray-300'>VIEW:GRID</div>
        <div className='flex flex-row items-start justify-start '>
            <FaMoneyBill size={20} className='rounded-md  '/>
            <FaMoneyBill size={20}/>
        </div>
        </div>
    </div>


    <div className="grid grid-cols-3 gap-2 ">
        { 
          movies.map((item) => (
            <div key={item.id} className="movie-card rounded-lg">
              <img src={item.image_url} alt={item.title} className='rounded-lg' />
              <h3 className='text-gray-300 text-sm'>{item.title}</h3>
            </div>
           
          ))}
 
      </div>

    </div>
  )
}
