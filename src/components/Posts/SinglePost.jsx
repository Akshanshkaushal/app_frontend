 // SinglePost.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaHeart, FaComment, FaShare, FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLiked } from '../../Contexts/LikedContext';
import { dumy, heartimg } from '../../assets';
import './style.css';

const SinglePost = ({ post,style,img,user,content }) => {
  // const { likedPosts, setLiked } = useLiked();
  const navigate = useNavigate();
  let clickCount = 0;
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  // const [likeCount, setLikeCount] = useState(post.like);
  const jwttoken = localStorage.getItem('jwttoken');
 
  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        if (jwttoken) {
          const response = await fetch(`https://techsnap-pe2v.onrender.com/posts/get_Likes?id=${post.id}`, {
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          });
          const data = await response.json();

          if (data && data.Likes) {
            // setLikeCount(data.Likes);
          }
        }
      } catch (error) {
        console.error('Error fetching like count:', error);
      }
    };

    if (jwttoken) {
      fetchLikeCount();
    }
  }, [ jwttoken]);

  //likedPosts,post.id

  const props = useSpring({
    opacity: 1,
    translateY: 0,
    from: { opacity: 0, translateY: -100 },
    config: { tension: 120, friction: 14 },
  });

  const handleClick = () => {
    if (!jwttoken) {
      console.log('User is not authenticated. Redirect to login.');
       return;
    }

    clickCount++;

    if (clickCount === 1) {
      setTimeout(() => {
        if (clickCount === 1) {
          navigateToPostPage();
        }
        clickCount = 0;
      }, 500);
    } else if (clickCount === 2) {
      // setLiked(post.id, !likedPosts[post.id]);
      setShowHeartAnimation(true);

      setTimeout(() => {
        setShowHeartAnimation(false);
      }, 700);

      // const updatedLikeCount = likedPosts[post.id] ? likeCount - 1 : likeCount + 1;
      // setLikeCount(updatedLikeCount);

      clickCount = 0;
    }
  };

  const navigateToPostPage = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <animated.div
      className=" relative rounded-lg shadow-md overflow-hidden bg-no-repeat bg-center bg-cover w-screen cursor-pointer"
      style={{ ...style, position: 'relative', ...props }}
    >
      {/* <div
        className="h-[29rem] bg-no-repeat bg-center bg-cover borderf"
        style={{ background: `url(${post.pic}) center/cover`, color: 'red' }}
        onClick={handleClick}
      >
        {showHeartAnimation && <img src={heartimg} className="heart-animation" alt="Heart" />}
        <div className='flex flex-row items-center p-4'>
          <img src={post.user.picture} className='w-10 h-10 rounded-full' alt="User Avatar" />
          <div className="ml-2">
            <div className="text-white font-bold">{post.user}</div>
          </div>
        </div>

        <div className='p-8 m-2 text-white'>
          <p>{post.content}</p>
        </div>

        <div className="absolute bottom-16 left-4 flex items-center space-x-4">
          <div onClick={handleClick}>
            <div className={`flex flex-row relative rounded-3xl ${likedPosts[post.id] ? 'bg-red-500 opacity-90' : 'bg-black opacity-10'} w-24 h-10`}>
            </div>
            <div className={`flex absolute bottom-2.5 left-3 opacity-100 items-center text-white`}>
              <FaHeart size={20} />
            </div>
            <div className='text-white absolute bottom-2 left-11 '>
              {likeCount}
            </div>
          </div>

          <div  >
            <div className={`flex absolute bottom-2.5 right-6 opacity-100 items-center text-white`}>
              <FaComment size={20} />
            </div>
            <div className='text-white absolute bottom-2 right-2 '>
              {post.comments}
            </div>
          </div>
        </div>

        <div className="flex absolute left-36 items-center text-white cursor-pointer" style={{ bottom: "4.6rem" }}>
          <FaShare size={20} />
        </div>
        <div className='absolute  right-5' style={{ bottom: "4.5rem" }}>
          <FaBookmark size={20} style={{ color: "#fafafa" }} />
        </div>
      </div> */}


      <div
        className="h-[29rem] bg-no-repeat bg-center bg-cover borderf"
        style={{ background: `url(${img}) center/cover`, color: 'red' }}
        onClick={handleClick}
      >
        {showHeartAnimation && <img src={heartimg} className="heart-animation" alt="Heart" />}
        <div className='flex flex-row items-center p-4'>
          {/* <img src={post.user.picture} className='w-10 h-10 rounded-full' alt="User Avatar" /> */}
          <img src={dumy} className='w-10 h-10 rounded-full' alt="User Avatar" />
          <div className="ml-2">
            <div className="text-white font-bold">{user}</div>
          </div>
        </div>

        <div className='p-8 m-2 text-white'>
       {content}
        </div>

        <div className="absolute bottom-16 left-4 flex items-center space-x-4">
          <div onClick={handleClick}>
            {/* <div className={`flex flex-row relative rounded-3xl ${likedPosts[post.id] ? 'bg-red-500 opacity-90' : 'bg-black opacity-10'} w-24 h-10`}>
            </div> */}
            <div className={`flex flex-row relative rounded-3xl   w-24 h-10`}>
            </div>
            <div className={`flex absolute bottom-2.5 left-3 opacity-100 items-center text-white`}>
              <FaHeart size={20} />
            </div>
            <div className='text-white absolute bottom-2 left-11 '>
              {/* {likeCount} */}
            </div>
          </div>

          <div  >
            <div className={`flex absolute bottom-2.5 right-6 opacity-100 items-center text-white`}>
              <FaComment size={20} />
            </div>
        
          </div>
   
        </div>
        

        <div className="flex absolute left-36 items-center text-white cursor-pointer" style={{ bottom: "4.6rem" }}>
          <FaShare size={20} />
        </div>
        <div className='absolute  right-5' style={{ bottom: "4.5rem" }}>
          <FaBookmark size={20} style={{ color: "#fafafa" }} />
        </div>
      </div>
    </animated.div>
  );
};

export default SinglePost;
