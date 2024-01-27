import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./profile.css";
import { dumy, postimg1, postimg2, postimg3, postimg4, postimg5, postimg6, postimg7 } from '../../assets';
import { FaPlus, FaEllipsisV, FaCross, FaCut, FaRing, FaPlay } from 'react-icons/fa';
import Navbar from '../BottomBar/Navbar';
import CalendarComponent from './Calender';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState(null);
  const [data, setData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const jwttoken = localStorage.getItem('jwttoken');

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
        console.log(data.data.playlists);
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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const MovieCard = ({ size,img }) => {
    return (
      <div>
        <img src={img} className={`rounded-4xl ${size ? `h-[${size}rem]` : ''}`} alt="Post Image" />
      </div>
    );
  };

  const MovieCard2 = ({ size,img }) => {
    return (
      <div>
        <img src={img} className={` ${size ? `h-[${size}rem]` : ''}`} alt="Post Image" />
      </div>
    );
  };

  const MovieCardreel = ({ size,img }) => {
    return (
      <div
      className=''
        style={{
    position: 'relative',
    height: size ? `${size}rem` : '',
    background: `url(${img}) center/cover no-repeat`,
  }}
      >
        
        <div className='flex flex-row items-center justify-center absolute bottom-2 left-2'>
          <FaPlay size={10}/>
          <p className='text-gray-100 text-sm'>2,658</p>
        </div>
      </div>
    );
  };
  
  const MovieLayout = () => {
    return (
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div className='flex flex-col gap-4 '>
          <MovieCard img={postimg1}/>
          <MovieCard img={postimg2}/>
          <MovieCard img={postimg3}/>
          <MovieCard img={postimg4}/>
        </div>
        <div className='flex flex-col gap-4 '>
          <MovieCard size={20} img={postimg5}/>
          <MovieCard size={20} img={postimg4}/>
          <MovieCard size={20} img={postimg2}/>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="  text-white flex flex-col">
        <section className="bg-white top-bar flex flex-row  text-black ">
        
          <div className='flex flex-row ml-auto justify-between gap-6 items-center'>
            <FaRing onClick={() => navigate("/settings")} />
            <FaEllipsisV onClick={toggleDropdown} />
          </div>
        </section>
 
        {/* <section className="stats">
          <div className="stats__img-holder" style={{ background: `url(${profileData?.profile_pic || dumy}) center/cover`, color: 'red' }}>
          </div>
          <div className="stats__data">
            <div className="stats__data__point">
              <div className="stats__data__point__value">{profileData?.posts || 0}</div>
              <div className="stats__data__point__description">Posts</div>
            </div>
            <div className="stats__data__point">
              <div className="stats__data__point__value" onClick={() => navigate("/follow")} >{profileData?.followers || 0} </div>
              <div className="stats__data__point__description">Followers</div>
            </div>
            <div className="stats__data__point">
              <div className="stats__data__point__value" onClick={() => navigate("/following")} >{profileData?.following || 0}</div>
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
        </section> */}

<div className='h-[35rem] bg-white rounded-b-4xl px-2 pt-2'>
<div className='flex relative w-full flex-col h-[28rem] rounded-4xl p-2 pt-4 items-center'
        style={{ background: `url(${dumy}) center/contain`  }}
>
 <div className='flex flex-row items-center justify-start gap-8 '>
 <div className='border p-2 px-12  rounded-xl bg-white text-black'><button>Follow</button></div>
 <div className='border p-2 px-12  rounded-xl'><button>Message</button></div>
 </div>
 <div className='flex flex-col absolute bottom-6 left-4'>
 <h1 className=' text-5xl font-bold'>Karla<br/>black</h1>
 <p className='text-sm text-gray-100'>san Francisco California</p>
 <p className='text-md text-gray-200'> bdjjdnkwjdlwkdlkwldkwldmw dnkwmdlwqkdlkdldkwdklw dnkqwmdlwkdlkdkwdklw</p>
</div>
  </div>
  <div className='flex flex-row items-center justify-center gap-16 mt-10'>
  <div className='flex flex-col items-center justify-center gap-0' onClick={() => navigate("/follow")}>
    <h1 className='text-black font-bold text-3xl'>351</h1>
    <p className='text-gray-400 text-sm' >followers</p>
  </div>
  <div className='flex flex-col items-center justify-center gap-0 '  onClick={() => navigate("/following")} >
    <h1 className='text-black font-bold text-3xl'>351</h1>
    <p className='text-gray-400 text-sm'>following</p>
  </div>
  <div className='flex flex-col items-center justify-center gap-0'>
    <h1 className='text-black font-bold text-3xl'>351</h1>
    <p className='text-gray-400 text-sm'>Posts</p>
  </div>
</div>
</div>






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
          <button className={`tabs__btn ${activeTab === 3 ? 'tabs__btn--active' : ''}`} onClick={() => setActiveTab(3)}>
            <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png" alt="grid icon" />
          </button>
          <button className={`tabs__btn ${activeTab === 4 ? 'tabs__btn--active' : ''}`} onClick={() => setActiveTab(4)}>
            <img className='tabs__btn__icon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png" alt="grid icon" />
          </button>
    
        </section>

{activeTab === 0 &&
<div className='mb-16'>
 <MovieLayout/>
 </div>
}

{activeTab === 1 &&
<div className='grid grid-cols-3 gap-1 mb-16'>

<MovieCard2 img={postimg4}/>
 <MovieCard2 img={postimg6}/>
 <MovieCard2 img={postimg1}/>
 <MovieCard2 img={postimg1}/>
 <MovieCard2 img={postimg2}/>
 <MovieCard2 img={postimg3}/>
 <MovieCard2 img={postimg1}/>
 <MovieCard2 img={postimg2}/>
 <MovieCard2 img={postimg3}/>
 <MovieCard2 img={postimg1}/>
 <MovieCard2 img={postimg4}/>
 <MovieCard2 img={postimg6}/>
 </div>
}

{activeTab === 2 &&
<div className='grid grid-cols-3 gap-1 mb-16'>
<MovieCardreel img={postimg1} size={15}/>
 <MovieCardreel img={postimg2}/>
 <MovieCardreel img={postimg3}/>
 <MovieCardreel img={postimg1} size={15}/>
 <MovieCardreel img={postimg4}/>
 

 
 </div>
}

{activeTab === 3 &&
<div className='mb-16'>
<CalendarComponent/>
</div>
}

        {showDropdown && (
          <div className="dropdown absolute customx bottom-12 pb-16 bg-gray-800 w-full p-4">
          <div className='h-[2rem] w-full rounded-3xl flex flex-row justify-center items-center gap-4 mx-2'>
<div className='w-1/3 h-[0.5rem] bg-black rounded-3xl'>
          </div>
          
          </div>
          <div className='bg-white w-full opacity-50 h-[0.1rem] mb-4'></div>

          <div className='flex flex-col gap-4'>
            <button onClick={() => console.log('Dropdown Item 1 clicked')}>Dropdown Item 1</button>
            <button onClick={() => console.log('Dropdown Item 2 clicked')}>Dropdown Item 2</button>
            <button onClick={() => console.log('Dropdown Item 1 clicked')}>Dropdown Item 1</button>
            <button onClick={() => console.log('Dropdown Item 2 clicked')}>Dropdown Item 2</button>
            <button onClick={() => console.log('Dropdown Item 1 clicked')}>Dropdown Item 1</button>
            <button onClick={() => console.log('Dropdown Item 2 clicked')}>Dropdown Item 2</button>
            <button onClick={() => console.log('Dropdown Item 2 clicked')}>Dropdown Item 2</button>
            <button onClick={() => console.log('Dropdown Item 2 clicked')}>Dropdown Item 2</button>
          </div>
          </div>
        )}
        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
