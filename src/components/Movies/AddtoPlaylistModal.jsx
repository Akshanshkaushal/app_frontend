import React from 'react';
import { dumy } from '../../assets';
const jwttoken = localStorage.getItem('jwttoken');

const PreCard = ({ title, onClick, bg }) => (
  <div
    className="bg-white rounded-2xl text-black p-4 m-2 shadow-md h-[5rem] w-full flex justify-center items-center"
    style={{ background: `url(${bg || dumy}) center/cover no-repeat` }}
    onClick={onClick}
  >
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
  </div>
);

const AddToPlaylistModal = ({ onClose, playlists, id, type }) => {
  const handlePlaylistClick = async (playlistId) => {
    console.log(playlistId)
    console.log(id)
    console.log(type)
    const apiUrl = `https://techsnap-pe2v.onrender.com/movies/add_to_playlist/?movie_id=${id}&type=${type}&playlist_id=${playlistId}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          },
   
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // Handle the API response as needed
      console.log(data);
    } catch (error) {
      // Handle errors during the API call
      console.error('Error:', error);
    }
  };

  return (
    <div className="modal fixed inset-0 bg-black">
      <div className="modal-content">
        <span className="close text-white text-3xl" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-white">Add to Playlist</h2>
        <section>
          {playlists.map((playlist, index) => (
            <PreCard
              key={index}
              title={playlist.title}
              bg={playlist.playlist_cover}
              onClick={() => handlePlaylistClick(playlist.id)}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default AddToPlaylistModal;
