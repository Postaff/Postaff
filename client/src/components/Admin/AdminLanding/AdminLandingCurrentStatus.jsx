import React from 'react';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';

class AdminLandingCurrentStatus extends React.Component {
  render() {
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Typography variant="display1" gutterBottom>
         Current Status
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              Unclaimed Jobs
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={1}>
              {this.props.claimed}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              Claimed Jobs
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={1}>
              {this.props.unclaimed}
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    );
  }
}

export default AdminLandingCurrentStatus;
