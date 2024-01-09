import React from 'react';
import SinglePost from './SinglePost';
import { postimg2, postimg3, postimg4 } from '../../assets';

const dummyData = [
  {
    id: 1,
    username: 'User1',
    image: postimg4,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    username: 'User2',
    image: postimg2,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    username: 'User3',
    image: postimg3,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const PostList = () => {
  return (
    <div className="items-center relative">
      {dummyData.map((post, index) => (
        <SinglePost key={post.id} post={post} style={{ marginTop: index !== 0 && '-3rem' }} />
      ))}
    </div>
  );
};

export default PostList;
