import React from 'react';
import { connect } from 'react-redux';
import PollPreview from './PollPreview';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { useStyles } from '../styles/sharedStyles';

function UserCard(props) {
  const classes = useStyles();

  const { author, question, unansweredPolls } = props;

  return (
    <div className={classes.root}>
      <Card>
        <div className={classes.header}>{author.name} asks:</div>
        <Grid container>
          <Grid item xs={6} className={classes.card}>
            <CardContent>
              <img alt="" src={author.avatarURL} width="119" height="119" />
            </CardContent>
          </Grid>
          <Grid item xs={6} className={classes.card}>
            <CardContent>
              <PollPreview question={question} unansweredPolls={unansweredPolls} author={author} />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

function mapStateToProps({ users, questions }, { questionId }) {
  let question = questions[questionId];
  let author = users[question.author];

  return {
    author,
    question,
  };
}

export default connect(mapStateToProps)(UserCard);
