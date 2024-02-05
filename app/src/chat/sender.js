// sender.js
import React, { useState } from 'react';

const Sender = ({ submitMessage, ws }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ws && ws.readyState === WebSocket.OPEN) {
      // Utilisez la fonction submitMessage avec le nouveau format d'envoi
      submitMessage(message);
      
      // Réinitialisez le champ de message
      setMessage('');
    } else {
      console.error("WebSocket is not open.");
    }
  };

  return (
    <div className="send-message-container">
      <h2 className="keyword-list-title">Send a Message</h2>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Sender;