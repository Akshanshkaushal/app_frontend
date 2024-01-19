 
import React, { useState, useEffect } from 'react';
import PlaylistDetails from "./PlayListDetails";
import { useParams } from 'react-router-dom';

 

const PlaylistPage = () => {
  const [playlistData, setPlaylistData] = useState(null);
  const [trackedData, setTrackedData] = useState(null);
  const jwttoken = localStorage.getItem('jwttoken');
  const { type } = useParams();
  console.log(type)

  
  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch(` https://techsnap-pe2v.onrender.com/movies/get_tracked/`, {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });
        const data = await response.json();
        console.log(data.data);
        setTrackedData(data.data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchPlaylistData();
  }, [type, jwttoken]);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/movies/your_playlist/?type=${type}`, {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setPlaylistData(data.data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchPlaylistData();
  }, [type, jwttoken]);

  return (
    <div>
      {playlistData && <PlaylistDetails playlistData={playlistData} trackedData={trackedData} type={type}
        
      />}
    </div>
  );
};

export default PlaylistPage;
