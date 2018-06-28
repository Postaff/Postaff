import React, {Fragment} from 'react';
import {graphql, compose} from 'react-apollo';
import GET_ALL_SCHOOLS from '../../../queries/fetchAllSchools';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
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
    const {classes} = this.props;

    if (this.props.data.loading) {
      return (
        <Fragment>
        </Fragment>
      )
    } else {
      return (
        <div>
          <h1> This is the Admin School Page</h1>
        <Fragment>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <AdminSchoolsSummaryReviewJobs />
              <AdminSchoolsSummaryCharts />
              <AdminSchoolsSummarySchoolsList schools={this.props.data.schools} />
            </Grid>
          </div>
        </Fragment>
        </div>
      );
    }
  }
}

export default compose(
  withStyles(styles),
  graphql(GET_ALL_SCHOOLS),
)(AdminSchoolsSummary);