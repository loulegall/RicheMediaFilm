import React, { useState, useEffect } from 'react';
import data from '../data.json';

const KeywordList = ({ currentPosition }) => {
  const [currentKeywords, setCurrentKeywords] = useState([]);

  useEffect(() => {
    const updateKeywords = () => {
      const keywords = data.Keywords.filter((keyword) => parseFloat(keyword.pos) <= currentPosition);
      //console.log("keywords:", keywords);
      if (keywords.length > 0) {
        setCurrentKeywords(keywords[keywords.length - 1].data);
      } else {
        setCurrentKeywords([]);
      }
    };
    
    updateKeywords(); 

    return () => {
    };
  }, [currentPosition]);

  return (
    <div className="keyword-list">
      <h3>Keywords</h3>
      <ul>
        {currentKeywords.map((keyword, index) => (
          <li key={index}>
            <a href={keyword.url}>
              {keyword.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordList;