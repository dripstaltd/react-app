import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #5382f1 30%, #2faef2 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 1px 0 #6c6c6c',
    color: '#efefef',

    padding: '0 30px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.3rem',
    padding: '.3rem',
  },
  description: {
    fontSize: '1rem',
    fontFamily: 'var(--font-secondary)',
    paddingBottom: '1rem',
    paddingTop: '.1rem',
  },
});

export default function Mui(props) {
  const title = props.name;
  const description = props.description;
  const linkUrl = props.linkUrl;
  const classes = useStyles();
  const newTab = () => {
    return window.open(linkUrl);
  };
  return (
    <Container className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <span
        style={{ cursor: 'pointer', paddingBottom: '.5rem', color: '#47c4fe' }}
        onClick={newTab}
      >
        {props.linkName}
      </span>
    </Container>
  );
}
