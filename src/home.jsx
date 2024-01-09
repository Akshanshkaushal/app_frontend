 import './App.css';
import Stories from './components/Stories/Stories';
import Navbar from './components/BottomBar/Navbar';
import PostList from './components/Posts/PostList';
 

function Home() {
  return (
 <>
    <Stories/>
     <PostList/>
       <Navbar/>
       </>

    
  );
}

export default Home;
