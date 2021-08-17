import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SpeedDial } from '@material-ui/lab';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faPrint, faCog } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(6),
      right: theme.spacing(1),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
  { icon: <FontAwesomeIcon icon={faFileImport} />, name: 'Bulk Import' },
  { icon: <FontAwesomeIcon icon={faCog} />, name: 'Settings' },
  { icon: <FontAwesomeIcon icon={faPrint} />, name: 'Print' },
];

export default function SpeedDials() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      icon={<FontAwesomeIcon icon={faCog} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
}
