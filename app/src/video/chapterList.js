import React from 'react';
import data from '../data.json';

const ChapterList = ({ onChapterClick }) => {
  const { Chapters } = data;

  return (
    <div className="chapter-list bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Chapters</h3>
      <ul>
        {Chapters.map((chapter) => (
          <li 
            className="cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-300"
            key={chapter.pos} 
            onClick={() => onChapterClick(chapter.pos)}>
            {chapter.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
