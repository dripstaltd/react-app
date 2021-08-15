import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
const useStyles = makeStyles({
  root: {
    width: 130,
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <FontAwesomeIcon name="volume" className="" color={'#2faef2'} icon={faVolumeUp} />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <FontAwesomeIcon name="volume" className="" color={'#2faef2'} icon={faVolumeDown} />
        </Grid>
      </Grid>
    </div>
  );
}
