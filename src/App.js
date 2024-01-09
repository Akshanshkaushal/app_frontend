import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Stories from './components/Stories/Stories';
import Navbar from './components/BottomBar/Navbar';
import PostList from './components/Posts/PostList';
import PostPage from './components/Posts/PostModal';
import Home from './home';
import { LikedProvider } from './Contexts/LikedContext';

function App() {
  return (
    <Router>
      <LikedProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
      </LikedProvider>
    </Router>
  );
}

export default App;
