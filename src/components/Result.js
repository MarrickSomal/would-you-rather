import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useStyles } from '../styles/sharedStyles';

function Result(props) {
  const classes = useStyles();

  const { user, questions } = props;
  const { author, question } = props.location.state;

  const optionOneVotes = questions[question.id].optionOne.votes.length;
  const optionTwoVotes = questions[question.id].optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const userVote = user.answers[question.id];

  const optionOnePercent = ((optionOneVotes / totalVotes) * 100).toFixed(1);
  const optionTwoPercent = ((optionTwoVotes / totalVotes) * 100).toFixed(1);

  return (
    <div className={classes.toolbar}>
      <div className={classes.root}>
        <Card>
          <div className={classes.header}>{author.name} asks:</div>
          <Grid container>
            <Grid item xs={4} className={classes.card}>
              <CardContent>
                <img alt="" src={author.avatarURL} width="119" height="119" />
              </CardContent>
            </Grid>
            <Grid item xs={6} className={classes.card}>
              <CardContent>
                <div className={userVote === 'optionOne' ? classes.userSelected : null}>
                  <p>{question.optionOne.text}</p>
                  <LinearProgress
                    color="primary"
                    value={Number(optionOnePercent)}
                    variant="determinate"
                  />
                  <h3>
                    {' '}
                    {optionOneVotes} out of {totalVotes} votes, {optionOnePercent}%
                  </h3>
                </div>
                <div className={userVote === 'optionTwo' ? classes.userSelected : null}>
                  <p>{question.optionTwo.text}</p>
                  <LinearProgress
                    color="primary"
                    value={Number(optionTwoPercent)}
                    variant="determinate"
                  />
                  <h3>
                    {optionTwoVotes} out of {totalVotes} votes, {optionTwoPercent}%
                  </h3>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}

function mapStateToProps({ users, authedUser, questions }) {
  const user = users[authedUser];
  return {
    questions,
    user,
  };
}

export default connect(mapStateToProps)(Result);
