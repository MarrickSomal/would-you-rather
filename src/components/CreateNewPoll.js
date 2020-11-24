import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';


class CreateNewPoll extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        Would you rather...
                        </Typography>
                        <br/>
                        <form >
                        <TextField label="Option one" placeholder ="Enter option one..." /> <br/><br/>
                        <TextField label="Option two" placeholder ="Enter option one..."/>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button>
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CreateNewPoll;