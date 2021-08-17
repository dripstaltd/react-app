import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function InviteFriends(props) {
  const [showMenu, setShowMenu] = useState(true);
  let content = null;
  if (showMenu && props.visible) {
    content = (
      <Paper className="w-full overflow-hidden p-4 m-1  content-center align-center justify-left flex flex-wrap  overflow-hidden relative">
        <div className="absolute top-1 right-2">
          <FontAwesomeIcon
            style={{ color: 'var(--icon-gray)', fontSize: '1rem' }}
            icon={faTimesCircle}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="friends rounded-full w-1/6 " />
        <div className="items-start  overflow-hidden text-left content-center align-center justify-center">
          <p className="align-center text-left font-sans font-bold justify-center self-center text-gray-500">
            Invite Friends
          </p>
          <p className="align-center text-left justify-center self-center font-sans text-gray-400">
            Share the app with other writers.
          </p>
        </div>
      </Paper>
    );
  }
  return content;
}
