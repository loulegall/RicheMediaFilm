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
        <button className='button-displayer' key={index} onClick={() => handleNumberClick(numberMatched)}>
          {numberMatched}
        </button>
      )
    ));
  };
  const handleNumberClick = (number) => {
    onNumberClick(number);
  };

  return (
    <div className="chat-container">
      <h2 className="keyword-list-title">Chat Messages</h2>
      <ul className="message-list">
        {sortedMessages.map((message, index) => (
          <li key={index} className="message-item">
            <div className="message-header">
              <strong className="message-sender">{message.name}</strong>
              <span className="message-time">
                {new Date(message.when).toLocaleString()}
              </span>
            </div>
            <div className="message-content">
              <p>{renderClickableNumbers(message.message)}</p>
              <p>{message.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};
export default Displayer;