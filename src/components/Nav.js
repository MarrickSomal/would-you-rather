import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import ExitAppIcon from '@material-ui/icons/ExitToApp'

import '../styles/nav.css'

class Nav extends Component {

    /*When the user clicks on the Logout button handleLogout is invoked.
    handleLogout dispatches the setAuthedUser action which sets the authedUser to null
    according to the App.js code, when authedUser is set to null the Login screen shows,
    hence the user has been logged out  */

    handleLogout = e => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(null));
      };
    
    render() {

        const { authedUser, users } = this.props;


        return (
            <div>
                {/* the Toolbar component is nested inside the AppBar component 
                to display the navigation links in a row as opposed to in a column */}
                <AppBar className= "app-bar" position="sticky" style={{ background: '#ffffff' }}>
                    <Toolbar>
                        <ul className = "navigation-links">
                            <li><NavLink exact to="/" >Home</NavLink></li>
                            <li><NavLink to="/add" >New Poll</NavLink></li>
                            <li><NavLink to="/leaderboard" >Leader Board</NavLink></li>
                        </ul>
                        <div className="right-menu"> </div>
                        <span>
                            <Avatar
                            alt={users[authedUser].name}
                            src={users[authedUser].avatarURL}
                            size={100}
                            />
                        </span>
                        <p className="navigation-username">
                        {users[authedUser].name}
                        </p>
                        <Button
                            endIcon={<ExitAppIcon/>}
                            onClick={this.handleLogout}
                            style={{textTransform: 'none'}}
                        >
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
      authedUser,
      users
    };
  }

export default connect(mapStateToProps)(Nav);