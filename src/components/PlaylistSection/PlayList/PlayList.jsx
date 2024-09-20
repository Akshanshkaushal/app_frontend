 
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
  const { type } = useParams();
  console.log(type)

  useEffect(() => {
    // Simulating API calls with dummy data
    const dummyTrackedData = [
      { id: 1, title: 'Tracked Movie 1', poster_path: '/path/to/poster1.jpg' },
      { id: 2, title: 'Tracked Movie 2', poster_path: '/path/to/poster2.jpg' },
    ];
    setTrackedData(dummyTrackedData);

    const dummySeenData = [
      { id: 1, title: 'Seen Movie 1', poster_path: '/path/to/poster3.jpg' },
      { id: 2, title: 'Seen Movie 2', poster_path: '/path/to/poster4.jpg' },
    ];
    setSeenData(dummySeenData);

    const dummyMustWatchData = [
      { id: 1, title: 'Must Watch Movie 1', poster_path: '/path/to/poster5.jpg' },
      { id: 2, title: 'Must Watch Movie 2', poster_path: '/path/to/poster6.jpg' },
    ];
    setMustWatchData(dummyMustWatchData);

    const dummyLikedData = [
      { id: 1, title: 'Liked Movie 1', poster_path: '/path/to/poster7.jpg' },
      { id: 2, title: 'Liked Movie 2', poster_path: '/path/to/poster8.jpg' },
    ];
    setLikedData(dummyLikedData);

    const dummyPlaylistData = [
      { id: 1, title: 'Playlist Movie 1', poster_path: '/path/to/poster9.jpg' },
      { id: 2, title: 'Playlist Movie 2', poster_path: '/path/to/poster10.jpg' },
    ];
    setPlaylistData(dummyPlaylistData);
  }, [type]);

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

