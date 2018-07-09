import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SchoolLandingSchoolProfile from './SchoolLandingSchoolProfile.jsx';
import SchoolLandingCharts from './SchoolLandingCharts.jsx';
import SchoolLandingJobsTable from './SchoolLandingJobsTable.jsx';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class SchoolLanding extends React.Component {
  render() {
    return (
      <div style={{ margin: '1%', padding: '2%', marginTop: '0' }}>
        <Grid container spacing={24}>
          <SchoolLandingSchoolProfile />
          <SchoolLandingCharts />
          <SchoolLandingJobsTable />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SchoolLanding);
