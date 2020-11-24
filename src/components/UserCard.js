import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';



class UserCard extends Component {

    render() {
        return (
          <div> 
            <h5>Tim asks:</h5>
            <Grid container spacing={2}>
                <Grid item width={5}>
                  <img alt=""/>
                </Grid>
                <Grid item width={11}>
                </Grid>
            </Grid>
          </div>  

        );
    }
}

export default UserCard;