import React, { useEffect, useState } from 'react';
import CreatePlaylistPopup from './PlayListPopup';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaCross, FaPlus, FaSearch, FaSort, FaTv } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import Navbar from '../BottomBar/Navbar';

const titles = ['Tracking', 'Seen', 'Liked', 'Must Watch'];
const cardColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'];

const PreCard = ({ title, onClick }) => (
  <div
    className="relative text-white font-semibold p-4 m-1 shadow-md h-[8rem]  w-full  flex justify-center items-center"
    style={{ backgroundColor: cardColors[titles.indexOf(title)] }}
    onClick={onClick}
  >
    <h3 className="text-lg font-bold mb-2 absolute left-2 top-2 p-2">{title}</h3>
  </div>
);

const Card = ({ title, onClick }) => (
  <div className="text-white p-4 m-4 shadow-md rounded-md h-[3rem] w-full flex items-center gap-4" onClick={onClick}>
    <FaTv size={50} />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
  </div>
);

export default function Platlists() {
  const [data, setData] = useState(null);
  const [playlistdata, setPlaylistData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreatePlaylistPopup, setShowCreatePlaylistPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortType, setSortType] = useState('');

  const navigate = useNavigate();
  const jwttoken = localStorage.getItem('jwttoken');

  const handlePlaylistClick = (playlistType) => {
    navigate(`/playlist/${playlistType}`);
  };

  const handleCreatePlaylist = async (playlistData) => {
    try {
      const createPlaylistResponse = await fetch('https://techsnap-pe2v.onrender.com/movies/create_playlist/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${jwttoken}`,
        },
        body: JSON.stringify(playlistData),
      });

      const createPlaylistData = await createPlaylistResponse.json();
      console.log(createPlaylistData);

      // Close the popup after creating the playlist
      setShowCreatePlaylistPopup(false);
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  const handleSortTypeChange = (type) => {
    setSortType(type);
    setShowDropdown(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://techsnap-pe2v.onrender.com/accounts/profile', {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });
        const data = await response.json();
        setData(data);
        let playlists = data.data.playlists;
        console.log(playlists)

    
        switch (sortType) {
          case 'alphabetical':
            playlists = playlists.sort((a, b) => a.title.localeCompare(b.title));
            break;
            case 'movieCount':
              playlists = playlists.sort((a, b) => b.movie_count - a.movie_count);
              break;
          case 'dateCreation':
            playlists = playlists.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            break;
          default:
            break;
        }

        setPlaylistData(playlists);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, [jwttoken,  sortType]);

  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className=" overflow-x-hidden">
      <div className="flex flex-col h-screen ">
        <div className="flex flex-row justify-center items-center m-2 mb-12">
          <IoIosArrowBack size={20} className="text-white absolute left-0 mx-2" onClick={() => navigate('/home')} />
          <div className="text-white font-bold text-xl">Collections</div>
        </div>

        {data && data.is_owner &&   (
          <div className="flex justify-center items-center">
            <div className=" mb-2 bg-blue-700 w-3/4 h-[4rem] rounded-2xl flex flex-row p-4 items-center">
              <button className="text-white text-lg">New Collection</button>
              <FaPlus size={20} onClick={() => setShowCreatePlaylistPopup(true)} className="text-white absolute right-0  mx-20" />
            </div>
          </div>
        )}

        <div className="text-lg text-white font-semibold m-2">Default Collections</div>
        <section className="grid grid-cols-2 gap-4 mx-2 mr-4">
          {titles.map((title, index) => (
            <PreCard key={index} title={title} onClick={() => handlePlaylistClick(title)} />
          ))}
        </section>

        {/* searchbar  */}
        <div className="text-lg text-white font-semibold mt-4 m-2">Your Collections</div>
        <div className="relative flex items-center gap-2 mt-2 justify-center">
          <input
            type="text"
            placeholder="Search Collections"
            className="border-2 p-2 rounded-sm h-[3rem] w-3/4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-4 text-gray-500 cursor-pointer" />
          <div className="relative inline-block text-left">
            <FaBars className="text-gray-500 cursor-pointer" onClick={handleFilterClick} />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md overflow-hidden z-10">
                <div className="py-1">
                  <button
                    onClick={() => handleSortTypeChange('alphabetical')}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort Alphabetically
                  </button>
                  <button
                    onClick={() => handleSortTypeChange('movieCount')}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort by Movie Count
                  </button>
                  <button
                    onClick={() => handleSortTypeChange('dateCreation')}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort by Date of Creation
                  </button>
                </div>
              </div>
            )}
          </div>
         </div>

        <div className="">
          <section className="grid grid-rows-1 w-full gap-2 mt-4 ">
            {playlistdata &&
              playlistdata.map((playlist, index) => (
                <Card key={index} title={playlist.title} onClick={() => handlePlaylistClick(playlist.title)} />
              ))}
          </section>
        </div>
     
      </div>
      {showCreatePlaylistPopup && (
        <CreatePlaylistPopup onClose={() => setShowCreatePlaylistPopup(false)} onCreatePlaylist={handleCreatePlaylist} />
      )}
<Navbar/>
    
    </div>

  );
}
