import React from 'react';
import { handleSaveQuestion } from '../actions/questions';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField'

import '../styles/createnewpoll.css'


function CreateNewPoll(props) {

    
    const [optionOne,setOptionOne] = React.useState('');
    const [optionTwo,setOptionTwo] = React.useState('');

    const handleChange1 = (e) => {
        setOptionOne(e.target.value);
    };

    const handleChange2 = (e) => {
        setOptionTwo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const { authedUser } = props;

          props.dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser));
          props.history.push('/')
    }

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
                        <TextField 
                        fullWidth 
                        label="Option one"
                        onChange={handleChange1}
                        placeholder ="Enter option one..."
                        value = {optionOne}
                        variant="outlined"            
                        />
                            <p className="or-divider">
                            OR
                            </p>
                        <TextField 
                        fullWidth 
                        label="Option two" 
                        onChange={handleChange2}
                        placeholder ="Enter option two..."
                        value = {optionTwo}
                        variant="outlined"   
                        />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button
                        color="secondary"
                        fullWidth
                        onClick={handleSubmit}
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

function mapStateToProps({ authedUser }) {
    return {
      authedUser
    };
  }


export default connect(mapStateToProps)(CreateNewPoll);