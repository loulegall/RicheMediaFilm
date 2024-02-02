// displayer.js
import React from 'react';

const Displayer = ({ messages, onNumberClick }) => {
  const currentTimestamp = Date.now();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const filteredMessages = messages.filter((message) => {
    const messageDate = new Date(message.when);
    return messageDate >= oneYearAgo && messageDate <= currentTimestamp;
  });
  const sortedMessages = [...filteredMessages].sort((a, b) => a.when - b.when);

  const renderClickableNumbers = (text) => {
    const regex = /\b\d+\b/g;
    const numberMatched = text.match(regex);

    if (!numberMatched) {
      return text;
    }

    // Remplacez les nombres par des boutons cliquables avec le nombre affiché
    return text.split(regex).map((part, index) => (
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <button key={index} onClick={() => handleNumberClick(numberMatched)}>
          {numberMatched}
        </button>
      )
    ));
  };
  const handleNumberClick = (number) => {
    onNumberClick(number);
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