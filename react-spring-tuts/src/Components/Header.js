import React from 'react';
import Paper from '@material-ui/core/Paper';
import Navigation from './Navigation';

function Header() {
  return (
    <Paper square elevation={2}>
      <header className="app-header flex justi-b items-center">
        <span className="app-name bold">AppName</span>
        <Navigation />
      </header>
    </Paper>
  );
}

export default Header;
