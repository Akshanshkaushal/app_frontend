import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaSearch, FaShare, FaBookmark, FaCheck, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import AddToPlaylistModal from '../AddtoPlaylistModal';

const TvDetails = ({playlists}) => {
  const { id, type } = useParams();
  const [details, setDetails] = useState(null);
  const [data, setData] = useState(null);
  const [liked, setLiked] = useState(false);
  const [Seen, setSeen] = useState(false);
  const [Watch, setWatch] = useState(false);
  const [showModal, setShowModal] = useState(false);
 
  const jwttoken = localStorage.getItem('jwttoken');

  const handleAddToPlaylistClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://techsnap-pe2v.onrender.com/movies/movie-details/?id=${id}&type=tv`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${jwttoken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(responseData);
        setData(responseData.data);

 
        console.log(responseData.data.likes)

        setLiked(responseData.data.likes > 0);
        setSeen(responseData.data.seen);
        setWatch(responseData.data.must);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id, type, jwttoken]);

  const handleLike = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/like_movies/?id=${id}&type=${type}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          },
        }
      );

      const responseData = await response.json();
      console.log('Like API response:', responseData);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setLiked(true);
 
    } catch (error) {
      console.error('Error liking movie:', error);
    }
  };

  const handleDislike = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/dislike_movie/?id=${id}&type=${type}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          },
        }
      );

      const responseData = await response.json();
      console.log('Dislike API response:', responseData);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setLiked(false);
 
    } catch (error) {
      console.error('Error disliking movie:', error);
    }
  };

  const handleSeen = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/add_to_scene/?movie_id=${id}&type=${type}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          },
        }
      );

      const responseData = await response.json();
      console.log('Seen API response:', responseData);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setSeen(true);
 
    } catch (error) {
      console.error('Error marking movie as seen:', error);
    }
  };

  const handleWatch = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/add_to_must/?movie_id=${id}&type=${type}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          },
        }
      );

      const responseData = await response.json();
      console.log('Watch API response:', responseData);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setWatch(true);
 
    } catch (error) {
      console.error('Error adding movie to watchlist:', error);
    }
  };

  var imageUrl = `https://image.tmdb.org/t/p/w500${data?.backdrop_path}`;

  const SeriesDetails = () => {
    return (
      <div className='flex flex-col text-white gap-12 '>
        <div className='flex flex-row justify-between mt-4 '>
          <div className='flex flex-row gap-4 justify-center items-center mx-4'>
            <Link to="/moviesearch">
              <FaArrowLeft />
            </Link>
            <div>{data?.name}</div>
          </div>

          <div className='ml-auto flex flex-row gap-4 mx-4'>
            <div>
              <FaSearch />
            </div>
            <div>
              <FaShare />
            </div>
          </div>
        </div>

        <div className='h-[15rem]' style={{ background: `url(${imageUrl}) center/contain no-repeat`, color: 'red' }}></div>
        <div className='mx-4'>
        <Link to={`/tv/${id}/seasons`}>
          <button className='bg-blue-500 p-2 rounded-lg'>Watch All</button>
          </Link>
 
        </div>
        <div className='mx-4'>
          <div className='text-lg font-bold'>{data?.name}</div>
          <div>{data?.overview}</div>
        </div>

        <div className='flex flex-row justify-between items-center mx-8'>
      <div className='flex flex-col justify-center items-center'>
        <FaBookmark style={{ color: Watch === true ? 'red' : 'white' }} onClick={handleWatch} />
        <div className='text-sm'>Watchlist</div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaCheck style={{ color: Seen === true ? 'red' : 'white' }} onClick={handleSeen}/>
        <div>Seen</div>
      </div>
      <div>
        <FaThumbsUp style={{ color: liked === true ? 'red' : 'white' }} onClick={handleLike} />
        <div>{data?.likes}</div>
      </div>
      <div>
        <FaThumbsDown  onClick={handleDislike} />
        <div>{data?.dislikes}</div>
      </div>
    </div>

    <div>
          <button className='bg-blue-500 p-2 rounded-lg mx-4' onClick={handleAddToPlaylistClick}>Add to Playlist</button>
        </div>

        <div className='mt-4 h-[15rem]'>
        
            <iframe title="tv-trailer" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Ix0gJwrpexI" allowFullScreen />
          
        </div>

        <div className='mt-4 mx-4'>
      <div className='text-lg font-bold'>Genres</div>
      <div className='flex flex-row'>
        {data?.genres.map(genre => (
          <div key={genre.id} className='mr-4'>{genre.name}</div>
        ))}
      </div>

      <div className='text-lg font-bold mt-4'>Production Companies</div>
      <div className='flex flex-row flex-wrap'>
        {data?.production_companies.map(company => (
          <div key={company.id} className='mr-4 mb-2'>
            <div className='text-sm'>{company.name}</div>
          </div>
        ))}
      </div>
    </div>
      </div>
    );
  };

  return (
    <>
      {type === 'tv' && <SeriesDetails />}
      {showModal && (
        <AddToPlaylistModal onClose={handleCloseModal} playlists={playlists} type={type} id={id}/>
      )}
    </>
  );
};

export default TvDetails;
