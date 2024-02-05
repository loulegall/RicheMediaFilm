// Video.js
import React, { useRef, useState, useEffect } from 'react';
import { Player } from 'video-react';
import ChapterList from './chapterList';
import KeywordList from './keywordList';
import data from '../data.json';
import MyMapComponent from '../map';

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
    <div >
      {/* Video Player Section */}
      <div>
        <Player ref={playerRef} playsInline src={getFilmURL()} onTimeUpdate={handleTimeUpdate}>
        </Player>
        <ChapterList onChapterClick={(pos) => playerRef.current.seek(pos)} />
      </div>

      {/* Map Section */}
      <div>
        <MyMapComponent onMarkerClick={(timestamp) => playerRef.current.seek(timestamp)} />
      </div>

      {/* Keywords Section */}
      <div >
        <KeywordList currentPosition={currentPosition} />
      </div>
    </div>
  );
};

export default Video;