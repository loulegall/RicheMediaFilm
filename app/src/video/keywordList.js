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
      <h3 className="keyword-list-title">Keywords</h3>
      <ul className="keyword-list-ul">
        {currentKeywords.map((keyword, index) => (
          <li className="keyword-list-item" key={index}>
            <a href={keyword.url} className="keyword-link">
              {keyword.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordList;