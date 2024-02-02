// Video.js
import React, { useRef, useState, useEffect } from 'react';
import { Player } from 'video-react';
import ChapterList from './chapterList';
import KeywordList from './keywordList';
import data from '../data.json';
import 'video-react/dist/video-react.css';

const Video = ({ clickedNumber }) => {
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

  useEffect(() => {
    if (clickedNumber !== null && !isNaN(parseFloat(clickedNumber))) {
      setCurrentPosition(parseFloat(clickedNumber));
      playerRef.current.seek(parseFloat(clickedNumber));
    }
  }, [clickedNumber]);

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