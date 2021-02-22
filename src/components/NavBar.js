import { Button, createStyles, makeStyles, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LogInContext } from '../App';

export default function NavBar() {
  const classes = styles();
  const history = useHistory();
  const { token, setToken } = useContext(LogInContext);

  const handleLogIn = () => {
    localStorage.setItem('token', true);
    setToken(true);
  };

  return (
    <>
      <Paper square position="static" className={classes.header}>
        <Button className={classes.button} onClick={() => history.push('/')}>
          Home
        </Button>
        {token === true ? (
          <Button
            className={classes.button}
            onClick={() => history.push('/profile')}
          >
            Profile
          </Button>
        ) : (
          <Button
            onClick={handleLogIn}
            className={classes.button}
            style={{ color: '#517DB7' }}
          >
            LogIn
          </Button>
        )}
      </Paper>
    </>
  );
}

const styles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: '#121212',
      color: '#fff7ec',
      flexGrow: 1,
      height: '8vh',
      textAlign: 'center',
    },
    button: {
      width: '10%',
      height: '100%',
      color: 'white',
    },
  })
);
