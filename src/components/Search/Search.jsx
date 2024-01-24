 // Search.js
import React, { useState } from 'react';
import Navbar from '../BottomBar/Navbar';
import { FaSearch } from 'react-icons/fa';
import UserSearch from './User_Search/UserSearch';
import MovieResults from './MovieSearch';

const Search = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const [showUserTab, setShowUserTab] = useState(false);

  return (
    <div className="bg-gray-900 h-screen text-white pt-4">
      <h1 className="text-center text-xl mb-2">Search</h1>

      <div className="flex flex-row absolute w-full mt-28 justify-center  bg-gray-800 h-[2rem] my-2">
        <div
          className={`cursor-pointer px-2 w-1/2 rounded-lg ${!showUserTab ? 'text-white bg-red-500' : 'text-gray-500'}`}
          onClick={() => setShowUserTab(false)}
        >
          <p className="text-xl">Movies</p>
        </div>
        <div
          className={`cursor-pointer px-2 w-1/2 rounded-lg ${showUserTab ? 'text-white bg-red-500' : 'text-gray-500'}`}
          onClick={() => setShowUserTab(true)}
        >
          <p className="text-xl">Users</p>
        </div>
      </div>
      <div>
        {showUserTab ? (
          <UserSearch />
        ) : (
          <MovieResults query={movieQuery} setQuery={setMovieQuery} />
        )}
      </div>

    

      <Navbar />
    </div>
  );
};

export default Search;
