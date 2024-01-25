// receiver.js
import React, { useState, useEffect } from 'react';

const Receiver = ({ onMessageReceived }) => {
  const URL = 'wss://imr3-react.herokuapp.com';
  const [connected, setConnected] = useState(false);
  const [, setWs] = useState(null);

  useEffect(() => {
    const newWebSocket = new WebSocket(URL);

    newWebSocket.onopen = () => {
      console.log('connected');
      setConnected(true);
    };

    newWebSocket.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      onMessageReceived(message);
    };

    newWebSocket.onclose = () => {
      console.log('disconnected, reconnect.');
      setConnected(false);
      setWs(new WebSocket(URL));
    };

    // Cleanup on component unmount
    return () => {
      newWebSocket.close();
    };
  }, [onMessageReceived]);

  return (
    <div>
      <h2>WebSocket Status: {connected ? 'Connected' : 'Disconnected'}</h2>
    </div>
  );
};

export default Receiver;
