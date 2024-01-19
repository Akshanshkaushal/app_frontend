import React, { useEffect, useState } from 'react'
import CreatePlaylistPopup from './PlayListPopup';
import { useNavigate } from 'react-router-dom';
import { dumy } from '../../assets';
import { FaBars, FaCross, FaPlus, FaSearch, FaSort, FaTv } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

const titles = ['Tracking', 'Seen', 'Liked', 'Must Watch'];
const cardColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'];

const PreCard = ({ title, onClick }) => (
  
  <div className=" relative  text-white font-semibold p-4 m-1 shadow-md h-[8rem]  w-full  flex justify-center items-center
  " style={{ backgroundColor: cardColors[titles.indexOf(title)] }} onClick={onClick}>
    <h3 className="text-lg font-bold mb-2 absolute left-2 top-2 p-2">{title}</h3>
  </div>
);

const Card = ({ title, onClick }) => (
  <div className=" text-white p-4 m-4  shadow-md rounded-md h-[3rem] w-full flex items-center gap-4" onClick={onClick}>
  <FaTv size={50}/>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
  </div>
);

export default function Platlists() {

    const [data, setData] = useState(null);
    const [playlistdata, setPlaylistData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
  
    const [showCreatePlaylistPopup, setShowCreatePlaylistPopup] = useState(false);

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
            setPlaylistData(data.data.playlists);  
          } catch (error) {
            console.error('Error fetching profile data:', error);
          }
        };
    
        fetchData();
      }, [jwttoken,handleCreatePlaylist]);

  return (
    <div className=' overflow-x-hidden'> 
    <div className='flex flex-col h-screen '>
     <div className='flex flex-row justify-center items-center m-2 mb-12'>
     <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={() => navigate("/home")}/>
      <div className='text-white font-bold text-xl'>Collections</div>
     </div>

     <div className='text-lg text-white font-semibold m-2'>Default Collections</div>
          <section className="grid grid-cols-2 gap-4 mx-2 mr-4">
            {titles.map((title, index) => (
              <PreCard key={index} title={title} onClick={() => handlePlaylistClick(title)} />
            ))}
  
          </section>
 
         {/* searchbar  */}
         <div  className='text-lg text-white font-semibold mt-4 m-2' >your Collections</div>
         <div className="relative flex items-center gap-2 mt-2 justify-center">
    
          <input
            type="text"
            placeholder="Search Collections"
            className="border-2 p-2 rounded-sm h-[3rem] w-3/4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
               <FaSearch className="absolute right-4 text-gray-500 cursor-pointer" />
       
          <FaBars className="text-gray-500 cursor-pointer" />
        </div>

<div className=''>
          <section className="grid grid-rows-1 w-full gap-2 mt-4 ">
          {playlistdata &&
            playlistdata.map((playlist, index) => (
        <Card
          key={index}
          title={playlist.title}
          onClick={() => handlePlaylistClick(playlist.title)}
        />
      ))}
      </section>
      </div>

      {data && data.is_owner && (
        <div className='flex justify-center items-center'>
        <div className='fixed bottom-0 mb-6 bg-blue-700 w-3/4 h-[4rem] rounded-2xl flex flex-row p-4 items-center'>
            <button className='text-white text-lg' >New Collection</button>
            <FaPlus size={20} onClick={() => setShowCreatePlaylistPopup(true)} className='text-white absolute right-0 mx-4'/>
            </div>
            </div>
          )}
</div>
          {showCreatePlaylistPopup && (
            
        <CreatePlaylistPopup
          onClose={() => setShowCreatePlaylistPopup(false)}
          onCreatePlaylist={handleCreatePlaylist}
        />
      )}
    </div>
  )
}
