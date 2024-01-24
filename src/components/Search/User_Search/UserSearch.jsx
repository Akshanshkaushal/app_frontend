import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../BottomBar/Navbar';
import { FaSearch } from 'react-icons/fa';
import { dumy } from '../../../assets';

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const jwttoken = localStorage.getItem('jwttoken');

  const handleInputChange = async (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() !== '') {
      try {
        const response = await axios.get(
          `https://techsnap-pe2v.onrender.com/accounts/results?query=${newQuery}`,
          {
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          }
        );
        setResults(response.data.data);
        setShowResults(true);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    } else {
      setShowResults(false);
    }
  };

  const renderResults = () => {

    return results.map((result) => (
      
      <Link to={`/profiledetails/${result.id}`} key={result.id}>
        <div  className="relative p-4 border border-gray-700 mb-2 rounded-md h-[15rem]">
      <div className=' p-2 flex flex-col justify-center items-center gap-2'>
            <img
              src={result?.profile_pic || dumy}
              alt={result.username}
              className="w-[5.5rem] h-[5rem] object-cover rounded-lg"
            />
 
          <p className="text-white">{result.username}</p>
          <p className="text-white">{result.username}</p>
         <div className='border border-red-500 rounded-lg text-red-400 px-1'> <button >Follow</button> </div>
        </div>
        </div>
      </Link>
     
    ));
  };

  return (
    <div className="bg-gray-900  text-white  ">
       <form className="text-center ">
      <div className="relative flex items-center gap-2 mt-2 pb-4 justify-center">
          <input
            type="text"
            placeholder="Search (ex: Ramesh)"
            className=" p-2 pl-8 rounded-lg text-gray-300 bg-gray-800 h-[2.5rem] "
            style={{ width: '90%' }}
            value={query}
            onChange={handleInputChange}
          />
          <FaSearch className="absolute left-8 cursor-pointer text-gray-400" />
        </div>
      
      <h1 className='text-gray-200 font-bold text-2xl flex justify-start items-start mx-12 '>Users With Similar Interests</h1>
      
        {showResults && 
        <div className="grid grid-cols-3 gap-2 mt-16">    
        {renderResults()}
        </div>}
      </form>

      <Navbar />
    </div>
  );
};

export default UserSearch;
