import React from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
  Snackbar,
} from '@material-ui/core';
import { graphql, compose } from 'react-apollo';
import axios from 'axios';
import APPROVE_JOB from '../../queries/approveSubJobs';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      approved: false,
    };


    this.notifySubs.bind(this);
  }

  notifySubs() {
    event.preventDefault();

    const jobId = this.props.job.id;
    this.props.mutate({
      variables: {
        input: {
          id: jobId,
          approved: true,
        },
      },
    }).then(() => this.setState({
      approved: true,
    }));

    axios.post('/api/subs/notify', {
    })
      .then((response) => {
        console.log('notification sent', response);
        alert('Available subs will be notified');
      })
      .catch((error) => {
        console.log('failed to send notification', error);
      });
  }

  render() {
    const job = this.props.job || this.props.location.state.job;
    console.log('Am in Detail.jsx', this.props);
    const approved = this.state.approved || job.approved;

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
              {job.claimed ? 'Claimed' : approved ? 'Approved' : 'Awaiting Approval'}
              {job.claimed ? null : <Button onClick={() => this.notifySubs()} style={{ marginLeft: '20px', backgroundColor: '#6200ea', color: 'white' }}> Notify Subs </Button>}
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
  graphql(APPROVE_JOB),
)(Detail);
