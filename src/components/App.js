import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import Result from './Result';
import CreateNewPoll from './CreateNewPoll';
import Leaderboard from './Leaderboard';
import PageNotFound from './PageNotFound';
import Question from './Question';

import Grid from '@material-ui/core/Grid';

import '../styles/App.css';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
    console.log(props.questions)
  }, []);

    const { authedUser}  = props

    return (
      <Router>
        <div className="App">
          {/*if an authenticated User has not been selected show the Login screen, 
          else show the Home screen*/}
          {authedUser === null ? (
            <Route
              render={() => (
                <Grid className="login-container">
                  <Login/>
                </Grid>
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <Switch>
                <Route path="/add" component={CreateNewPoll} />
                <Route exact path="/" component={Home} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/question/:id/result" component={Result} />
                <Route path="/question/:id" component={Question} />
                <Route component={PageNotFound} />
              </Switch>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }

/* authedUser state, from the store, is passed
as a parameter to allow authedUser to be used 
as a property by the App component */

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions
  };
}

/*Call mapStateToProps function every time the 
store state changes and returns authedUser 
data to the App component, to check if the user is still logged in 
and hence which components to show the user */

export default connect(mapStateToProps)(App);
