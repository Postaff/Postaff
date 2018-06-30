// constructor(props) {
//   super(props);

//   this.state = {
//     entries: ['Job Description 1', 'Job Description 2']
//   }
// }

//           {this.state.entries.map((entry, index) => <AdminLandingPendingReviewEntry entry={entry} key={index} />)}

import React from 'react';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';

class AdminLandingPendingReviewList extends React.Component {
  render() {
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Typography variant="display1" gutterBottom>
         Pending Review
        </Typography>
        <Typography variant="title" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              Job
            </Grid>
            <Grid item xs={4}>
              Start Date
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              PE / General Ed
            </Grid>
            <Grid item xs={2}>
              07/06/18 8:55am
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    );
  }
}

export default AdminLandingPendingReviewList;
