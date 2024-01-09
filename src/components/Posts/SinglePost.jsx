import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { dumy } from '../../assets';
import "./style.css";

const SinglePost = ({ post, style }) => {
  const [liked, setLiked] = useState(false);

  const handleDoubleTap = () => {
    setLiked((prevLiked) => !prevLiked);
   };
 

  return (
    <div className="relative rounded-lg shadow-md overflow-hidden bg-no-repeat bg-center bg-cover w-screen" 
    style={style}
    >
      <div
        className="h-[29rem] bg-no-repeat bg-center bg-cover bordert"
        style={{ background: `url(${post.image}) center/cover`, color: 'red' }}
        onDoubleClick={handleDoubleTap}
      >
        <div className='flex flex-row items-center p-4'>
          <img src={dumy} className='w-8 h-8 rounded-full' alt="User Avatar" />
          <div className="ml-2">
            <div className="text-white font-bold">{post.username}</div>
          </div>
        </div>

        {/* Post Content */}
        <div className='p-8 m-2 text-white'>
          {/* Content for post */}          
        </div>

   
        <div className="absolute bottom-16 left-4 flex items-center space-x-4">
          {/* Like */}
          <div className={`flex flex-row relative rounded-3xl ${liked ? 'bg-red-500 opacity-90' : 'bg-black opacity-10'}   w-24 h-10 `}>
          </div>
          <div
            className={`flex absolute opacity-100 items-center text-white`}
            onClick={handleDoubleTap}
          >
            <FaHeart size={20} />
          </div>
          <div className='text-white absolute bottom-2 left-6 '>
           7.8K
          </div>

          {/* Comment */}
          <div className="flex items-center text-white cursor-pointer">
            <FaComment size={20} />
          </div>

          {/* Share */}
          <div
            className="flex items-center text-white cursor-pointer"
           >
            <FaShare size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
