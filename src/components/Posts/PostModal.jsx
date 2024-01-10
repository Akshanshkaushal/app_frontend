import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaShare, FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import postData from './Data';
import './style.css';
import { useLiked } from '../../Contexts/LikedContext';
import { dumy, heartimg } from '../../assets';
import { useSwipeable } from 'react-swipeable';
import { CSSTransition } from 'react-transition-group';
import { IoIosArrowBack } from "react-icons/io";


const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const { likedPosts, setLiked} = useLiked();
  const [currentSlide, setCurrentSlide] = useState(0);  
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
   

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSlideLeft(),
    onSwipedRight: () => handleSlideRight(),
    preventDefaultTouchmoveEvent: true,
  });

  const handleSlideLeft = () => {
    const newIndex = (currentSlide + 1) % post.slides.length;
    setCurrentSlide(newIndex);
  };

  const handleSlideRight = () => {
    const newIndex = (currentSlide - 1 + post.slides.length) % post.slides.length;
    setCurrentSlide(newIndex);
  };

  const handleClick = () => {
    setLiked(postId, !likedPosts[postId]);
    setShowHeartAnimation(true);
    setTimeout(() => {
        setShowHeartAnimation(false);
      }, 1000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // post based on postId--->
    const foundPost = postData.find((p) => String(p.id) === postId);

    if (foundPost) {
      setPost(foundPost);
    } else {
      console.error(`Post with ID ${postId} not found`);
    }
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames="fade"
  >
    <div {...handlers}>
      <div
        className="h-[29rem] bg-no-repeat bg-center bg-cover bordert my-12 relative"
        style={{ background: `url(${post.slides[currentSlide].image}) center/cover`, color: 'red' }}
        onDoubleClick={handleClick}
      >
            {showHeartAnimation && <img src={heartimg} className="heart-animation" alt="Heart" />} 

        <div className='flex flex-row items-center p-4'>
          <img src={post.userUrl} className='w-8 h-8 rounded-full' alt="User Avatar" 
          />
          <div className="ml-2">
            <div className="text-white font-bold">{post.username}</div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute top-4 right-0 transform -translate-x-1/2 flex space-x-2">
          {post.slides &&
            post.slides.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-2 rounded-md  bg-white cursor-pointer ${
                  index === currentSlide ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
        </div>

        <div className="absolute bottom-8 left-4 flex items-center space-x-4">
          {/* Like */}
          <div onClick={handleClick}>
            <div className={`flex flex-row relative rounded-3xl ${likedPosts[post.id] ? 'bg-red-500 opacity-90' : 'bg-black opacity-10'} w-24 h-10`}>
            </div>
            <div
              className={`flex absolute bottom-2.5 left-3 opacity-100 items-center text-white`}
            >
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
          <div
            className="flex items-center text-white cursor-pointer"
          >
            <FaShare size={20} />
          </div>
        
        </div>
        <div className='absolute  right-5' style={{bottom:"2.8rem"}}>
          <FaBookmark size={20}    style={{color: "#fafafa"}} />
          </div>
      </div>
      <div className="absolute top-4 left-4 cursor-pointer" onClick={handleBack}>
      <IoIosArrowBack  size={24} style={{ color: 'white' }}  />
      </div>
    </div>
    </CSSTransition>
  );
};

export default PostPage;
