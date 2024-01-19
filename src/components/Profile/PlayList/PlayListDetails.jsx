import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="bg-white text-black p-4 m-2 shadow-md rounded-md h-[14rem] w-[9rem]"
      style={{ background: `url(${movie.movie_photo}) top/cover no-repeat` }}
      onClick={handleClick}
    >
    </div>
  );
};

const TrackCard = ({ track, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className=" p-4 m-2 shadow-md rounded-md"
      onClick={handleClick}
    >
      <h3 className="text-lg font-bold mb-2">{track.title}</h3>
      <h3 className="text-lg font-bold mb-2">{track.synopsis}</h3>
    </div>
  );
};


export default function PlayListDetails({ playlistData, type, trackedData}) {
  console.log(trackedData)
  return (
    <div className="text-white p-4 m-2 shadow-md rounded-md">
      <h3 className="text-lg font-bold mb-2">{playlistData.title}</h3>
      <p>{playlistData.about}</p>
      <div className="grid grid-cols-2 gap-2">
        {playlistData.movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} id={movie.content_id} />
        ))}
      </div>
      {type==="Tracking" &&
      <div className="grid grid-cols-2 gap-2">
        {trackedData &&
          trackedData.map((track, index) => (
          <TrackCard key={index} track={track} id={track.content_id} />
        ))}
      </div>
      }
    </div>
  );
};
