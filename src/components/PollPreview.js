import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../styles/PollPreview';

class PollPreview extends Component {
  render() {
    const { author, classes, question, unansweredPolls } = this.props;
    const buttonName = unansweredPolls === true ? 'Answer Poll' : 'Results';
    const buttonLink =
      unansweredPolls === true
        ? '/question/' + question.id
        : '/question/' + question.id + '/result';

    return (
      <div>
        <div className={classes.question}>Would you rather</div>
        <p className={classes.questionText}>
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
            },
          }}
          className={classes.answerPollLink}
          style={{ textDecoration: 'none' }}
        >
          <Button
            className={classes.answerPollButton}
            fullWidth
            variant="contained"
          >
            {buttonName}
          </Button>
        </Link>
      </div>
    );
  }
}

export default (withStyles(styles)(PollPreview));
