import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Mui from '../Components/MuiTest';
import { faSave, faSearchPlus, faTrashAlt, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '@material-ui/core/Input';
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
  pairs: {
    height: '50vh',
    backgroundColor: '#2faef2',
    width: '90%',
    borderRadius: '.2rem',
    padding: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    color: '#47c4fe',
    backgroundColor: '#fff',
    borderRadius: '.2rem',
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function WordPairs() {
  const classes = useStyles();
  const wordPairsDescription = `With many accents changing the way words sound, some artist are able to make words flow, where others cant. Here add custom word pairs that you haven't been suggest through the search bar results`;

  return (
    <div className={classes.root}>
      <Grid xs={12} container spacing={0}>
        <Grid item>
          <Paper elevation={0} square className={classes.paper}>
            <Mui name="Word Pairs" description={wordPairsDescription} />
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper elevation={0} square className={classes.paper}>
            <div className={classes.pairs}>
              <h2 className={classes.title}>Single Entries</h2>
              <form className={classes.form} noValidate autoComplete="off">
                <Input placeholder="Word 1" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Word 2" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
              </form>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper elevation={0} square className={classes.paper}>
            <div className={classes.pairs}>
              <h2 className={classes.title}>Multiple Entries</h2>
              <form className={classes.form} noValidate autoComplete="off">
                <Input
                  placeholder="Enter word you will rhyme here"
                  inputProps={{ 'aria-label': 'description' }}
                />
                <Input placeholder="Now rhyme it" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="And again" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Again" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="And again" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="And ?" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="1 more" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Last one" inputProps={{ 'aria-label': 'description' }} />
              </form>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            <button className="flex w-28 p-1 overflow-hidden bg-blue-600 rounded text-white justify-center font-sans text-center items-center">
              <span className="">
                <FontAwesomeIcon style={{ color: 'white', fontSize: '1rem' }} icon={faSave} />
                <span className="p-2">Save</span>
              </span>
            </button>
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            <button className="flex w-28 p-1 overflow-hidden bg-blue-600 rounded text-white justify-center font-sans text-center items-center">
              <span className="">
                <FontAwesomeIcon style={{ color: 'white', fontSize: '1rem' }} icon={faTrashAlt} />
                <span className="p-2">Clear</span>
              </span>
            </button>
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            <button className="flex w-28 p-1 overflow-hidden bg-blue-600 rounded text-white justify-center font-sans text-center items-center">
              <span className="">
                <FontAwesomeIcon style={{ color: 'white', fontSize: '1rem' }} icon={faSave} />
                <span className="p-2">Save</span>
              </span>
            </button>
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper elevation={0} square className={classes.paper}>
            <button className="flex w-28 p-1 overflow-hidden bg-blue-600 rounded text-white justify-center font-sans text-center items-center">
              <span className="">
                <FontAwesomeIcon style={{ color: 'white', fontSize: '1rem' }} icon={faTrashAlt} />
                <span className="p-2">Clear</span>
              </span>
            </button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
