import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SeasonDetails = () => {
  const [seasonsData, setSeasonsData] = useState(null);
  const [currentSeason, setCurrentSeason] = useState(null);
  const { id } = useParams();
  const jwttoken = localStorage.getItem('jwttoken');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://techsnap-pe2v.onrender.com/movies/movie-details/?id=${id}&type=tv`,
          {
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

        const data = await response.json();
        setSeasonsData(data.data.seasons);
        if (data.data.seasons && data.data.seasons.length > 0) {
          setCurrentSeason(data.data.seasons[0]); // Set the default season
        }
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id, jwttoken]);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSeasonClick = (season) => {
    setCurrentSeason(season);
  };

  const handleTrackButtonClick = async (episode) => {
    const trackApiUrl = `https://techsnap-pe2v.onrender.com/movies/track/?id=${id}&ep=${episode.episode_number}&season=${currentSeason.season_number}&title=${episode.name}&synopsis=${episode.synopsis}&Title=${currentSeason.name}`;
  
    try {
      const response = await fetch(trackApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${jwttoken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data)
  
      console.log('Tracking successful');
    } catch (error) {
      console.error('Error tracking episode:', error);
    }
  };
  

  return (
    <div className='text-white overflow-x-hidden'>
      {currentSeason && (
        <>
          <h2>Season Details for {currentSeason.name}</h2>
          <Slider {...settings}>
            {currentSeason.episodes.map((episode) => (
              <div key={episode.id}>
                <h3>{episode.name}</h3>
                <div
                  className='h-[15rem]'
                  style={{
                    background: `url(${`https://image.tmdb.org/t/p/w500${episode?.still_path}`}) center/contain no-repeat`,
                    color: 'red',
                  }}
                ></div>
                <p>{episode.overview}</p>
                <button
                  className='bg-blue-500 p-2 rounded-full'
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
        <div>
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
