import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Story from './Story';
import './style.css';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://techsnap-pe2v.onrender.com/posts/get_stories');
        const data = await response.json();
        setStories(data.data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="flex bg-[#1a202c] justify-center items-center scrollb overflow-x-auto p-4">
      <div className="flex w-full gap-x-4 mt-16">
        {stories.map((story) => (
          <Link to={`/story/${story.id}`} key={story.id}>
            <Story imageUrl={story.media} username={story.posted_by} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stories;
