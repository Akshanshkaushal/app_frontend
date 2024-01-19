 // MovieSearch.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../BottomBar/Navbar';

const MovieSearch = () => {
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
          `https://techsnap-pe2v.onrender.com/movies/search/?query=${newQuery}`,{
            headers: {
              Authorization: `Token ${jwttoken}`,
            }
          }
        );
        setResults(response.data.results);
   
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
    <div className="bg-gray-900 h-screen text-white py-4">
      <h1 className="text-center  text-xl mb-8">Movie and Web Series Search</h1>
      <form className="text-center mb-8">
        <input
          type="text"
          id="query"
          name="query"
          value={query}
          onChange={handleInputChange}
          required
          className="bg-gray-800 text-white p-2 rounded-xl w-3/4"
        />
        {showResults && (
          <div className="grid grid-cols-2 mt-6 gap-2">
            {/* cards */}
            {renderResults()}
          </div>
        )}
      </form>

      <Navbar/>
    </div>
  );
};

export default MovieSearch;
