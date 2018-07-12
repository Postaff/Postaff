import React, { Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import JobsTable from '../../Shared/JobsTable.jsx';
import AdminLandingCharts from './AdminLandingCharts.jsx';
import AdminLandingCurrentStatus from './AdminLandingCurrentStatus.jsx';
import AdminLandingPendingReviewList from './AdminLandingPendingReviewList.jsx';
import AdminLandingUnclaimedJobsList from './AdminLandingUnclaimedJobsList.jsx';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class AdminLanding extends React.Component {
  render() {
    if(this.props.data.loading) {
      return <Fragment></Fragment>;
    }
    const { jobs } = this.props.data;
    const { classes } = this.props;
    const claimed = jobs.filter(job => job.claimed);
    const unclaimed = jobs.filter(job => !job.claimed);
    const pending = jobs.filter(job => !job.approved);
    return (
      <div>
        <Grid container spacing={16} direction={'row'} alignItems={'flex-start'}>
          <Grid item xs={4}>
            <Grid container spacing={8} direction={'column'} alignItems={'center'} justify={'flex-start'}>
              <Grid item xs={8}>
                <AdminLandingCurrentStatus claimed={claimed.length} unclaimed={unclaimed.length}/>
              </Grid>
              <Grid item xs={8}>
                <AdminLandingUnclaimedJobsList unclaimed={unclaimed}/>
              </Grid>
              <Grid item xs={8}>
                <AdminLandingPendingReviewList pending={pending}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={6}>
            <Grid container spacing={16} direction={'column'} alignItems={'flex-start'} justify={'flex-start'}>
              <Grid item xs={12}>
                <AdminLandingCharts claimed={claimed.length} unclaimed={unclaimed}/>
              </Grid>
              <Grid item xs={12}>
                <JobsTable jobs={ jobs }/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AdminLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  graphql(GET_ALL_JOBS),
  withStyles(styles),
)(AdminLanding);
