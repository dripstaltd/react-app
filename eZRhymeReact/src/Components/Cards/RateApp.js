import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import StarRating from '../StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function RateApp(props) {
  const [showMenu, setShowMenu] = useState(true);
  let content = null;
  if (showMenu && props.visible) {
    content = (
      <Paper className={`w-full relative overflow-hidden p-1 m-1`}>
        <div className="absolute top-1 right-2">
          <FontAwesomeIcon
            style={{ color: 'var(--icon-gray)', fontSize: '1rem' }}
            icon={faTimesCircle}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="pl-8 inline-flex justify-center align-center content-center">
          <div className="pr-4 justify-center align-center content-center">
            <img
              className="h-14 m-2"
              alt="img"
              src="https://image.flaticon.com/icons/png/128/4893/4893149.png"
            />
          </div>
          <div>
            <p className="align-center text-left font-sans font-bold justify-center self-center text-gray-500">
              Rate App
            </p>
            <p className="align-center text-left justify-center self-center font-sans text-gray-400">
              Rate and help us make a better app!
            </p>
            <StarRating />
          </div>
        </div>
      </Paper>
    );
  }

  // onClick={() => setShowMenu(false)
  return content;
}
