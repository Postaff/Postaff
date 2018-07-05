import React, { Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import GET_ALL_SCHOOLS from '../../../queries/fetchAllSchools';
import AdminSchoolsSummaryCharts from './AdminSchoolsSummaryCharts.jsx';
import AdminSchoolsSummaryReviewJobs from './AdminSchoolsSummaryReviewJobs.jsx';
import AdminSchoolsSummarySchoolsList from './AdminSchoolsSummarySchoolsList.jsx';

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

    if(this.props.data.loading) {
      return (
        <Fragment>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Grid container spacing={16} direction={'row'} alignItems={'flex-start'}>
          <Grid item xs={4}>
            <Grid container spacing={8} direction={'column'} alignItems={'center'} justify={'flex-start'}>
              <Grid item xs={8}>
                <AdminSchoolsSummaryReviewJobs />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={6}>
            <Grid container spacing={16} direction={'column'} alignItems={'flex-start'} justify={'flex-start'}>
              <Grid item xs={12}>
                <AdminSchoolsSummaryCharts />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={24}>
            <AdminSchoolsSummarySchoolsList schools={this.props.data.schools} />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default compose(
  withStyles(styles),
  graphql(GET_ALL_SCHOOLS),
)(AdminSchoolsSummary);
