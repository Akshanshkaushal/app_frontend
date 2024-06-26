import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostPage from './components/Posts/PostModal';
import Home from './home';
import { LikedProvider } from './Contexts/LikedContext';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Profile from './components/Profile/Profile';
import MovieSearch from './components/Search/Search';
import Details from './components/Movies/Details';
import PlaylistPage from './components/PlaylistSection/PlayList/PlayList';
import UserSearch from './components/Search/User_Search/UserSearch';
import ProfileDetails from './components/Search/User_Search/ProfileDetails';
import SeasonDetails from './components/Movies/Series/Seasons';
import StoryDetails from './components/Stories/StoryDetail';
import Platlists from './components/PlaylistSection/Platlists';
import Setting from './components/Profile/Settings/Setting';
import Account from './components/Profile/Settings/Account';
import Community from './components/Profile/Settings/guide/community';
import Personel from './components/Profile/Settings/guide/personel';
import Trending from './components/Trending/Trending';
import Timeline from './components/Timeline/Timeline';
import Follow from './components/Profile/Follow_following/Follow';
import Following from './components/Profile/Follow_following/Following';
import Heading from './components/Trending/Heading';
import TimelineDetail from './components/Timeline/TimelineDetail';
import SearchMain from './components/Search/SearchMain';
import Notification from './components/Notifications/Notification';
import InboxList from './components/Inbox/InboxList';
import Inbox from './components/Inbox/Inbox';
import Reel from './components/Inbox/Reel';
 
 
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
    
          <Route path="/moviesearch" element={<MovieSearch />} />
          <Route path="/search" element={<SearchMain />} />
          <Route path="/usersearch" element={<UserSearch />} />
          <Route path="/inboxlist" element={<InboxList />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/reels" element={<Reel />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/story/:id" element={<StoryDetails/>} />
          <Route path="/profiledetails/:userId" element={<ProfileDetails />} />
          <Route path="/tv/:id/seasons" element={<SeasonDetails  />} />
          <Route path="/playlist/:type" element={<PlaylistPage />} />
          <Route path="/playlist" element={<Platlists />} />
          <Route path="/heading" element={<Heading />} />
          <Route
            path="/profile" element={<Profile />} 
          />
               <Route
            path="/follow" element={<Follow />} 
          />
                <Route
            path="/timelinedetail" element={<TimelineDetail />} 
          />
               <Route
            path="/following" element={<Following />} 
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
            path="/"
            element={<Navigate to="/home" />}
          />
                 <Route
            path="/home"
            element ={<Home />} />
             
              <Route
            path="/trending" element={<Trending />} 
          />
              <Route
            path="/timeline" element={<Timeline />} 
          />
          
        </Routes>
      </LikedProvider>
    </Router>
  );
}

export default App;
