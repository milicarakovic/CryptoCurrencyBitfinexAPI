import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React from 'react';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { useState } from 'react';

function ProfilePage() {
  const classes = useStyles(makeStyles);
  const [name, setName] = useState('Milica Rakovic');
  const [email, setEmail] = useState('milica.rakovic1@gmail.com');
  const [github, setGithub] = useState('https://github.com/milicarakovic');
  const [image, setImage] = useState(
    'https://api.hello-avatar.com/adorables/285/' + email
  );

  function makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleChangeAvatar = () => {
    const url = 'https://api.hello-avatar.com/adorables/285';
    let email = makeid(8);
    setImage(url + email);
  };

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.con2}>
          <img src={image} alt="user" className={classes.image} />
          <Button
            variant="contained"
            startIcon={<ShuffleIcon />}
            onClick={handleChangeAvatar}
            className={classes.button}
          >
            Toggle avatar
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.con}>
          <Grid item xs={12} className={classes.field}>
            <label id="label-name" className={classes.label}>
              Name:
            </label>
            <TextField
              id="standard-name"
              InputProps={{
                readOnly: true,
                className: classes.textField,
              }}
              value={name}
              style={{ width: '70%' }}
            />
          </Grid>
          <Grid item xs={12} className={classes.field}>
            <label id="label-email" className={classes.label}>
              Email:
            </label>
            <TextField
              id="standard-email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleChangeAvatar();
              }}
              InputProps={{
                className: classes.textField,
              }}
              style={{ width: '70%' }}
            />
          </Grid>
          <Grid item xs={12} className={classes.field}>
            <label id="label-github" className={classes.label}>
              GitHub:
            </label>
            <TextField
              id="standard-github"
              InputProps={{
                readOnly: true,
                className: classes.textField,
              }}
              value={github}
              style={{ width: '70%' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfilePage;

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: '5% auto auto auto',
      width: '70%',
      border: '1px solid',
      borderRadius: '10px',
      position: 'relative',
      padding: '1%',
      boxShadow: '10px  10px  5px',
      background: '#292E32',
    },
    con: {
      margin: 'auto 0 auto 0',
      textAlign: 'center',
    },
    con2: {
      padding: '5%',
      textAlign: 'center',
    },
    image: {
      borderRadius: '10px',
      display: 'block',
      margin: '5% auto 5% auto',
      width: '50%',
    },
    button: {
      margin: 'auto',
      width: '70%',
      background: 'linear-gradient(45deg, #3D4246 30%, #121212 60%)',
      color: 'white',
    },
    field: {
      height: '20%',
      marginBottom: '5%',
    },
    label: {
      float: 'left',
      width: '5%',
      color: '#A4A5A7',
      fontWeight: 'bold',
    },
    textField: {
      color: 'white',
      marginLeft: '5%',
    },
  })
);
