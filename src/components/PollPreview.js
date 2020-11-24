import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class PollPreview extends Component {

    render() {
        return (
            <Card>
            <h5>Would you rather</h5>
            <p style={{ textAlign: 'center' }}>
               Question 1
              <br />
              or...
            </p>
            <Button
            />
          </Card>
        );
    }
}

export default PollPreview;