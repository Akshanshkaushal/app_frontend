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
        setPosts((prevPosts) => [...prevPosts, ...data.results]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="items-center relative borderf">
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
      <button onClick={loadMorePosts} className='text-white'>Load More</button>
    </div>
  );
};

export default PostList;
