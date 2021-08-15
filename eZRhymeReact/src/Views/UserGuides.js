import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Mui from '../Components/MuiTest';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '.1rem',
    margin: '5px 0',
    backgroundColor: '#e5e7eb',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function UserGuides() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={0} square className={classes.paper}>
            <Mui
              name="User Guides"
              description="Learn how to utilise eZRhymeZ power! Here we will show you how to navigate the app through images. This is a step by step user guide on how to use our app. If you prefer to watch a video tutorial, click here now . . ."
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} square className={classes.paper}>
            xs=12 sm=6
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} square className={classes.paper}>
            xs=12 sm=6
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
