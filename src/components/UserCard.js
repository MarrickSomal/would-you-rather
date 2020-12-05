import React from 'react';
import { connect } from 'react-redux';
import PollPreview from './PollPreview';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px",
  },

  card: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  header: {
    fontSize: "1.25em",
    backgroundColor: "#f3f4f5",
    padding: "1em",
  },

}));

function UserCard(props) {
  const classes = useStyles();

  const { author, question, unansweredPolls } = props;

  return (
    <div className={classes.root} >
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
                <PollPreview
                question={question}
                unansweredPolls={unansweredPolls}
                />
              </CardContent>
            </Grid>
        </Grid>
      </Card>
    </div>
  );
}

function mapStateToProps({ users, questions }, {questionId}
  ) {
    let question = questions[questionId];
    let author = users[question.author];

    return {
      author,
      question,
    };
  }

export default connect(mapStateToProps)(UserCard);