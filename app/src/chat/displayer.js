// displayer.js
import React from 'react';

const Displayer = ({ messages }) => {
    console.log("messages:", messages[0]);
  return (
    <div>
      <h2>Chat Messages</h2>
      <ul>
        {messages[0].map((message, index) => (
            
          <li key={index}>
            <strong>{message.name}: </strong>
            <p>{message.message}</p>
            <p>{message.when}</p>
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Displayer;
