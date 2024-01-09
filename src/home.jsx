 import './App.css';
import Stories from './components/Stories/Stories';
import Navbar from './components/BottomBar/Navbar';
import PostList from './components/Posts/PostList';
import Header from './components/Header/Header';
 

function Home() {
  return (
 <>
 <Header/>
    <Stories/>
     <PostList/>
       <Navbar/>
       </>

    
  );
}

export default Home;
