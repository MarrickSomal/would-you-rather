import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import UserCard from './UserCard'

import '../styles/home.css'


class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <Card>
                    <Tabs 
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"  
                    >
                        <Tab label="Unanswered"  />
                        <Tab label="Answered"  />
                        <UserCard />
                    </Tabs>
                </Card>
            </div>    
        );
    }
}

export default Home;