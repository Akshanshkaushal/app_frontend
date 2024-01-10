import React from 'react';
import Story from './Story';
import Users from './Data';

const Stories = () => {
  return (
    <div className="flex bg-[#111111] justify-center items-center overflow-x-auto p-4">
      <div className="flex w-full gap-x-4 mt-16">
        {Users.map((story, index) => (
          <Story key={index} imageUrl={story.imageUrl} username={story.username} />
        ))}
      </div>
    </div>
  );
};

export default Stories;