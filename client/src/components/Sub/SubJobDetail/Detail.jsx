import React from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
} from '@material-ui/core';
import { graphql, compose } from 'react-apollo';
import CLAIM_JOB from '../../../queries/claimNewJobs';
import FETCH_JOB from '../../../queries/fetchJob';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      claimed: false,
    };

    this.subClaimJob = this.subClaimJob.bind(this);
  }

  subClaimJob() {
    this.props.mutate({
      variables: {
        input: {
          id: this.props.job.id,
          claimed: true,
          fk_sub: localStorage.getItem('subId'),
        },
      },
    }).then(() => this.setState({
      claimed: true,
    }));
  }


  render() {
    const { job } = this.props;
    const claimed = this.state.claimed || job.claimed;
    console.log('Am in Sub-Detail.jsx', localStorage.getItem('subID'));
    return (
      <Paper style={{ height: '100%' }}>
        <Typography variant="title" gutterBottom>
         Details
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Date Needed:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              {job.start_date}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={16} >
            <Grid item xs={2}>
              Status:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={8}>
              { job.claimed ? 'Claimed' : claimed ? 'Claimed' : 'Ready to Claim' }
              {job.claimed || claimed ? null : <Button onClick={() => this.subClaimJob()} style={{ marginLeft:'20px', backgroundColor:'#6200ea', color:'white' }}> Claim Job </Button>}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Subjects:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              {job.subject}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Grade:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              {job.grade}
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              Description:
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5}>
              {job.description}
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    );
  }
}

export default compose(
  graphql(CLAIM_JOB, FETCH_JOB),
)(Detail);
