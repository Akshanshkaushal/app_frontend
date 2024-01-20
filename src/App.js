import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostPage from './components/Posts/PostModal';
import Home from './home';
import { LikedProvider } from './Contexts/LikedContext';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Profile from './components/Profile/Profile';
import MovieSearch from './components/Movies/Search';
import Details from './components/Movies/Details';
import PlaylistPage from './components/PlaylistSection/PlayList/PlayList';
import UserSearch from './components/Profile/User_Search/UserSearch';
import ProfileDetails from './components/Profile/User_Search/ProfileDetails';
import SeasonDetails from './components/Movies/Series/Seasons';
import StoryDetails from './components/Stories/StoryDetail';
import Platlists from './components/PlaylistSection/Platlists';
import Setting from './components/Profile/Settings/Setting';
import Account from './components/Profile/Settings/Account';
import Community from './components/Profile/Settings/guide/community';
import Personel from './components/Profile/Settings/guide/personel';
 
 
const isAuthenticated = () => {
  const token = localStorage.getItem('jwttoken'); 
  return !!token; 
};

 
const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  );
};

function App() {
  return (
    <Router>
      <LikedProvider>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/moviesearch" element={<MovieSearch />} />
          <Route path="/usersearch" element={<UserSearch />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/story/:id" element={<StoryDetails/>} />
          <Route path="/profiledetails/:userId" element={<ProfileDetails />} />
          <Route path="/tv/:id/seasons" element={<SeasonDetails  />} />
          <Route path="/playlist/:type" element={<PlaylistPage />} />
          <Route path="/playlist" element={<Platlists />} />
          <Route
            path="/profile" element={<Profile />} 
          />
           <Route
            path="/comunity_guide" element={<Community/>} 
          />
           <Route
            path="/personel_guide" element={<Personel/>} 
          />
          
               <Route
            path="/settings" element={<Setting/>} 
          />
             <Route
            path="/account" element={<Account />} 
          />
          <Route
            path="/post/:postId" element={<PostPage/>}
          />
           <Route
            path="/home"
            element={<PrivateRoute element={<Home />} path="/home" />}
          />
        </Routes>
      </LikedProvider>
    </Router>
  );
}

export default App;
