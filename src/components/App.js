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

    const { authenticatedUser } = this.props;
    return (
      <Route>
        <div className="App">
          {authenticatedUser === null ? (
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

export default connect()(App);
