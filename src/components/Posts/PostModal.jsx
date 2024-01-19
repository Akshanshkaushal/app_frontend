import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaShare, FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { useLiked } from '../../Contexts/LikedContext';
import { heartimg } from '../../assets';
import { useSwipeable } from 'react-swipeable';
import { CSSTransition } from 'react-transition-group';
import { IoIosArrowBack } from "react-icons/io";
import CommentsMain from '../Comments/main';

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const { likedPosts, setLiked } = useLiked();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // Initialize likeCount with a default value
  const jwttoken = localStorage.getItem('jwttoken');

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

  useEffect(() => {
    if (!postId || posts.length === 0) {
      return;
    }

    const foundPost = posts.find((p) => String(p.id) === postId);

    if (foundPost) {
      setPost(foundPost);
    } else {
      console.error(`Post with ID ${postId} not found`);
    }
  }, [postId, posts]);


  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        if (jwttoken) {
          const response = await fetch(`https://techsnap-pe2v.onrender.com/posts/get_Likes?id=${postId}`, {
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          });
          const data = await response.json();
console.log(data);
console.log('Request Headers:', {
  Authorization: `Token ${jwttoken}`,
});
console.log(response.headers)

          if (data && data.Likes) {
            setLikeCount(data.Likes);
          }
        }
      } catch (error) {
        console.error('Error fetching like count:', error);
      }
    };

    if (jwttoken) {
      fetchLikeCount();
    }
  }, [likedPosts, jwttoken]);


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
    if (post) {
      setLiked(post.id, !likedPosts[post.id]);
      setShowHeartAnimation(true);

      setTimeout(() => {
        setShowHeartAnimation(false);
      }, 700);

      const updatedLikeCount = likedPosts[post.id] ? likeCount - 1 : likeCount + 1;
      setLikeCount(updatedLikeCount);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

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
          className="h-[29rem] bg-no-repeat bg-center bg-contain bordert mt-12 relative"
          style={{ background: `url(${post.pic}) center/cover`, color: 'red' }}
          onDoubleClick={handleClick}
        >
          {showHeartAnimation && <img src={heartimg} className="heart-animation" alt="Heart" />}

          <div className='flex flex-row items-center p-4'>
            <img src={post.userUrl} className='w-8 h-8 rounded-full' alt="User Avatar" />
            <div className="ml-2">
              <div className="text-white font-bold">{post.user}</div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute top-4 right-0 transform -translate-x-1/2 flex space-x-2">
            {post.slides &&
              post.slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-2 rounded-md bg-white cursor-pointer ${
                    index === currentSlide ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
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
        </div>
        <div className="absolute top-4 left-4 cursor-pointer" onClick={handleBack}>
          <IoIosArrowBack size={24} style={{ color: 'white' }} />
        </div>
        <div className='absolute w-full bottom-0'>
          <CommentsMain postId={postId} page={page}/>
        </div>
      </div>
    </CSSTransition>
  );
};

export default PostPage;
