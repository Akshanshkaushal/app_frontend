import { postimg1, postimg2, postimg3, postimg4, postimg5, postimg6, postimg7 } from './assets';

export const dummyMovies = [
  { 
    id: 1, 
    title: "Inception", 
    poster_path: postimg1,
    image_url: postimg1,
    release_date: "2010-07-16",
    overview: "A thief who enters the dreams of others to steal secrets from their subconscious.",
    vote_average: 8.8,
    content_type: "movie"
  },
  { 
    id: 2, 
    title: "The Shawshank Redemption", 
    poster_path: postimg2,
    image_url: postimg2,
    release_date: "1994-09-23",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    vote_average: 9.3,
    content_type: "movie"
  },
  { 
    id: 3, 
    title: "The Dark Knight", 
    poster_path: postimg3,
    image_url: postimg3,
    release_date: "2008-07-18",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    vote_average: 9.0,
    content_type: "movie"
  },
  { 
    id: 4, 
    title: "Pulp Fiction", 
    poster_path: postimg4,
    image_url: postimg4,
    release_date: "1994-10-14",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    vote_average: 8.9,
    content_type: "movie"
  },
  { 
    id: 5, 
    title: "Forrest Gump", 
    poster_path: postimg5,
    image_url: postimg5,
    release_date: "1994-07-06",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    vote_average: 8.8,
    content_type: "movie"
  }
];

export const dummyTvShows = [
  { 
    id: 1, 
    name: "Breaking Bad", 
    title: "Breaking Bad",
    poster_path: postimg6,
    image_url: postimg6,
    first_air_date: "2008-01-20",
    overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    vote_average: 9.5,
    content_type: "tv"
  },
  { 
    id: 2, 
    name: "Game of Thrones", 
    title: "Game of Thrones",
    poster_path: postimg7,
    image_url: postimg7,
    first_air_date: "2011-04-17",
    overview: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    vote_average: 9.3,
    content_type: "tv"
  },
  { 
    id: 3, 
    name: "Stranger Things", 
    title: "Stranger Things",
    poster_path: postimg1,
    image_url: postimg1,
    first_air_date: "2016-07-15",
    overview: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    vote_average: 8.7,
    content_type: "tv"
  },
  { 
    id: 4, 
    name: "The Crown", 
    title: "The Crown",
    poster_path: postimg2,
    image_url: postimg2,
    first_air_date: "2016-11-04",
    overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    vote_average: 8.7,
    content_type: "tv"
  },
  { 
    id: 5, 
    name: "The Mandalorian", 
    title: "The Mandalorian",
    poster_path: postimg3,
    image_url: postimg3,
    first_air_date: "2019-11-12",
    overview: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
    vote_average: 8.8,
    content_type: "tv"
  }
];

export const dummyTrackedData = [
  { 
    id: 1, 
    title: "The Witcher", 
    episode: 3, 
    status: 'continueWatching', 
    image: postimg1,
    content_id: 101,
    value: 60
  },
  { 
    id: 2, 
    title: "Loki", 
    episode: 4, 
    status: 'continueWatching', 
    image: postimg2,
    content_id: 102,
    value: 75
  },
  { 
    id: 3, 
    title: "The Boys", 
    episode: 2, 
    status: 'Havent started', 
    image: postimg3,
    content_id: 103,
    value: 0
  },
  { 
    id: 4, 
    title: "Squid Game", 
    episode: 1, 
    status: 'Comming soon', 
    image: postimg4,
    content_id: 104,
    value: 0
  },
  { 
    id: 5, 
    title: "Money Heist", 
    episode: 5, 
    status: 'continueWatching', 
    image: postimg5,
    content_id: 105,
    value: 80
  }
];

export const dummyPlaylistData = {
  title: "My Favorite Shows",
  movies: [
    ...dummyMovies,
    ...dummyTvShows
  ]
};

export const dummySeenData = {
  title: "Watched",
  movies: dummyMovies.slice(0, 3).concat(dummyTvShows.slice(0, 2))
};

export const dummyMustWatchData = {
  title: "Must Watch",
  movies: dummyMovies.slice(3).concat(dummyTvShows.slice(2))
};

export const dummyLikedData = {
  title: "Liked",
  movies: [dummyMovies[1], dummyMovies[3], dummyTvShows[0], dummyTvShows[2]]
};