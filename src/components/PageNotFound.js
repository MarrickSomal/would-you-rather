import React, { Component } from 'react';
import Card from '@material-ui/core/Card'


class NotFound extends Component {

    render() {
        return (
         <div>
             <Card>
                <h3>Page not found: 404 Error</h3>
                <p>Please use the menu to try again</p>
             </Card>
         </div>
        );
    }
}

export default NotFound;