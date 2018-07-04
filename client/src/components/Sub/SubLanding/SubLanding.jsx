import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  Grid,
} from '@material-ui/core';
import SubLandingCurrentJobsEntry from './SubLandingCurrentJobsEntry.jsx';
import SubProfile from './SubProfile.jsx';
import SubOpenJobs from './SubOpenJobs.jsx';
import SubBookedJobs from './SubBookedJobs.jsx';
import SubPreviousJobs from './SubPreviousJobs.jsx';

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

class SubLanding extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <SubProfile />
            </Grid>
            <Grid item xs={4}>
              <Paper style={{
                width: '100%',
                overflowX: 'auto',
                marginTop: '50px',
              }}>
                <SubBookedJobs />
              </Paper>
            </Grid>
            <Grid>
              <SubOpenJobs />
            </Grid>
            <Grid>
              <SubPreviousJobs />
            </Grid>
          </Grid>

        </div>
      </Fragment>
    );
  }
}

export default compose(
  withStyles(styles),
)(SubLanding);
