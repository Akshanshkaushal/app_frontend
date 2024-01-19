import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StoryDetails = () => {
  const { id } = useParams();
  const [storyDetails, setStoryDetails] = useState(null);
  const jwttoken = localStorage.getItem('jwttoken');

  useEffect(() => {
    const fetchStoryDetails = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/posts/see_story/${id}`,
        {
            method: 'GET',  
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          });
        const data = await response.json();
        setStoryDetails(data.data);
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching story details:', error);
      }
    };

    fetchStoryDetails();
  }, [id]);

  if (!storyDetails) {
    return <div>Loading...</div>;
  }

  var imageUrl = "https://techsnap-pe2v.onrender.com" + storyDetails?.media;

  return (
    <div className='text-white'>
      <h1>{storyDetails.username}</h1>
      <h1>{storyDetails.caption}</h1>
      <img src={imageUrl}/>
 
    </div>
  );
};

export default StoryDetails;
