import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import ResetDialog from './ResetDialog';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {useStyles} from '../styles/Login';


const Login = (props) => {

  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const name = event.target.value;
    setUsername(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, id } = props;
    dispatch(setAuthedUser(username, id));
    setUsername('');
    try {
      history.push("/home");
    } catch (e) {
      alert(e.message);
    }
  };

    const { users } = props;

    return (
      <div className={classes.pageSizing}>
        <div className={classes.page}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.content}
          >
            <Grid item xs={10}>
              <form className={classes.formTag}>
                <Card className={classes.formContainer}>
                  <CardHeader
                    className={classes.header}
                    title="Welcome to the Would You Rather App!"
                    subheader="Please sign in or reset your current game"
                  ></CardHeader>
                  <CardContent>
                    <img alt="" src={'/images/avatars/animals.png'} height="300" centred />
                    <FormControl fullWidth>
                      <InputLabel className={classes.inputLabel}>
                        {' '}
                        {username === '' ? 'Select a User to begin' : ''}
                      </InputLabel>
                      <Select
                        value={username}
                        onChange={handleChange}
                        className={classes.select}
                      >
                        {Object.keys(users).map((user) => (
                          <MenuItem value={user} key={user}>
                            {users[user].name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Grid container className={classes.buttonGrid} spacing={3}>
                      <Grid item xs={6}>
                          <Button
                            className={classes.loginButton}
                            disabled={username === ''}
                            fullWidth
                            onClick={handleSubmit}
                            variant="contained"
                          >
                            Sign in
                          </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <ResetDialog/>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
