import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosSkipBackward } from 'react-icons/io';

const SeasonDetails = () => {
  const [seasonsData, setSeasonsData] = useState(null);
  const [currentSeason, setCurrentSeason] = useState(null);
  const { id } = useParams();
  const jwttoken = localStorage.getItem('jwttoken');

  // Dummy data
  const dummySeasons = [
    {
      id: 1,
      name: "Season 1",
      episodes: [
        {
          id: 101,
          name: "Episode 1",
          still_path: "/dummy-still.jpg",
          overview: "This is a dummy episode overview.",
          episode_number: 1,
        },
        // Add more dummy episodes as needed
      ],
    },
    // Add more dummy seasons as needed
  ];

  useEffect(() => {
    // Simulate API call
    setSeasonsData(dummySeasons);
    setCurrentSeason(dummySeasons[0]);
  }, [id]);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSeasonClick = (season) => {
    setCurrentSeason(season);
  };

  const handleTrackButtonClick = async (episode) => {
    // Simulate tracking
    console.log('Tracking episode:', episode);
  };

  return (
    <div className='text-white overflow-x-hidden flex flex-col gap-2'>
      <Link to="/moviesearch">
              <IoIosArrowBack />
            </Link>
      {currentSeason && (
        <>
          <h2 className='mx-2'>{currentSeason.name}</h2>
          <Slider {...settings}>
            {currentSeason.episodes.map((episode) => (
              <div key={episode.id}>
                <h3 className='mx-2'>{episode.name}</h3>
                <div
                  className='h-[15rem]'
                  style={{
                    background: `url(${`https://image.tmdb.org/t/p/w500${episode?.still_path}`}) center/contain no-repeat`,
                    color: 'red',
                  }}
                ></div>
                <p className='m-2'>{episode.overview}</p>
                <button
                  className='bg-blue-500 p-2 rounded-2xl m-2'
                  onClick={() => handleTrackButtonClick(episode)}
                >
                  Track
                </button>
              </div>
            ))}
          </Slider>
        </>
      )}

      {seasonsData && (
        <div className='m-2'>
          <h3>Seasons</h3>
          <ul>
            <div className='grid grid-cols-3 gap-2'>
              {seasonsData.map((season) => (
                <div key={season.id} onClick={() => handleSeasonClick(season)}>
                  {season.name}
                </div>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SeasonDetails;
