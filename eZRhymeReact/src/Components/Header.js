import React from 'react';
import Paper from '@material-ui/core/Paper';
import Navigation from './Navigation';
import Input from './Input';

export default function Header() {
  return (
    <Paper square elevation={2} style={{ backgroundColor: '#2faef2' }}>
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden">
          <header className="font-bold p-4 flex justify-between items-center">
            <Navigation />
            <span className="text-white tracking-wider">ezRhymeZ</span>
            <div>@</div>
          </header>
        </div>
      </div>
      <Input/>
    </Paper>
  );
}
