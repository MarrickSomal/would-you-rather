import React, { Component } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress'

import '../styles/result.css'



class Result extends Component {

    render() {
        return (
            <div className="result-container">
            <div className="card">
              <div className="header"><h3>Would you rather</h3></div>
                <div className="poll">
                    <div>
                    <p className="result"></p>
                    <LinearProgress variant="determinate" color="secondary" />
                    <p> 1 out of 3 votes (33.3)%</p>
                  </div>
                  <div>
                    <p className="result"></p>
                    <LinearProgress variant="determinate" color="secondary" />
                    <p>2 out of 4 votes (50)%</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Result;