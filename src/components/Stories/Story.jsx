 // Story.jsx

import React from 'react';

const Story = ({ imageUrl, username }) => {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="border-4 border-slate-300 rounded-full overflow-hidden w-16 h-16">
        <img
          src={imageUrl}
          alt={username}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <span className="mt-2 text-sm text-white overflow-hidden whitespace-nowrap">
        {username}
      </span>
    </div>
  );
};

export default Story;
