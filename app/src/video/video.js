// video.js
import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import data from '../data.json';
import 'video-react/dist/video-react.css';

const Video = () => {
  const getFilmURL = () => {
    return data.Film.file_url;
  };

  return (
    <Player playsInline src={getFilmURL()}>
    </Player>
  );
};

export default Video;