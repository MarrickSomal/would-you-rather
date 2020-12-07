import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup';

import '../styles/question.css'

class Question extends Component {

    state = {
        value: ''
      };
    
      handleChange = (event) => {
        const value = event.target.value;
        this.setState(({ value })
        )
      };
    
      handleSubmit = e => {
        e.preventDefault();

        if (this.state.value !== '') {
          const { authedUser } = this.props;
          const { question } = this.props.location.state;
          console.log(question)
          this.props.dispatch(handleSaveQuestionAnswer( authedUser, question.id, this.state.value ));
        }
      };

    render() {
        const { question } = this.props.location.state;
        const disabled = this.state.value === '' ? true : false;
        const submitLink = '/question/'+question.id+'/result';

        return (
            <div className="question">
            <div className="card">
              <div className="header"><h4>Would you rather</h4></div>
                <form onSubmit={this.handleSubmit}>
                <FormControl >
                    <RadioGroup value={this.state.value} onChange={this.handleChange}>
                        <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                        <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                    </RadioGroup>
                    <Link 
                    to={{
                      pathname: `${submitLink}`,
                      state: {
                        question,
                      }
                    }}
                    >
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
                    </Link>  
                </FormControl>
                </form>
            </div>
          </div>
        )
    }
}

function mapStateToProps({ authedUser}) {

    return {
      authedUser
    };
  }

export default connect(mapStateToProps)(Question);