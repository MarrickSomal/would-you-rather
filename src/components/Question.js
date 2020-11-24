import React, { Component } from 'react';

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'

import '../styles/question.css'

class Question extends Component {

    render() {
        return (
            <div className="question">
            <div className="card">
              <div className="header"><h4>Would you rather...</h4></div>
                
                <FormControl>
                    <Radio value="optionOne"/>
                    <Radio value="optionTwo"/>
                    
                    <Button className="submit-button" variant="contained" color="primary" style={{textTransform: 'none'}}>
                        Hello World
                    </Button>
                </FormControl>

            </div>
          </div>
        )
    }
}

export default Question;