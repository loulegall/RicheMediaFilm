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
    <div>
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Sender;