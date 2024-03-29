import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaSearch, FaShare, FaBookmark, FaCheck, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import TvDetails from './Series/SeriesDetails';
import AddToPlaylistModal from './AddtoPlaylistModal';
 

const Details = () => {
  const { id, type } = useParams();
  const [details, setDetails] = useState(null);
  const [liked, setLiked] = useState(false);
  const [Seen, setSeen] = useState(false);
  const [Watch, setWatch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const jwttoken = localStorage.getItem('jwttoken');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://techsnap-pe2v.onrender.com/movies/movie-details/?id=${id}&type=${type}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${jwttoken}`,
            }
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setDetails(data.content_details);
        console.log(data.content_details.likes)

        setLiked(data.content_details.likes > 0);
        setSeen(data.content_details.seen);
        setWatch(data.content_details.must);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id, jwttoken]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          'https://techsnap-pe2v.onrender.com/movies/get_playlists/',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${jwttoken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        setPlaylists(data.data);
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, [jwttoken]);

  const handleLike = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/like_movies/?id=${id}&type=movie`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          }
        }
      );

      const data = await response.json();
      console.log('Like API response:', data);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setLiked(true);
      // Store liked state in localStorage
      localStorage.setItem(`liked_${id}`, 'true');
    } catch (error) {
      console.error('Error liking movie:', error);
    }
  };

  const handleDislike = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/dislike_movie/?id=${id}&type=movie`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          }
        }
      );

      const data = await response.json();
      console.log('Like API response:', data);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setLiked(false);
      // Store liked state in localStorage
      localStorage.setItem(`liked_${id}`, 'false');
    } catch (error) {
      console.error('Error disliking movie:', error);
    }
  };

  const handleSeen = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/add_to_scene/?movie_id=${id}&type=movie`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          }
        }
      );

      const data = await response.json();
      console.log('Like API response:', data);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setSeen(true);
      // Store liked state in localStorage
      localStorage.setItem(`Seen_${id}`, 'true');
    } catch (error) {
      console.error('Error liking movie:', error);
    }
  };

  const handleWatch = async () => {
    try {
      const response = await fetch(
        `https://techsnap-pe2v.onrender.com/movies/add_to_must/?movie_id=${id}&type=movie`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`,
          }
        }
      );

      const data = await response.json();
      console.log('Like API response:', data);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      setWatch(true);
      // Store liked state in localStorage
      localStorage.setItem(`Watch_${id}`, 'true');
    } catch (error) {
      console.error('Error liking movie:', error);
    }
  };

  const handleAddToPlaylistClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const imageUrl = "https://image.tmdb.org/t/p/w500" + details?.poster_path;

  const MovieDetails = () => {
    return (
      <div className='flex flex-col text-white gap-12 mx-4'>
        <div className='flex flex-row justify-between mt-4 '>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <Link to="/moviesearch">
              <FaArrowLeft />
            </Link>
            <div>{details?.title}</div>
          </div>
          <div className='ml-auto flex flex-row gap-4'>
            <div>
              <FaSearch />
            </div>
            <div>
              <FaShare />
            </div>
          </div>
        </div>

        <div className='h-[15rem]' style={{ background: `url(${imageUrl}) center/contain no-repeat`, color: 'red' }}></div>
        <div>
          <div className='text-lg font-bold'>{details?.title}</div>
          <div>{details?.overview}</div>
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
            <div>{details?.likes}</div>
          </div>
          <div>
            <FaThumbsDown  onClick={handleDislike} />
            <div>{details?.dislikes}</div>
          </div>
        </div>

        <div>
          <button className='bg-blue-500 p-2 rounded-lg' onClick={handleAddToPlaylistClick}>Add to Playlist</button>
        </div>

        <div className='mt-4 h-[15rem]'>
          <iframe title="movie-trailer" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Ix0gJwrpexI" frameBorder="0" allowFullScreen />
        </div>

        <div className='mt-4'>
          <div className='text-lg font-bold'>Genres</div>
          <div className='flex flex-row'>
            {details?.genres.map(genre => (
              <div key={genre.id} className='mr-4'>{genre.name}</div>
            ))}
          </div>

          <div className='text-lg font-bold mt-4'>Production Companies</div>
          <div className='flex flex-row flex-wrap'>
            {details?.production_companies.map(company => (
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
      {type === 'tv' && <TvDetails  playlists={playlists} type={type} id={id} />}
      {type === 'movie' && <MovieDetails />}
      {showModal && (
        <AddToPlaylistModal onClose={handleCloseModal} playlists={playlists} type={type} id={id}/>
      )}
    </>
  );
};

export default Details;
