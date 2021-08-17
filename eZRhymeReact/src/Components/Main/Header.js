import React from 'react';
import Paper from '@material-ui/core/Paper';
import Navigation from '../NavComponents/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {
  render() {
    console.log(this);
    return (
      <Paper square elevation={2} style={{ backgroundColor: '#2faef2', fontSize: '1.2rem' }}>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden">
            <header className="font-bold p-4 flex justify-between items-center">
              <Navigation />
              <span className="text-white tracking-wider">ezRhymeZ</span>
              <div>
                <FontAwesomeIcon style={{ color: 'white' }} icon={faStore} />
              </div>
            </header>
          </div>
        </div>
        <form className="flex flex-wrap overflow-hidden w-full justify-center content-center pb-3 ">
          <input
            type="text"
            id="searchBar"
            className="w-3/5 font-sans text-sm cursor-default outline-none border rounded p-3"
            placeholder="Search your lyrics or find new rhyme words..."
            style={{ cursor: 'text' }}
          />

          <button
            id="btnLyrics"
            className="ml-1 p-3 bg-blue-600 text-center  self-center rounded text-white font-sans"
          >
            Lyrics
          </button>
          <button
            id="btnWords"
            className="ml-1 p-3 bg-blue-600 rounded text-white justify-center font-sans  text-center  self-center"
          >
            Words
          </button>
        </form>
      </Paper>
    );
  }
}
