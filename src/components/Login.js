import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select';

import '../styles/login.css'


class Login extends Component {

    state = {
        username: ''
      }

      /* 
        When the user enters selects a username from the input field
        the onChange event listener invokes the handleChange() function.
        handleChange() then calls setState(), merging in the new state 
        of username, causing the component to rerender 
      */

    handleChange = (event) => {
        const username = event.target.value

        this.setState(() => 
        ({username}))
      };

      
      
        handleSubmit = (event) => {
        event.preventDefault()

        const { username } = this.state
        const { dispatch, id } = this.props

        dispatch(setAuthedUser(username, id))

        this.setState(() => ({
            username: '',
        }))
        }


    render() {
        const { username } = this.state;
        const { users } = this.props;

        return (
         <div className="login-container">
             <Card className="login-card">
                <CardHeader
                className="header"
                title="Welcome to the Would You Rather App!"
                style={{backgroundColor: "#f3f4f5"}}
                subheader="Please sign in to continue"
                >
                </CardHeader>
                <CardContent>
                 <FormControl fullWidth>
                    <InputLabel>Select a User to begin</InputLabel>
                    <Select
                        value={username}
                        onChange={this.handleChange}
                    >
                        {Object.keys(users).map(user=>
                        <MenuItem
                        value={user} 
                        key={user}>
                        {users[user].name}
                        </MenuItem>)}
                    </Select>
                 </FormControl>
                 </CardContent>
                    <Button 
                    color="secondary"
                    disabled={username === ""}
                    fullWidth
                    onClick={this.handleSubmit}
                    style={{
                        textTransform: 'none',
                        backgroundColor: "#21b6ae",
                    }}
                    variant="contained"
                    >
                        Login
                    </Button>
                </Card>
         </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    };
  }

export default connect(mapStateToProps)(Login);