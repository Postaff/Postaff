import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AdminJob from '../../Job/AdminJob.jsx';
import JobsTable from '../../Shared/JobsTable.jsx';
import AdminLandingCharts from './AdminLandingCharts.jsx';
import AdminLandingCurrentStatus from './AdminLandingCurrentStatus.jsx';
import AdminLandingPendingReviewList from './AdminLandingPendingReviewList.jsx';
import AdminLandingUnclaimedJobsList from './AdminLandingUnclaimedJobsList.jsx';


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
    const { classes } = this.props;
    console.log('Hey am in adminlanding.jsx');
    return (
      <div>
        <Grid container spacing={16} direction={'row'} alignItems={'flex-start'} justify={'center'}>
          <Link to={'/jobs/create'}>
            <Button variant="extendedFab" className={classes.button}>
              <AddIcon className={classes.extendedIcon} />New Job
            </Button>
          </Link>
          <Grid item xs={4}>
            <Grid container spacing={8} direction={'column'} alignItems={'center'} justify={'flex-start'}>
              <Grid item xs={8}>
                <AdminLandingCurrentStatus />
              </Grid>

              <Grid item xs={8}>
                <AdminLandingUnclaimedJobsList />
              </Grid>

              <Grid item xs={8}>
                <AdminLandingPendingReviewList />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={6}>
            <Grid container spacing={16} direction={'column'} alignItems={'flex-start'} justify={'flex-start'}>
              <Grid item xs={12}>
                <AdminLandingCharts />
              </Grid>
              <Grid item xs={12}>
                <JobsTable />
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

export default withStyles(styles)(AdminLanding);