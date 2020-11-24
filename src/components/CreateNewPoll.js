import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField'

import '../styles/createnewpoll.css'


class CreateNewPoll extends Component {

    render() {
        return (
            <div className="newpoll">
                <Card>
                    <CardHeader
                        className="header"
                        title="Create a New Poll"
                        style={{backgroundColor: "#f3f4f5"}}
                    >
                    </CardHeader>
                    <CardContent>
                        <p>Complete the question:</p>
                        <p>
                            <strong>Would you rather...</strong>
                        </p>
                        <form >
                        <TextField fullWidth label="Option one" placeholder ="Enter option one..." variant="outlined"/> 
                        <br/>OR<br/>
                        <TextField fullWidth label="Option two" placeholder ="Enter option two..." variant="outlined"/>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button 
                        className="submit-button"
                        color="secondary"
                        fullWidth
                        style={{
                            textTransform: 'none',
                            backgroundColor: "#21b6ae",
                        }}
                        variant="contained"
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CreateNewPoll;