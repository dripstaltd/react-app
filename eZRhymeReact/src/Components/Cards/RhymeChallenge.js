import React from 'react';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faTimesCircle,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function RhymeChallenge(props) {
  const [showMenu, setShowMenu] = useState(true);
  let content = null;
  if (showMenu && props.visible) {
    content = (
      <Paper className="w-full overflow-hidden p-4 m-1 relative">
        <div className="absolute top-1 right-2">
          <FontAwesomeIcon
            style={{ color: 'var(--icon-gray)', fontSize: '1rem' }}
            icon={faTimesCircle}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <span className="text-blue-400 font-sans font-bold">
          <FontAwesomeIcon icon={faCalendarAlt} /> Rhyme this word?
        </span>
        <p className="font-bold text-blue-400 font-sans font-medium text-center p-4 text-4xl">
          Crayons
        </p>
        <div className="text-blue-400 font-sans text-center pt-4">
          <FontAwesomeIcon
            style={{ color: 'var(--icon-gray)', fontSize: '.7rem', marginRight: '.5rem' }}
            icon={faChevronLeft}
          />
          Next Word
          <FontAwesomeIcon
            style={{ color: 'var(--icon-gray)', fontSize: '.7rem', marginLeft: '.5rem' }}
            icon={faChevronRight}
          />
        </div>
      </Paper>
    );
  }
  return content;
}
