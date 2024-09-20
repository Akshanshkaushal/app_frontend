import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaSearch, FaShare, FaBookmark, FaCheck, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import TvDetails from './Series/SeriesDetails';
import AddToPlaylistModal from './AddtoPlaylistModal';
import { dummyMovies, dummyTvShows, dummyPlaylistData } from '../../dummyData';

const Details = () => {
  const { id, type } = useParams();
  const [details, setDetails] = useState(null);
  const [liked, setLiked] = useState(false);
  const [Seen, setSeen] = useState(false);
  const [Watch, setWatch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Use dummy data instead of API call
    const dummyData = type === 'movie' ? dummyMovies : dummyTvShows;
    const selectedContent = dummyData.find(item => item.id === parseInt(id));
    
    if (selectedContent) {
      setDetails({
        ...selectedContent,
        likes: 10,
        dislikes: 2,
        genres: [{ id: 1, name: "Action" }, { id: 2, name: "Drama" }],
        production_companies: [{ id: 1, name: "Dummy Studios" }],
      });
      setLiked(false);
      setSeen(false);
      setWatch(false);
    }
  }, [id, type]);

  useEffect(() => {
    // Use dummy playlist data
    setPlaylists(dummyPlaylistData.movies);
  }, []);

  const handleLike = () => {
    setLiked(true);
    setDetails(prev => ({ ...prev, likes: prev.likes + 1 }));
  };

  const handleDislike = () => {
    setLiked(false);
    setDetails(prev => ({ ...prev, dislikes: prev.dislikes + 1 }));
  };

  const handleSeen = () => {
    setSeen(true);
  };

  const handleWatch = () => {
    setWatch(true);
  };

  const handleAddToPlaylistClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const imageUrl = details?.poster_path;

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
            <FaBookmark style={{ color: Watch ? 'red' : 'white' }} onClick={handleWatch} />
            <div className='text-sm'>Watchlist</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <FaCheck style={{ color: Seen ? 'red' : 'white' }} onClick={handleSeen}/>
            <div>Seen</div>
          </div>
          <div>
            <FaThumbsUp style={{ color: liked ? 'red' : 'white' }} onClick={handleLike} />
            <div>{details?.likes}</div>
          </div>
          <div>
            <FaThumbsDown onClick={handleDislike} />
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
      {type === 'tv' && <TvDetails playlists={playlists} type={type} id={id} />}
      {type === 'movie' && <MovieDetails />}
      {showModal && (
        <AddToPlaylistModal onClose={handleCloseModal} playlists={playlists} type={type} id={id}/>
      )}
    </>
  );
};

export default Details;
