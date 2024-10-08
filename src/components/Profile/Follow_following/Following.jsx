import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { dumy } from '../../../assets';
import { FaSearch } from 'react-icons/fa';

export default function Following() {
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const jwttoken = localStorage.getItem('jwttoken');
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Following');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Dummy data for followers and following
  const dummyFollowers = [
    { id: 1, username: 'JohnDoe', email: 'john@example.com', profile_pic: 'https://example.com/john.jpg' },
    { id: 2, username: 'JaneSmith', email: 'jane@example.com', profile_pic: 'https://example.com/jane.jpg' },
    { id: 3, username: 'BobJohnson', email: 'bob@example.com', profile_pic: 'https://example.com/bob.jpg' },
  ];

  const dummyFollowing = [
    { id: 4, username: 'AliceWilliams', email: 'alice@example.com', profile_pic: 'https://example.com/alice.jpg' },
    { id: 5, username: 'CharlieBrown', email: 'charlie@example.com', profile_pic: 'https://example.com/charlie.jpg' },
    { id: 6, username: 'EvaGreen', email: 'eva@example.com', profile_pic: 'https://example.com/eva.jpg' },
  ];

  useEffect(() => {
    // Simulate API call with dummy data
    setFollowersList(dummyFollowers);
    setFollowingList(dummyFollowing);
  }, []);

  useEffect(() => {
    const fetchFollowersList = async () => {
      try {
        const response = await fetch('https://techsnap-pe2v.onrender.com/accounts/get_followers'
        , {
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          });
        const data = await response.json();
        console.log(data.data)
        setFollowersList(data.data);
      } catch (error) {
        console.error('Error fetching following list:', error);
      }
    };

    fetchFollowersList();
  }, []); 

  useEffect(() => {
    const fetchFollowingList = async () => {
      try {
        const response = await fetch('https://techsnap-pe2v.onrender.com/accounts/get_following'
        , {
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          });
        const data = await response.json();
        console.log(data.data)
        setFollowingList(data.data);
      } catch (error) {
        console.error('Error fetching following list:', error);
      }
    };

    fetchFollowingList();
  }, []); 

  return (
    <div>
          <div className='flex flex-row justify-center mb-4  items-center bg-gray-800 w-full h-[4rem]'>
    <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={()=>navigate("/profile")}/>
       <h3 className="text-3xl font-bold text-white">Following</h3>
       </div>

       <div className='flex flex-row  text-2xl font-bold mb-6   gap-6 w-full text-white'>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <button
            className={`flex justify-start items-center focus:outline-none `}
            onClick={() => handleTabChange('Following')}
          >
            Followings
          </button>
          {activeTab === 'Following' && <div className="h-1 rounded-lg bg-green-500 w-full"></div>}
        </div>
         <div className='flex flex-col justify-center items-center w-1/2'>
          <button
            className={`focus:outline-none `}
            onClick={() => handleTabChange('Followers')}
          >
            Followers
          </button>
          {activeTab === 'Followers' && <div className="h-1 bg-green-500 w-full"></div>}
        </div>
      </div>

      <div className="relative flex items-center gap-2 mt-2 pb-4 justify-center">
          <input
            type="text"
            placeholder="Search (ex: Ramesh)"
            className=" p-2 pl-8 rounded-lg text-gray-300 bg-gray-800 h-[2.5rem] "
            style={{ width: '90%' }}
            
          />
          <FaSearch className="absolute left-8 cursor-pointer text-gray-400" />
        </div>
     
     <div className='flex flex-row justify-center items-center gap-12 text-white'>
      <div className='flex flex-col items-start justify-center bg-red-400 rounded-xl p-2 px-4 pr-12'>
        <h1 className='text-lg'>heading</h1>
        <p className='text-sm text-gray-100'>last 7 days</p>
        <p className='text-xl'>265</p>
      </div>

      <div className='flex flex-col items-start justify-center bg-blue-400 rounded-xl p-2 px-4 pr-12'>
        <h1 className='text-lg'>heading</h1>
        <p className='text-sm text-gray-100'>last 7 days</p>
        <p className='text-xl'>265</p>
      </div>
     </div>
     
     {activeTab === 'Following' &&
      <ul>
        {followingList.map(user => (
            <Link to={`/profiledetails/${user.id}`} key={user.id}>
            <div className="flex flex-row gap-4 mt-2 w-full justify-start mx-4 items-center rounded-full h-[4rem]">   
            <img
              src={user.profile_pic || dumy}
              alt={user.username}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className='flex flex-col gap-0'>
          <p className="text-white font-semibold">{user.username}</p>
          <p className="text-white">{user.email}</p>
          </div>
        </div>
         </Link>
        ))}
      </ul>
     }

     {activeTab === 'Followers' && 
      <ul>
        {followersList.map(user => (
            <Link to={`/profiledetails/${user.id}`} key={user.id}>
            <div className="flex flex-row gap-4 mt-2 w-full justify-start mx-4 items-center rounded-full h-[4rem]">   
            <img
              src={user.profile_pic || dumy}
              alt={user.username}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className='flex flex-col gap-0'>
          <p className="text-white font-semibold">{user.username}</p>
          <p className="text-white">{user.email}</p>
          </div>
        </div>
         </Link>
        ))}
      </ul>
    }

    </div>
  );
}
