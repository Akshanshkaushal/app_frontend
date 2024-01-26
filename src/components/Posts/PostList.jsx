import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';
import { postimg1, postimg2, postimg3, postimg4, postimg5, postimg6, postimg7 } from '../../assets';

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
      {/* {posts &&
        posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))} */}
      <SinglePost user={"user1"} img={postimg1} />
      <SinglePost user={"user2"} img={postimg2} />
      <SinglePost user={"user3"} img={postimg3} />
      <SinglePost user={"user4"} img={postimg4} />
      <SinglePost user={"user5"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmo eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "}  />
      <SinglePost user={"user6"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "} />
      <SinglePost user={"user7"} img={postimg5} />
      <SinglePost user={"user8"} img={postimg6} />
      <SinglePost user={"user9"} img={postimg2} />
      <SinglePost user={"user10"} img={postimg1} />
    </div>
  );
};

export default PostList;
