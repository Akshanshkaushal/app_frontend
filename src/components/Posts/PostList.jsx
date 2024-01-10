import React from 'react';
import SinglePost from './SinglePost';
import postData from './Data';
 
const PostList = () => {
  return (
    <div className="items-center relative borderf">
      {postData.map((post, index) => (
        <SinglePost key={post.id} post={post} style={{ marginTop: index !== 0 && '-3rem' }} />
      ))}
    </div>
  );
};

export default PostList;
