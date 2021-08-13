import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function card(props) {
  let data = props.data;
  const bindData = data.data;
  console.log(bindData);
  return (
    <Paper className="" elevation={3}>
      <div className="card__name bold mb-2">{bindData.name}</div>
    </Paper>
  );
}
