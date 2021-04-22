import React from 'react';
import { handleSaveQuestion } from '../actions/questions';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../styles/NewPoll';

function CreateNewPoll(props) {
  const classes = useStyles();

  const [optionOne, setOptionOne] = React.useState('');
  const [optionTwo, setOptionTwo] = React.useState('');

  const handleChange1 = (e) => {
    setOptionOne(e.target.value);
  };

  const handleChange2 = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { authedUser } = props;

    props.dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser));
    props.history.push('/');
  };

  const disabled = (optionOne && optionTwo)  === '' ? true : false;

  return (
    <div className={classes.newPoll}>
      <Card>
        <CardHeader
          className={classes.header}
          title="Create a New Poll"
        ></CardHeader>
        <CardContent>
          <p>Complete the question:</p>
          <p>
            <strong>Would you rather...</strong>
          </p>
          <form>
            <TextField
              fullWidth
              label="Option one"
              onChange={handleChange1}
              placeholder="Enter option one..."
              value={optionOne}
              variant="outlined"
            />
            <p className={classes.orDivider}>OR</p>
            <TextField
              fullWidth
              label="Option two"
              onChange={handleChange2}
              placeholder="Enter option two..."
              value={optionTwo}
              variant="outlined"
            />
          </form>
        </CardContent>
        <CardActions>
          <Button
            className={classes.submitButton}
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            disabled={disabled}
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
    authedUser,
  };
}

export default connect(mapStateToProps)(CreateNewPoll);
