// sender.js
import React, { useState } from 'react';

const Sender = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitMessage(message);
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
