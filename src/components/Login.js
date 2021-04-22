import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../styles/Login';

class Login extends Component {
  state = {
    username: '',
  };

  /* 
        When the user enters selects a username from the input field
        the onChange event listener invokes the handleChange() function.
        handleChange() then calls setState(), merging in the new state 
        of username, causing the component to rerender 
      */

  handleChange = (event) => {
    const username = event.target.value;

    this.setState(() => ({ username }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username } = this.state;
    const { dispatch, id } = this.props;

    dispatch(setAuthedUser(username, id));

    this.setState(() => ({
      username: '',
    }));
  };

  render() {
    const { username } = this.state;
    const { classes, users } = this.props;

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
            subheader="Please sign in to continue"
          ></CardHeader>
          <CardContent>
            <img alt="" src={"/images/avatars/animals.png"} height="300" centred />
            <FormControl fullWidth>
              <InputLabel shrink={false}> {username=== '' ? 'Select a User to begin' : ""}</InputLabel>
              <Select value={username} onChange={this.handleChange} className={classes.select}>
                {Object.keys(users).map((user) => (
                  <MenuItem value={user} key={user}>
                    {users[user].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
          <Button
            className={classes.loginButton}
            color="secondary"
            disabled={username === ''}
            fullWidth
            onClick={this.handleSubmit}
            variant="contained"
          >
            Login
          </Button>
        </Card>
        </form>
            </Grid>
            </Grid>
            </div>
         </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Login));
