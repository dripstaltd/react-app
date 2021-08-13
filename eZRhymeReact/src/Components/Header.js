import React from 'react';
import Paper from '@material-ui/core/Paper';
import Navigation from './Navigation';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
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
      <Input />
    </Paper>
  );
}
