import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Paper from '@material-ui/core/Paper';

export default function RecentLyrics() {
  return (
    <Paper className="w-full overflow-hidden p-4 m-1">
      <span>
        <p className="text-blue-400 font-sans font-bold float-left">
          <FontAwesomeIcon icon={faClock} /> Recent Lyrics
        </p>
        <p className="text-blue-400 font-sans text-right ">See All</p>
      </span>

      <div className="text-indigo-400 font-sans text-left p-3 m-2 text-3xl font-bold">
        "Weigh off what they lay on, up your nose like crayons"
      </div>
    </Paper>
  );
}
