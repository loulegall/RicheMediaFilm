import React, { useState, useEffect } from 'react';
import Displayer from './chat/displayer';
import Sender from './chat/sender';
import Video from './video/video';
import './App.css';
import MyMapComponent from './map';
import { TiMessages } from "react-icons/ti";


const URL = "wss://imr3-react.herokuapp.com";

function App() {
  const [ws, setWs] = useState(null);
  const [, setConnected] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [clickedNumber, setClickedNumber] = useState(0);
  const [showChat, setShowChat] = useState(true);


  useEffect(() => {
    // Instancier un client WebSocket lors du montage du composant
    const webSocket = new WebSocket(URL);

    // Cyle de vie du client WebSocket
    webSocket.onopen = () => {
      console.log("connected");
      setConnected(true);
    };

    webSocket.onmessage = (evt) => {
      const messages = JSON.parse(evt.data);
      setChatMessages((prevMessages) => [...prevMessages, ...messages]);
    };

    webSocket.onclose = () => {
      console.log("disconnected, reconnect.");
      setConnected(false);
      setTimeout(() => {
        setWs(new WebSocket(URL));
      }, 5000);
    };

    // Fermer la connexion WebSocket lors du démontage du composant
    return () => {
      webSocket.close();
    };
  }, []); // Le tableau vide signifie que ce hook ne s'exécute qu'une seule fois lors du montage initial.


  const submitChatMessage = (messageString) => {
    const message = { name: 'TestName', message: messageString }; 
    ws.send(JSON.stringify(message));
  };

  const handleNumberClick = (number) => {
    setClickedNumber(number); // Mettez à jour la state avec le numéro cliqué
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title text-2xl lg:text-3xl font-bold mb-4">Video Reader</h1>
      </header>
      <body className="App-body">
        <div className='col-1'>
          <Video clickedNumber={clickedNumber} />
        </div>
        <div className='col-2'>
          <Displayer messages={chatMessages} onNumberClick={handleNumberClick} />
          <Sender submitMessage={submitChatMessage} />
        </div>
      </body>
      <footer className="App-footer">
        <div className="footer-content">
          <div className="footer-info">
            <p>Lou LE GALL et Rémi UHARTEGARAY</p>
            <p>IAI3</p>
            <p>2024</p>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-message">
            <p>© 2024 Video Reader. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
