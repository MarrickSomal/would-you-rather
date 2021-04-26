import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../styles/sharedStyles';

function Leaderboard(props) {
  const classes = useStyles();

  const { userData } = props;

  return (
    <div className={classes.root}>
      {userData.map((user, ix) => {
        return (
          <Card key={user.id} className={classes.cardSpacing}>
            <div className={classes.header}>
              {ix + 1}. {user.name}
            </div>
            <Grid container>
              <Grid item xs={4} className={classes.card}>
                <CardContent>
                  <img alt="" src={user.avatarURL} width="119" height="119" />
                </CardContent>
              </Grid>
              <Grid item xs={6} className={classes.card}>
                <CardContent>
                  <p>Answered questions: {user.answerCount}</p>
                  <p>Created questions: {user.questionCount}</p>
                  <p>Score: {user.totalContribution}</p>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </div>
  );
}

function mapStateToProps({ users }) {
  const userData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      totalContribution: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.totalContribution - a.totalContribution);
  return {
    userData,
  };
}

export default connect(mapStateToProps)(Leaderboard);
