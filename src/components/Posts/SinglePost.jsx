import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useLiked } from '../../Contexts/LikedContext';
import { heartimg } from '../../assets';

const SinglePost = ({ post, style }) => {
  const { likedPosts, setLiked} = useLiked();
  const navigate = useNavigate();
  let clickCount = 0;
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  const handleClick = () => {
    clickCount++;

    if (clickCount === 1) {
      setTimeout(() => {
        if (clickCount === 1) {
          // Single click
          navigateToPostPage();
        }
        clickCount = 0;
      }, 500);
    } else if (clickCount === 2) {
      // Double click
      setLiked(post.id, !likedPosts[post.id]);
      setShowHeartAnimation(true);

      setTimeout(() => {
        setShowHeartAnimation(false);
      }, 1000);

      clickCount = 0;
    }
  };

  const navigateToPostPage = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="relative rounded-lg shadow-md overflow-hidden bg-no-repeat bg-center bg-cover w-screen cursor-pointer" style={{ ...style, position: 'relative' }}>
      <div className="h-[29rem] bg-no-repeat bg-center bg-cover bordert" style={{ background: `url(${post.slides ? post.slides[0].image : post.image}) center/cover`, color: 'red' }} onClick={handleClick}>
      {showHeartAnimation && <img src={heartimg} className="heart-animation" alt="Heart" />} 
        <div className='flex flex-row items-center p-4'>
          <img src={post.userUrl} className='w-10 h-10 rounded-full' alt="User Avatar" />
          <div className="ml-2">
            <div className="text-white font-bold">{post.username}</div>
          </div>
        </div>

        {/* Post Content */}
        <div className='p-8 m-2 text-white'>
      
        </div>

        <div className="absolute bottom-16 left-4 flex items-center space-x-4">
          {/* Like */}
          <div onClick={handleClick}>
            <div className={`flex flex-row relative rounded-3xl ${likedPosts[post.id] ? 'bg-red-500 opacity-90' : 'bg-black opacity-10'} w-24 h-10`}>
                     </div>
            <div className={`flex absolute bottom-2.5 left-3 opacity-100 items-center text-white`}>
              <FaHeart size={20} />
            </div>
            <div className='text-white absolute bottom-2 left-11 '>
              7.8K
            </div>
          </div>
          {/* Comment */}
          <div className="flex items-center text-white cursor-pointer">
            <FaComment size={20} />
          </div>
          {/* Share */}
          <div className="flex items-center text-white cursor-pointer">
            <FaShare size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
