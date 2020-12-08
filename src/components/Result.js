import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {useStyles} from '../styles/sharedStyles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress'

function Result(props) {
  const classes = useStyles();

      const { author, question } = props.location.state;
      const optionOneVotes = question.optionOne.votes.length;
      const optionTwoVotes = question.optionTwo.votes.length;
      const totalVotes = optionOneVotes + optionTwoVotes;

      const optionOnePercent= ((optionOneVotes/totalVotes)*100).toFixed(1)
      const optionTwoPercent= ((optionTwoVotes/totalVotes)*100).toFixed(1)

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
                  <div>
                    <p>{question.optionOne.text}</p>
                    <LinearProgress color="primary" value={Number(optionOnePercent)} variant="determinate"/>
                    <h3> {optionOneVotes} out of {totalVotes} votes, {optionOnePercent}%</h3>
                  </div>
                  <div>
                    <p>{question.optionTwo.text}</p>
                    <LinearProgress color="secondary" value={Number(optionTwoPercent)} variant="determinate" />
                    <h3>{optionTwoVotes} out of {totalVotes} votes, {optionTwoPercent}%</h3>
                  </div>
                  </CardContent>
                  </Grid>
              </Grid>
            </Card>
          </div>
        </div>
        );
    }


export default withRouter(connect()(Result));