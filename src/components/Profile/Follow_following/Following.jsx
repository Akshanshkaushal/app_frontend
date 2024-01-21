import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

export default function Following() {
  const [followingList, setFollowingList] = useState([]);
  const jwttoken = localStorage.getItem('jwttoken');
  const navigate = useNavigate();

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
     
      <ul>
        {followingList.map(user => (
            <Link to={`/profiledetails/${user.id}`} key={user.id}>
            <div className="flex flex-row gap-2 justify-center items-center rounded-full h-[4rem]">
          <p className="text-white">{user.username}</p>
          <p className="text-white">{user.email}</p>
          {user.profile_pic && (
            <img
              src={user.profile_pic}
              alt={user.username}
              className="w-full h-[10rem] object-cover"
            />
          )}
        </div>          </Link>
        ))}
      </ul>
    </div>
  );
}
