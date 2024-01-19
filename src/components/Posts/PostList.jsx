import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/posts/feed?page=${page}`);
        const data = await response.json();
        if(data.results){
        setPosts((prevPosts) => [...prevPosts, ...data.results]);
      }
      else{
        console.log("push more data in api")
      }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
 
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMorePosts();
      }
    };
    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <div className="items-center relative borderf overflow-x-hidden">
      {posts &&
        posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
