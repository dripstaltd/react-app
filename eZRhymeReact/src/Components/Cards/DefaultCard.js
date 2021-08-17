import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function DefaultCard(props) {
  const dataArray = [...props.dd];
  return dataArray.map((item) => {
    return (
      <li className="p-1">
        <Paper elevation={3} className="p-1">
          {item}
        </Paper>
      </li>
    );
  });
}
