import logo from './logo.svg';
import './App.css';
import Stories from './components/Stories/Stories';
import Post from './components/Post';
import Navbar from './components/BottomBar/Navbar';

function App() {
  return (
     <>
     <div className=' '>
      <Stories/>
      <Post/>
       <Navbar/>
       </div>
     </>
  );
}

export default App;
