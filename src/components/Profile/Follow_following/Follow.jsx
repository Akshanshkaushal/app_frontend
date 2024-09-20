import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { dumy } from '../../../assets';
import { FaSearch } from 'react-icons/fa';

export default function Following() {
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Followers');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Dummy data for followers
    const dummyFollowers = [
      { id: 1, username: 'JohnDoe', email: 'john@example.com', profile_pic: dumy },
      { id: 2, username: 'JaneSmith', email: 'jane@example.com', profile_pic: dumy },
      // Add more dummy followers as needed
    ];
    setFollowersList(dummyFollowers);

    // Dummy data for following
    const dummyFollowing = [
      { id: 3, username: 'AliceJohnson', email: 'alice@example.com', profile_pic: dumy },
      { id: 4, username: 'BobWilliams', email: 'bob@example.com', profile_pic: dumy },
      // Add more dummy following as needed
    ];
    setFollowingList(dummyFollowing);
  }, []);

  return (
    <div>
          <div className='flex flex-row justify-center mb-4  items-center bg-gray-800 w-full h-[4rem]'>
    <IoIosArrowBack size={20} className='text-white absolute left-0 mx-2' onClick={()=>navigate("/profile")}/>
       <h3 className="text-3xl font-bold text-white">Followers</h3>
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
        {followersList.map(user => (
            <Link to={`/profiledetails/${user.id}`} key={user.id}>
            <div className="flex flex-row gap-2 justify-center items-center rounded-full h-[4rem]">
          <p className="text-white">{user.username }</p>
          <p className="text-white">{user.email}</p>
          {user.profile_pic && (
            <img
              src={user.profile_pic || dumy}
              alt={user.username}
              className="w-full h-[10rem] object-cover"
            />
          )}
        </div>          </Link>
        ))}
      </ul>
     }

     {activeTab === 'Followers' && 
      <ul>
        {followingList.map(user => (
            <Link to={`/profiledetails/${user.id}`} key={user.id}>
            <div className="flex flex-row gap-4 mt-2 w-full justify-start mx-4 items-center rounded-full h-[4rem]">   
            <img
              src={user?.profile_pic || dumy}
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
