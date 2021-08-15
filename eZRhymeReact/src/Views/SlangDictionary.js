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

export default function SlangDictionary() {
  const classes = useStyles();
  const slangDictionaryDescription = `This is a collection of current words used today, many words taken from 'A Drill Dictionary which you can find a link to below:`;
  const articleUrl = 'https://language-and-innovation.com/2018/04/19/a-drill-dictionary/';

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={0} square className={classes.paper}>
            <Mui
              name="Slang Dictionary"
              description={slangDictionaryDescription}
              linkUrl={articleUrl}
              linkName="A Drill Dictionary"
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
