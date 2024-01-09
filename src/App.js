import logo from './logo.svg';
import './App.css';
import Stories from './components/Stories/Stories';
import Navbar from './components/BottomBar/Navbar';
import PostList from './components/Posts/PostList';

function App() {
  return (
  
     <div>
      <Stories/>
      <PostList/>
       <Navbar/>
       </div>
    
  );
}

export default App;
