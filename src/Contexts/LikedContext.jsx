import React, { createContext, useContext, useState } from 'react';

const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState({});

  const setLiked = (postId, value) => {
    setLikedPosts((prevLikedPosts) => ({
      ...prevLikedPosts,
      [postId]: value,
    }));
  };

  return (
    <LikedContext.Provider value={{ likedPosts, setLiked }}>
      {children}
    </LikedContext.Provider>
  );
};

export const useLiked = () => {
  return useContext(LikedContext);
};
