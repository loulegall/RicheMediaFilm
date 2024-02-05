// sender.js
import React, { useState } from 'react';

const Sender = ({ submitMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utilisez la fonction submitMessage avec le nouveau format d'envoi
    submitMessage(message);
    
    // Réinitialisez le champ de message
    setMessage('');
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