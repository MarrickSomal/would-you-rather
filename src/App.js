import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import UserCard from './UserCard';
import CreateNewPoll from './CreateNewPoll';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Nav/>
        <Login/>
        <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/questions/bad_id" component={NotFound} />
                  <Route path="/questions/:question_id" component={UserCard} />
                  <Route path="/newpoll" component={CreateNewPoll} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
