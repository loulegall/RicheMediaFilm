import React from 'react';
import data from '../data.json';

const ChapterList = ({ onChapterClick }) => {
  const { Chapters } = data;

  return (
    <div className="chapter-list bg-gray-100 p-4 rounded-md">
      <h3 className="keyword-list-title">Chapters</h3>
      <ul className="horizontal-list">
        {Chapters.map((chapter, index) => (
          <li
            className="cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-300"
            key={chapter.pos}
            onClick={() => onChapterClick(chapter.pos)}
          >
            <span className="chapter-number">{index + 1}.</span> {chapter.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
