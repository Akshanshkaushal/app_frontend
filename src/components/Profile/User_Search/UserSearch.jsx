import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../BottomBar/Navbar';

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
        <div className="flex flex-row gap-2 justify-center items-center rounded-full h-[4rem]">
          <p className="text-white">{result.username}</p>
          <p className="text-white">{result.email}</p>
          {result.profile_pic && (
            <img
              src={result.profile_pic}
              alt={result.username}
              className="w-full h-[10rem] object-cover"
            />
          )}
        </div>
      </Link>
     
    ));
  };

  return (
    <div className="bg-gray-900 h-screen text-white py-4">
      <h1 className="text-center text-2xl mb-8">User Search</h1>
      <form className="text-center mb-8">
 
        <input
          type="text"
          id="query"
          name="query"
          value={query}
          onChange={handleInputChange}
          required
          className="bg-gray-800 text-white p-2 rounded-md w-3/4"
        />
        {showResults && 
        <div className="grid grid-cols-1">
        {renderResults()}
        </div>}
      </form>

      <Navbar />
    </div>
  );
};

export default UserSearch;
