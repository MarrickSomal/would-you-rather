import React, { Component } from 'react';

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'




class Login extends Component {

    render() {
        return (
         <div>
             <Card>
                 <h3>Welcome to the Would You Rather App!</h3>
                 <p>Please sign in to continue</p>
                 <FormControl>
                    <InputLabel id="">Select a User to begin</InputLabel>
                    <Select
                        labelId=""
                        id=""
                    >
                    </Select>
                 </FormControl>
                    <Button >
                        Login
                    </Button>
                </Card>
         </div>
        );
    }
}

export default Login;