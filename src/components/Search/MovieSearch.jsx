// MovieResults.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const MovieResults = ({ query, setQuery }) => {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const jwttoken = localStorage.getItem('jwttoken');

  const handleMovieSearch = async (newQuery) => {
    setQuery(newQuery);

    if (newQuery.trim() !== '') {
      try {
        const response = await axios.get(
          `https://techsnap-pe2v.onrender.com/movies/search/?query=${newQuery}`,
          {
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          }
        );
        setResults(response.data.results);
        setShowResults(true);
      } catch (error) {
        console.error('Error fetching movie results:', error);
      }
    } else {
      setShowResults(false);
    }
  };

  const renderResults = () => {
    return results.map((result) => (
      <Link to={`/details/${result.content_type}/${result.id}`} key={result.id}>
        <div
          className="relative p-4 border border-gray-700 mb-2 rounded-md h-[18rem]"
          style={{ background: `url(${result.poster_url}) top/contain no-repeat` }}
        >
          <p className="absolute bottom-0 left-0 text-sm h-[3rem] text-black bg-white bg-opacity-75 w-full">
            {result.title}
          </p>
        </div>
      </Link>
    ));
  };

  return (
    <div>
      <form className="text-center ">
        <div className="relative flex items-center  gap-2 mt-2 pb-4   justify-center">
          <input
            type="text"
            placeholder="Search"
            className=" p-2 pl-8 rounded-lg text-gray-300 bg-gray-800 h-[2.5rem] "
            style={{ width: '90%' }}
            value={query}
            onChange={(e) => handleMovieSearch(e.target.value)}
          />
          <FaSearch className="absolute left-8 cursor-pointer text-gray-400" />
        </div>

        <h1 className='text-gray-200 font-bold text-2xl flex justify-start items-start mx-12 '>Movies</h1>

        {showResults && (
          <div className="grid grid-cols-3 mt-32 gap-2">
            {/* cards */}
            {renderResults()}
          </div>
        )}
      </form>
    </div>
  );
};

export default MovieResults;
