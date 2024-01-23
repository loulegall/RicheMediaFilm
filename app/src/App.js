import './App.css';
import Video from './video/video';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
          <h1>Video reader </h1>
          <Video />
          <p>Chapter list</p>
          <p>Map</p>
          <p>KeyWord display</p>
        </div>
        <div>
          <h1>Chat</h1>

          <p>Chat display</p>
          <p>Chat input</p>
        </div>
      </header>
      
    </div>
  );
}

export default App;