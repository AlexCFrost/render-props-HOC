import './App.css';
import Likes from './Components/Likes';
import LikeImage from './Components/LikeImage';
import LikePost from './Components/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <Likes render = {(count, incrementCount)=> <LikeImage count = {count} incrementCount = {incrementCount}/>}/>
        <Likes render = {(count, incrementCount)=> <LikePost count = {count} incrementCount = {incrementCount}/>}/>
      </div>
    </div>
  );
}

export default App;