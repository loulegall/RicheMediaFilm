// Video.js
import React, { useRef, useState } from 'react';
import { Player } from 'video-react';
import ChapterList from './chapterList';
import KeywordList from './keywordList';
import data from '../data.json';

import 'video-react/dist/video-react.css';

const Video = () => {
  const playerRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const getFilmURL = () => {
    return data.Film.file_url;
  };

  const handleTimeUpdate = (event) => {
    if (playerRef.current) {
      setCurrentPosition(Math.floor(event.target.currentTime));
    }
  };

  return (
    <div className="video-container">
      <Player ref={playerRef} playsInline src={getFilmURL()} onTimeUpdate={handleTimeUpdate}>
      </Player>
      <ChapterList onChapterClick={(pos) => playerRef.current.seek(parseFloat(pos))} />
      <KeywordList currentPosition={currentPosition} />
    </div>
  );
};

export default Video;