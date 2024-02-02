import React, { useState } from 'react';
import Displayer from './chat/displayer';
import Sender from './chat/sender';
import Receiver from './chat/receiver';
import Video from './video/video';
import './App.css';
import MyMapComponent from './map';

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
    <div className="App min-h-screen flex flex-col lg:flex-row items-center justify-center">
      {/* Video Section */}
      <section className="lg:w-1/2 p-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Video Reader</h1>
          <Video />
        </div>
      </section>

      {/* Chat Section */}
      <section className="lg:w-1/2 p-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Chat</h1>
          {/* <Displayer messages={chatMessages} /> */}
          <Sender onSubmitMessage={submitChatMessage} />
          {/* <Receiver onMessageReceived={addChatMessage} /> */}
        </div>
      </section>
    </div>
  );
}

export default App;