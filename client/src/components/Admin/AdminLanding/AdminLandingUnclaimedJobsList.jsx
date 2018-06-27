// class AdminLandingUnclaimedJobsList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       entries: ['Unclaimed Job 1', 'Unclaimed Job 2']
//     }
//   }
//             {this.state.entries.map((entry, index) => <AdminLandingUnclaimedJobsEntry entry={entry} key={index} />)}

import React from 'react';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';

class AdminLandingUnclaimedJobsList extends React.Component {
  render() {
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Typography variant="display1" gutterBottom>
         Unclaimed Jobs
        </Typography>
        <Typography variant="title" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              Job
            </Grid>
            <Grid item xs={4}>
              Date
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              PE / General Ed
            </Grid>
            <Grid item xs={4}>
              07/06/18 8:55am
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    );
  }
}

export default AdminLandingUnclaimedJobsList;