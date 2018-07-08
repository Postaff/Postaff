import React, { Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import GET_ALL_SCHOOLS from '../../../queries/fetchAllSchools';
import AdminSchoolsSummaryCharts from './AdminSchoolsSummaryCharts';
import AdminSchoolsSummaryReviewJobs from './AdminSchoolsSummaryReviewJobs';
import SchoolTable from '../../Shared/SchoolsTable';

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

class AdminSchoolsSummary extends React.Component {
  render() {
    const { classes } = this.props;

    return this.props.data.loading ? 
    <Fragment/> :
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Grid container spacing={16} direction={'column'} >
            <Grid item xs={12}>
              <AdminSchoolsSummaryReviewJobs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={16} direction={'column'} >
            <Grid item xs={12}>
              <AdminSchoolsSummaryCharts />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <SchoolTable schools={this.props.data.schools} />
        </Grid>
      </Grid>
    </div>
  }
}

export default compose(
  withStyles(styles),
  graphql(GET_ALL_SCHOOLS),
)(AdminSchoolsSummary);
