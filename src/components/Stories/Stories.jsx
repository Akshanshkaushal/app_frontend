 // Stories.js
import React from 'react';
import Story from './Story';
import { dumy } from '../../assets';


const Stories = () => {
  const users = [
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
    { imageUrl: dumy, username: 'user1' },
  ];

  return (
    <div className="flex bg-[#111111] justify-center items-center  overflow-x-auto p-4 ">
      <div className="flex w-full gap-x-4">
        {users.map((story, index) => (
          <Story key={index} imageUrl={story.imageUrl} username={story.username} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
