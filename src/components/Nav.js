import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Link, NavLink, useHistory } from 'react-router-dom';

import { AppBar, Avatar, Button, Drawer, IconButton, Toolbar } from '@material-ui/core';
import ExitAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from "@material-ui/icons/Menu";

import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/Nav';

const Nav = (props) => {
  const history = useHistory();
  const [drawer, setDrawer] = useState(false);
  const headersData = [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "New Poll",
      href: "/add",
    },
    {
      label: "Leader Board",
      href: "/leaderboard",
    },
  ];

  const handleDrawerOpen = () => {
    setDrawer(true) 
  }

  const handleDrawerClose = () => {
    setDrawer(false) 
  }

  /*When the user clicks on the Logout button handleLogout is invoked.
    handleLogout dispatches the setAuthedUser action which sets the authedUser to null
    according to the App.js code, when authedUser is set to null the Login screen shows,
    hence the user has been logged out  */

  const handleLogout = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(null));
    history.push('/');
  };

  const { authedUser, classes, users } = props;

  return (
    <div>
      {/* the Toolbar component is nested inside the AppBar component 
                to display the navigation links in a row as opposed to in a column */}
      <AppBar className={classes.appBar}>
        <Toolbar>
          <ul className={classes.navigationLinks}>
            {headersData.map(({label, href} ) => (
            <li>
              <NavLink
                className={classes.navigationLink}
                activeClassName={classes.isActive}
                exact to={href}
              >
                {label}
              </NavLink>
            </li>
            ))}
          </ul>
          <IconButton className={classes.navigationMenu} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton >
          <Drawer
          {...{
            anchor: "left",
            open: drawer,
            onClose: handleDrawerClose,
          }}
        >
          <div>
          {headersData.map(({label, href} ) => (
            <li>
              <Link
                className={classes.navigationLink}
                activeClassName={classes.isActive}
                exact to={href}
              >
                {label}
              </Link>
            </li>
            ))}
          </div>
        </Drawer>
          <div className={classes.navigationSpacing}></div>
            <div className={classes.rightMenu}>
            <span>
              <Avatar alt={users[authedUser].name} src={users[authedUser].avatarURL} size={100} />
            </span>
            <p className={classes.navigationUsername}>{users[authedUser].name}</p>
            <Button
              className={classes.logoutLink}
              endIcon={<ExitAppIcon className={classes.logoutButton} />}
              onClick={handleLogout}
            >
              Logout
            </Button>
            </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Nav));
