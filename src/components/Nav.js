import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import ExitAppIcon from '@material-ui/icons/ExitToApp'

import '../styles/nav.css'

class Nav extends Component {

    render() {
        return (
            <div>
                {/* the Toolbar component is nested inside the AppBar component 
                to display the navigation links in a row as opposed to in a column */}
                <AppBar className= "app-bar" position="sticky" style={{ background: '#ffffff' }}>
                    <Toolbar>
                        <ul className = "navigation-links">
                            <li><NavLink exact to="/" >Home</NavLink></li>
                            <li><NavLink to="/newpoll" >New Poll</NavLink></li>
                            <li><NavLink to="/leaderboard" >Leader Board</NavLink></li>
                        </ul>
                        <div className="right-menu"> </div>
                        <Avatar/>
                        <p className="navigation-username">
                            John Smith
                        </p>
                        <Button
                            style={{textTransform: 'none'}}
                            endIcon={<ExitAppIcon/>}
                        >
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Nav;