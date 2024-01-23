// video.js
import React, { useRef } from 'react';
import { Player } from 'video-react';

import ChapterList from './chapterList';
import data from '../data.json';

import 'video-react/dist/video-react.css';

const Video = () => {
  const playerRef = useRef(null);

  const getFilmURL = () => {
    return data.Film.file_url;
  };


  const handleChapterClick = (pos) => {
    if (playerRef.current) {
      playerRef.current.seek(parseFloat(pos));
    }
  };

  return (
    <div className="video-container">
      <Player ref={playerRef} playsInline src={getFilmURL()}>
      </Player>
      <ChapterList onChapterClick={handleChapterClick} />
    </div>
  );
};

export default Video;

