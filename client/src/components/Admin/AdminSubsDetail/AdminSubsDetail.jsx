import React, { Fragment, Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  Paper,
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FETCH_SUB_BY_ID from '../../../queries/fetchSubById';
import FETCH_JOBS_COMPLETED_BY_USER from '../../../queries/fetchAllJobsCompletedByUser';
import SubProfile from '../AdminSubsDetail/AdminSubsDetailProfile';
import SubBookedJobs from '../AdminSubsDetail/AdminSubsDetailBookedJobs';
import JobsTable from '../AdminSubsDetail/AdminSubsDetailTable';

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

class AdminSubsSummaryDetail extends Component {
  render() {
    console.log(this.props)
    const { classes } = this.props;
    return this.props.data.loading ? <Fragment/> : 
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={16} >
          <Grid item xs={4} >
            <SubProfile sub={ this.props.data.subById }/>
          </Grid>
          <Grid item xs={8} >
            <Paper style={{
              width: '100%',
              overflowX: 'auto',
              marginTop: '50px',
            }}>
            <SubBookedJobs sub={ this.props.data.subById } />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={16} >
          <Grid item xs={12}>
            <JobsTable jobs={this.props}/>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  }
}

export default compose(
  graphql(FETCH_JOBS_COMPLETED_BY_USER, {
    name: 'completed_jobs',
    options: ownProps => ({
      variables: {
        id: ownProps.match.params.subId,
      },
    }),
  }),  
  graphql(FETCH_SUB_BY_ID, {
    options: ownProps => ({
      variables: {
        id: ownProps.match.params.subId,
      },
    }),
  }),
  withStyles(styles)
)(AdminSubsSummaryDetail);
