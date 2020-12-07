import React, { Component } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress'

import '../styles/result.css'

class Result extends Component {

    render() {

      const { question } = this.props.location.state;
      const optionOneVotes = question.optionOne.votes.length;
      const optionTwoVotes = question.optionTwo.votes.length;
      const totalVotes = optionOneVotes + optionTwoVotes;

      const optionOnePercent= ((optionOneVotes/totalVotes)*100).toFixed(1)
      const optionTwoPercent= ((optionTwoVotes/totalVotes)*100).toFixed(1)

        return (
            <div className="result-container">
            <div className="card">
              <div className="header"><h3>Would you rather</h3></div>
                <div className="poll">
                    <div>
                    <p className="result">{question.optionOne.text}</p>
                    <LinearProgress variant="determinate" color="secondary" />
                    <p> {optionOneVotes} out of {totalVotes} votes, {optionOnePercent}%</p>
                  </div>
                  <div>
                    <p className="result">{question.optionTwo.text}</p>
                    <LinearProgress variant="determinate" color="secondary" />
                    <p>{optionTwoVotes} out of {totalVotes} votes, {optionTwoPercent}%</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Result;