import React from 'react';
import data from '../data.json';

const ChapterList = ({ onChapterClick }) => {
  const { Chapters } = data;

  return (
    <div className="chapter-list">
      <h3>Chapters</h3>
      <ul>
        {Chapters.map((chapter) => (
          <li key={chapter.pos} onClick={() => onChapterClick(chapter.pos)}>
            {chapter.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
