import React, { Component, Fragment } from 'react';
import {Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import UserCard from './UserCard';
import CreateNewPoll from './CreateNewPoll';
import Leaderboard from './Leaderboard';
import PageNotFound from './PageNotFound';

import Grid from '@material-ui/core/Grid';


const Container =

  <Grid container
    direction="column"
    justify="center"
    alignItems="center"
  >
  </Grid>;

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {

    const { authedUser } = this.props;
    return (
      <Route>
        <div className="App">
          {/*if an authenticated User has not been selected show the Login screen, 
          else show the Home screen*/}
          {authedUser === null ? (
            <Route
              render={() => (
                <Container>
                    <Login />
                </Container>
              )}
            />
          ) : (
            <Fragment>
              <Nav/>
              <Switch>
                <Route path="/newpoll" component={CreateNewPoll} />
                <Route exact path="/" component={Home} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/questions/bad_id" component={PageNotFound} />
                <Route path="/questions/:question_id" component={UserCard} />
                <Route component={PageNotFound} />
              </Switch>
            </Fragment>
          )}
          </div>
      </Route>
    );
  }
}

/* authedUser state, from the store, is passed
as a parameter to allow authedUser to be used 
as a property by the App component */

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

/*Call mapStateToProps function every time the 
store state changes and returns authedUser 
data to the App component, to check if the user is still logged in 
and hence which components to show the user */

export default connect(mapStateToProps)(App);
