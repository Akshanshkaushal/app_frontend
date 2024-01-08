// Story.js
import React from 'react';

const Story = ({ imageUrl, username }) => {
  return (
    <div className="flex flex-col  items-center w-full h-[5rem]">
    <div className=''>
        <img
          src={imageUrl}
          alt={username}
          className="rounded-full w-10 h-10 object-cover border-4 border-white"
        />
 </div>
 
      <span className="mt-2 text-sm text-white">{username}</span>
    </div>
  );
};

export default Story;
