import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ExitAppIcon from '@material-ui/icons/ExitToApp';

import { withStyles } from '@material-ui/core/styles';
import {styles} from '../styles/Nav';

class Nav extends Component {
  /*When the user clicks on the Logout button handleLogout is invoked.
    handleLogout dispatches the setAuthedUser action which sets the authedUser to null
    according to the App.js code, when authedUser is set to null the Login screen shows,
    hence the user has been logged out  */

  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    const { authedUser, classes, users } = this.props;

    return (
      <div>
        {/* the Toolbar component is nested inside the AppBar component 
                to display the navigation links in a row as opposed to in a column */}
        <AppBar className={classes.appBar}>
          <Toolbar>
            <ul className={classes.navigationLinks}>
              <li>
                <NavLink className={classes.navigationLink} activeClassName={classes.isActive} exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={classes.navigationLink} activeClassName={classes.isActive} exact to="/add">New Poll</NavLink>
              </li>
              <li className={classes.navigationLink}>
                <NavLink className={classes.navigationLink} activeClassName={classes.isActive} exact to="/leaderboard">Leader Board</NavLink>
              </li>
            </ul>
            <div className={classes.rightMenu}> </div>
            <span>
              <Avatar alt={users[authedUser].name} src={users[authedUser].avatarURL} size={100} />
            </span>
            <p className={classes.navigationUsername}>{users[authedUser].name}</p>
            <Button
              className={classes.logoutButton}
              endIcon={<ExitAppIcon />}
              onClick={this.handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Nav));
