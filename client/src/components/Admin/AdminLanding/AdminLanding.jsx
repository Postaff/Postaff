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
    const unclaimed = jobs.filter(job => !job.claimed && job.approved);
    const pending = jobs.filter(job => !job.approved);
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{width: '25%', margin: '.5%', padding: '.5%'}}>
            <AdminLandingCurrentStatus claimed={claimed.length} unclaimed={unclaimed.length}/>
          </div>
          <div style={{width: '65%', height:'75%', margin: '.5%', padding: '.5%'}}>
            <AdminLandingCharts claimed={claimed.length} unclaimed={unclaimed}/>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{width: '25%', display: 'flex', flexDirection: 'column', margin: '.5%', padding: '.5%'}}>
            <div style={{marginBottom: '1%'}}>
              <AdminLandingUnclaimedJobsList unclaimed={unclaimed}/>
            </div>
            <br/>
            <div style={{marginTop: '1%'}}>
              <AdminLandingPendingReviewList pending={pending}/>
            </div>
          </div>
          <div style={{width: '65%', margin: '0 .5% 0 .5%', padding: '0 .5% 0 .5%', marginTop: '-1%'}}>
            <JobsTable jobs={jobs}/>
          </div>
        </div>
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
