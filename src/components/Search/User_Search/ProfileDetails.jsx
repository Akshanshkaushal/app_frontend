import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaEllipsisV } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Navbar from '../../BottomBar/Navbar';
import { dumy } from '../../../assets';

const titles = ['Tracked', 'Seen', 'DisLiked', 'Liked', 'Must Watch'];

const Card = ({ title, onClick }) => (
  <div className="bg-white text-black p-4 m-2 shadow-md rounded-md" onClick={onClick}>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
  </div>
);

const ProfileDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState(null);
  const [data, setData] = useState(null);

  const jwttoken = localStorage.getItem('jwttoken');
  const navigate = useNavigate();
  const { userId } = useParams();

  const [isFollowing, setIsFollowing] = useState(() => {
    const storedIsFollowing = JSON.parse(localStorage.getItem(`isFollowing_${userId}`));
    return storedIsFollowing || false;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/accounts/profile?id=${userId}`, {
          headers: {
            Authorization: `Token ${jwttoken}`,
          },
        });
        const data = await response.json();
        setData(data);
        setProfileData(data.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, [jwttoken, userId]);



  const handleFollowClick = async () => {
    try {
      const followResponse = await fetch(`https://techsnap-pe2v.onrender.com/accounts/follow?id=${profileData?.id}`, {
        method: 'GET',  
        headers: {
          Authorization: `Token ${jwttoken}`,
        },
      });
      const followData = await followResponse.json();
      console.log(followData);
 
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error(`Error ${isFollowing ? 'unfollowing' : 'following'} user:`, error);
    }
  };

  useEffect(() => {
    localStorage.setItem(`isFollowing_${userId}`, JSON.stringify(isFollowing));
  }, [isFollowing, userId]);

  const handlePlaylistClick = (playlistType) => {
    navigate(`/playlist/${playlistType}`);
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
              {!isFollowing ? 'Follow' : 'Unfollow'}
            </button>
          )}
        </section>
        <section className="description">
          <h2 className="decription__title">{profileData?.username}</h2>
          <Link to="/usersearch">
            <h2 className="decription__title">User Search</h2>
          </Link>
          <p>
            {profileData?.about || "No description available."}
          </p>
        </section>
        <section className="stories"> 
          {/* Your stories section */}
        </section>
        <section className="flex flex-row justify-between mx-4">
          {/* Your tab buttons */}
        </section>
        {activeTab === 1 && (
          <section className="grid">
            <div className="grid grid-cols-2 gap-4 mt-4 mx-8 text-black">
              {titles.map((title, index) => (
                <Card key={index} title={title} onClick={() => handlePlaylistClick(title)} />
              ))}
            </div>
          </section>
        )}
        <Navbar/>
      </div>
    </div>
  );
};

export default ProfileDetails;
