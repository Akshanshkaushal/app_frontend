 
import React, { useState, useEffect } from 'react';
import PlaylistDetails from "./PlayListDetails";
import { useParams } from 'react-router-dom';
import CustomPlaylist from './CustomPlaylist';

 

const PlaylistPage = () => {
  const [playlistData, setPlaylistData] = useState(null);
  const [trackedData, setTrackedData] = useState(null);
  const [seenData, setSeenData] = useState(null);
  const [mustWatchData, setMustWatchData] = useState(null);
  const [likedData, setLikedData] = useState(null);
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

  useEffect(() => {
    const fetchSeenData = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/movies/your_playlist/?type=Seen`, {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setSeenData(data.data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchSeenData();
  }, [jwttoken]);


  useEffect(() => {
    const fetchMustData = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/movies/your_playlist/?type=Must Watch`, {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setMustWatchData(data.data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchMustData();
  }, [jwttoken]);

  useEffect(() => {
    const fetchLikedData = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/movies/your_playlist/?type=Liked`, {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setLikedData(data.data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchLikedData();
  }, [jwttoken]);

  return (
    <div>
      {type !== 'Seen' && type !== 'Must Watch'  && type !== 'Liked' && type !== 'Tracking' && 
        playlistData && <CustomPlaylist playlistData={playlistData} trackedData={trackedData} type={type}       
      />}
     {type === 'Seen' && seenData && <PlaylistDetails playlistData={seenData} trackedData={trackedData} type={type} />}
      {type === 'Must Watch' && mustWatchData && <PlaylistDetails playlistData={mustWatchData} trackedData={trackedData} type={type} />}
      {type === 'Liked' && likedData && <PlaylistDetails playlistData={likedData} trackedData={trackedData} type={type} />}
      {type === 'Tracking'   && <PlaylistDetails trackedData={trackedData} type={type} />}
    </div>
  );
};

export default PlaylistPage;
