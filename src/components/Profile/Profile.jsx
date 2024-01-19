import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./profile.css";
import { dumy } from '../../assets';
import { FaPlus, FaEllipsisV } from 'react-icons/fa';
import Navbar from '../BottomBar/Navbar';
import CreatePlaylistPopup from './PlayListPopup';
 

const titles = ['Tracking', 'Seen', 'DisLiked', 'Liked', 'Must Watch'];

const PreCard = ({ title, onClick }) => (
  
  <div className="bg-white rounded-2xl text-black p-4 m-2 shadow-md h-[2rem] w-full  flex justify-center items-center
  " style={{ background: `url(${dumy}) center/cover no-repeat`}}onClick={onClick}>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
  </div>
);

const Card = ({ title, onClick }) => (
  <div className="bg-white text-black p-4 m-2 shadow-md rounded-md h-[10rem] w-[6rem]  flex justify-center items-center" onClick={onClick}>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
  </div>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState(null);
  const [data, setData] = useState(null);
  const [playlistdata, setPlaylistData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showCreatePlaylistPopup, setShowCreatePlaylistPopup] = useState(false);

  const jwttoken = localStorage.getItem('jwttoken');
  const navigate = useNavigate();

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
        console.log(data.data.playlists)
        setPlaylistData(data.data.playlists);
        setProfileData(data.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, [jwttoken]);

  useEffect(() => {
    setIsFollowing(data?.is_following || false);
  }, [data]);

  const handleFollowClick = async () => {
    try {
      const followResponse = await fetch(`https://techsnap-pe2v.onrender.com/accounts/follow?id=${profileData?.id}`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${jwttoken}`,
        },
      });
      const followData = await followResponse.json();
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error(`Error ${isFollowing ? 'unfollowing' : 'following'} user:`, error);
    }
  };

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

  return (
    <div>
      <div className="container text-white ">
        <section className="top-bar flex flex-row m-2">
          <div>profile</div>
          <div className='flex flex-row ml-auto justify-between gap-6 items-center'>
            <FaPlus />
            <FaEllipsisV />
          </div>
        </section>
        <section className="stats">
          <div className="stats__img-holder" style={{ background: `url(${profileData?.profile_pic || dumy}) center/cover`, color: 'red' }}>
          </div>
          <div className="stats__data">
            <div className="stats__data__point">
              <div className="stats__data__point__value">{profileData?.posts || 0}</div>
              <div className="stats__data__point__description">Posts</div>
            </div>
            <div className="stats__data__point">
              <div className="stats__data__point__value">{profileData?.followers || 0} </div>
              <div className="stats__data__point__description">Followers</div>
            </div>
            <div className="stats__data__point">
              <div className="stats__data__point__value">{profileData?.following || 0}</div>
              <div className="stats__data__point__description">Following</div>
            </div>
          </div>
        </section>
        <section className="actions">
          {data && !data.is_owner && (
            <button className={`actions__btn ${isFollowing ? 'actions__btn--active' : ''}`} onClick={handleFollowClick}>
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </section>
        <section className="description">
          <h2 className="decription__title">{profileData?.username}</h2>
          <Link to="/usersearch">
            <h2 className="decription__title">User Search</h2>
          </Link>
          {data && data.is_owner && (
            <button className='text-white' onClick={() => setShowCreatePlaylistPopup(true)}>Create Playlist</button>
          )}
        </section>
        <section className="stories">
          {/* ... (stories section) ... */}
        </section>
        <section className="flex flex-row justify-between mx-4">
          <button className={`tabs__btn ${activeTab === 0 ? 'tabs__btn--active' : ''}`} onClick={() => setActiveTab(0)}>
            <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png" alt="grid icon" />
          </button>
          <button className={`tabs__btn ${activeTab === 1 ? 'tabs__btn--active' : ''}`} onClick={() => setActiveTab(1)}>
            <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png" alt="grid icon" />
          </button>
          <button className={`tabs__btn ${activeTab === 2 ? 'tabs__btn--active' : ''}`} onClick={() => setActiveTab(2)}>
            <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png" alt="grid icon" />
          </button>
    
        </section>
        {activeTab === 0 && (
          <div>
          <section className="grid grid-rows-1 mx-2 mr-4">
            {titles.map((title, index) => (
              <PreCard key={index} title={title} onClick={() => handlePlaylistClick(title)} />
            ))}
  
          </section>
          <section className="grid grid-cols-3 gap-2">
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
        )}
        <Navbar />
      </div>

       {showCreatePlaylistPopup && (
        <CreatePlaylistPopup
          onClose={() => setShowCreatePlaylistPopup(false)}
          onCreatePlaylist={handleCreatePlaylist}
        />
      )}
    </div>
  );
};

export default Profile;
