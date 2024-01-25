import React, { useState } from 'react';
import Displayer from './chat/displayer';
import Sender from './chat/sender';
import Receiver from './chat/receiver';
import Video from './video/video';

function App() {
  const [ws, setWs] = useState(null);  // Ajoutez cette ligne

  const [chatMessages, setChatMessages] = useState([]);

  const addChatMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  const submitChatMessage = (messageString) => {
    const message = { name: 'Your Name', message: messageString };
    // Assuming that ws is available globally or managed by some state management solution
    ws.send(JSON.stringify(message));
  };
 
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
          <Displayer messages={chatMessages} />
          <Sender onSubmitMessage={submitChatMessage} />
          <Receiver onMessageReceived={addChatMessage} />
        </div>
      </header>
    </div>
  );
}

export default App;
