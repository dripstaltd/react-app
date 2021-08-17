import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faForward,
  faBackward,
  faVolumeOff,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

function MusicPlayer() {
  const [playing, setPlaying] = useState(null);
  const [volume, setVolume] = useState(true);

  return (
    <div className="music-player pt-2 mt-1 justify-items-center w-full items-center relative h-30 flex justify-center content-center align-center">
      {/* Current Song Image */}
      <div
        className="h-28 w-28 z-50 border border-gray-300 drop-shadow-md rounded-full bg-white bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://medias.spotern.com/wanted/w640/60/60386-1604787934.jpg)',
        }}
      ></div>
      {/** Player Interface */}
      <Paper
        elevation={1}
        className="w-3/5 h-24 pl-14 -ml-14 flex object-center flex-col items-center justify-center content-center align-center relative"
      >
        {/** --------------- Player Controls ----------------*/}
        {/*- Song Information and mute button -*/}
        <div name="information" className=" w-9/12">
          <div
            name="songName"
            className="font-sans text-left"
            style={{
              color: `${'#2faef2'}`,
            }}
          >
            Central Cee
          </div>
          <div
            className="w-9/10 p-0.5 pl-1 font-sans text-xs min-h-2 rounded"
            style={{
              backgroundColor: `${'#efefef'}`,
              boxShadow: `inset 0 0 1px 0 ${'#a7b4bd'}`,
            }}
          >
            loading ft Central Cee
          </div>
          <div name="volume-controls" className="absolute top-1 right-3">
            <FontAwesomeIcon name="volume" className="" color={'#2faef2'} icon={faVolumeOff} />
          </div>
        </div>
        {/** ---------- Song Position Slider --------------*/}
        <div className="w-full overflow-hidden p-1 flex align-center justify-center">
          <div
            name="slider"
            className="h-2 w-10/12 rounded shadow-inner"
            style={{
              backgroundColor: `${'#efefef'}`,
              boxShadow: `inset 0 1px 1px 0 ${'#a7b4bd'}`,
            }}
          />
        </div>
        {/** ----------- Forward Play Backwards -------------*/}
        <div name="controls" className="inline-flex items-center p-1">
          <FontAwesomeIcon name="backward" className="mr-2" color={'#a7b4bd'} icon={faBackward} />
          <FontAwesomeIcon name="play" className="ml-10 mr-10" color={'#a7b4bd'} icon={faPlay} />
          <FontAwesomeIcon name="forward" className="ml-2" color={'#a7b4bd'} icon={faForward} />
        </div>
      </Paper>
    </div>
  );
}

export default MusicPlayer;
