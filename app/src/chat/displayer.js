// displayer.js
import React from 'react';

const Displayer = ({ messages }) => {
  // Filtrer les messages ayant un timestamp supérieur au moment actuel
  const currentTimestamp = Date.now();
  const filteredMessages = messages.filter((message) => message.when <= currentTimestamp);

  const sortedMessages = [...filteredMessages].sort((a, b) => a.when - b.when);

  const renderClickableNumbers = (text) => {
    const regex = /\b\d+\b/g;
    const matches = text.match(regex);

    if (!matches) {
      return text;
    }

    // Remplacez les nombres par des boutons cliquables avec le nombre affiché
    return text.split(regex).map((part, index) => (
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <button key={index} onClick={() => handleNumberClick(part)}>
          {matches}
        </button>
      )
    ));
  };

  const handleNumberClick = (number) => {
    console.log(`Number ${number} clicked!`);
  };

  return (
    <div>
      <h2>Chat Messages</h2>
      <ul>
        {sortedMessages.map((message, index) => (
          <li key={index}>
            <strong>{message.name}: </strong>
            <p>{renderClickableNumbers(message.message)}</p>
            <p>{new Date(message.when).toLocaleString()}</p>
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Displayer;
