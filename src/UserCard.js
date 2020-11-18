import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';
import PollPreview from './PollPreview';


class UserCard extends Component {

    render() {
        return (
          <div> 
            <Question />
            <Result />
            <PollPreview />
          </div>  

        );
    }
}

export default UserCard;