import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

import '../styles/pollpreview.css'

class PollPreview extends Component {

    render() {
      
      const { author, question, unansweredPolls } = this.props;
      const buttonName = unansweredPolls === true ? 'Answer Poll' : 'Results';
      const buttonLink = unansweredPolls === true ? '/question/'+question.id : '/question/'+question.id+'/result';
      
        return (
          <div>
            <h5>Would you rather</h5>
            <p>
            {question.optionOne.text}
              <br />
              or...
            </p>
            <Link 
            to={{
              pathname: `${buttonLink}`,
              state: {
                author,
                question,
              }
            }}
            style={{ textDecoration: 'none' }}
            >
            <Button
            color="secondary"
            style={{
                textTransform: 'none',
                backgroundColor: "#21b6ae",
            }}
            variant="contained"
            >
            {buttonName}
            </Button>
            </Link>
          </div>
        );
    }
}

export default PollPreview;