import React from 'react';
import UserCard from './UserCard';
import {connect} from 'react-redux';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import {useStyles} from '../styles/sharedStyles';

function Home(props) {
const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { userPollData } = props

    return (
      <div className={classes.toolbar}>
              <Tabs 
              onChange={handleChange} 
              value={value}
              variant="fullWidth"
              TabIndicatorProps={{
                style:{
                  backgroundColor: "rgb(33, 182, 174)",
                  height: "10px",
                  top: "44px",
                }
                }}
              >
                <Tab 
                label={<span className={classes.tabLabel}>Unanswered</span>}
                index={0}  
                />
                <Tab
                label={<span className={classes.tabLabel}>Answered</span>}
                index={1}  
                />
              </Tabs>
                <TabPanel label="Unanswered" value={value} index={0}>
                {userPollData.answeredPolls.map((question) => (
                <UserCard 
                key={question.id}
                questionId={question.id}
                unansweredPolls={true}
                />
                ))}
                </TabPanel>
                <TabPanel label="Answered" value={value} index={1}>
                {userPollData.unansweredPolls.map((question) => (
                <UserCard 
                key={question.id}
                questionId={question.id}
                unansweredPolls={false}
                />
                ))}
                </TabPanel>
      </div>
    );
  }


function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      hidden={value !== index}
    >
      {value === index && (
          <Box>{children}</Box>
      )}
    </div>
  );
}


function mapStateToProps ({ authedUser, questions, users }) {

  /* An array of answered question id’s in the user record 
  (stored in the answerIds variable) determines the 
  answered  vs. unanswered questions (stored in the answeredPolls 
    and unansweredPolls variables respectively). */

  const answerIds = Object.keys(users[authedUser].answers);

  const answeredPolls = Object.values(questions)
    .filter(question => !answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const unansweredPolls = Object.values(questions)
    .filter(question => answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

    return {
      userPollData: {
        answeredPolls,
        unansweredPolls
      }
  }
}

export default  connect(mapStateToProps)(Home)