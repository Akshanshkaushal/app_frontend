// MovieResults.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSearch } from 'react-icons/fa';
import Filter from '../PlaylistSection/PlayList/Filter';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { dummyMovies, dummyTvShows } from '../../dummyData';

const MovieResults = ({ query, setQuery }) => {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMovieSearch = (newQuery) => {
    setQuery(newQuery);

    if (newQuery.trim() !== '') {
      // Filter dummy data based on the search query
      const filteredResults = [...dummyMovies, ...dummyTvShows].filter(item =>
        item.title.toLowerCase().includes(newQuery.toLowerCase())
      );
      setResults(filteredResults);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const renderResults = () => {
    return results.map((result) => (
      <Link to={`/details/${result.content_type}/${result.id}`} key={result.id}>
        <div
          className="relative p-4 border border-gray-700 mb-2 rounded-md h-[18rem]"
          style={{ background: `url(${result.poster_path}) top/contain no-repeat` }}
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
          <FaSearch className="absolute left-6 cursor-pointer text-gray-400" />
          <div className="  text-left">
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer  absolute right-12 top-3" onClick={handleFilterClick} />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md overflow-hidden z-10">
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
          <FaFilter className='ml-auto absolute right-8 cursor-pointer text-gray-400' onClick={toggleSidebar} />
        <Filter isOpen={isSidebarOpen} onClose={toggleSidebar} />
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
