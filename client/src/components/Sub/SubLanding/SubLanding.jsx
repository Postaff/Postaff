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
import SubProfile from './SubProfile';
import SubOpenJobs from './SubOpenJobs';
import SubBookedJobs from './SubBookedJobs';
import SubPreviousJobs from './SubPreviousJobs';

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
    const subId = localStorage.getItem('subId');
    console.log('SubLanding Page');
    const { classes } = this.props;
    return (
      <div style={{ padding: '1.5% 1.5% 0 1.5%' }}>
        <div className={classes.root}>
          <Grid container spacing={8} >
            <Grid item xs={4} >
              <SubProfile subId={ subId }/>
            </Grid>
            <Grid item xs={8} >
              <Paper style={{
                width: '100%',
                overflowX: 'auto',
                marginTop: '1px',
              }}>
                <SubBookedJobs subId={ subId } />
              </Paper>
            </Grid>
            <Grid item xs={4} >
              <SubOpenJobs subId={ subId }/>
            </Grid>
            <Grid item xs={8} >
              <SubPreviousJobs subId={ subId }/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
)(SubLanding);
