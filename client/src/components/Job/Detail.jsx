import React from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
} from '@material-ui/core';
import { graphql, compose } from 'react-apollo';
import APPROVE_JOB from '../../queries/approveSubJobs';
import FETCH_JOB from '../../queries/fetchJob';
 
class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      approved: false,
    };

    this.adminApproveJob.bind(this);
  }
  
  adminApproveJob() {
    this.props.mutate({
      variables: {
        input: {
          id: this.props.job.id,
          approved: true,
        },
      },
    }).then(() => this.setState({
      approved: true,
    }));
  }


  render() {
    const { job } = this.props;
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
              {job.claimed ? null : <Button onClick={ () => this.adminApproveJob() } style={{ marginLeft:'20px', backgroundColor:'#6200ea', color:'white' }}> Send to Subs </Button>}
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
  graphql(APPROVE_JOB, FETCH_JOB),
)(Detail);
