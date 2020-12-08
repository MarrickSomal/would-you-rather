import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { withRouter } from 'react-router-dom';
import {useStyles} from '../styles/sharedStyles';

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function Question (props) {
    const classes = useStyles();

    const [value, setValue] = useState('');
    
      const handleChange = (event) => {
        setValue(event.target.value)
      };
    
      const handleSubmit = e => {
        e.preventDefault();

        if (value !== '') {
          const { authedUser } = props;
          const { question } = props.location.state;
          props.dispatch(handleSaveQuestionAnswer( authedUser, question.id, value ));
          props.history.push({
            pathname: `/question/${question.id}/result`,
            state: { author, question }
          })
        }
      };

        const { author, question } = props.location.state;
        console.log(author.name)
        const disabled = value === '' ? true : false

        return (
          <div className={classes.toolbar}>
            <div className={classes.root}>
              <Card>
            <div className={classes.header}>
                 {author.name} asks:
            </div>
              <Grid container>
                  <Grid item xs={4} className={classes.card}>
                    <CardContent>
                      <img alt=""
                      src={author.avatarURL}
                      width="300" 
                      height="300"
                      />
                      </CardContent>
                  </Grid>
                  <Grid item xs = {6} className={classes.card}>
                    <CardContent>
                    <h4>Would you rather</h4>
                      <form onSubmit={handleSubmit}>
                      <FormControl >
                          <RadioGroup value={value} onChange={handleChange}>
                              <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                              <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                          </RadioGroup>
                          <Button 
                            className="submit-button"
                            type="submit"
                            variant="contained" 
                            color="primary" 
                            style={{textTransform: 'none'}}
                            disabled={disabled}
                          >
                            Submit
                          </Button> 
                      </FormControl>
                      </form>
                    </CardContent>
                  </Grid>
              </Grid>
            </Card>
          </div>
        </div>
        )
    }

function mapStateToProps({ authedUser }, {questionId}) {


    return {
      authedUser
    };
  }

export default withRouter(connect(mapStateToProps)(Question));