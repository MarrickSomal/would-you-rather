import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ExitApp from '@material-ui/icons/ExitToApp'

import '../styles/nav.css'

class Nav extends Component {

    render() {
        return (
            <div>
                {/* the Toolbar component is nested inside the AppBar component 
                to display the navigation links in a row as opposed to in a column */}
                <AppBar position="fixed">
                    <Toolbar>
                        <ul className = "navigation-links">
                            <li><NavLink exact to="/" >Home</NavLink></li>
                            <li><NavLink to="/newpoll" >Ask a question</NavLink></li>
                            <li><NavLink to="/leaderboard" >Leader Board</NavLink></li>
                        </ul>
                        <div style={{flexGrow:"1"}}></div>
                        <Avatar/>
                        <Typography variant="h6" className="navigation-username">
                            John Smith
                        </Typography>
                        <Button
                            icon={<ExitApp/>}
                        >
                            Log out
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Nav;