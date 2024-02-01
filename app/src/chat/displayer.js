// displayer.js
import React from 'react';

const Displayer = ({ messages }) => {
  // Filtrer les messages ayant un timestamp supérieur au moment actuel
  const currentTimestamp = Date.now();
  const filteredMessages = messages.filter((message) => message.when <= currentTimestamp);

  // Triez les messages filtrés par ordre croissant en fonction de la propriété "when"
  const sortedMessages = [...filteredMessages].sort((a, b) => a.when - b.when);

  return (
    <div>
      <h2>Chat Messages</h2>
      <ul>
        {sortedMessages.map((message, index) => (
          <li key={index}>
            <strong>{message.name}: </strong>
            <p>{message.message}</p>
            <p>{new Date(message.when).toLocaleString()}</p>
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Displayer;