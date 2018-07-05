import React from 'react';
import { graphql, compose } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import Profile from './Profile.jsx';
import Detail from './Detail.jsx';
import Attachments from './Attachments.jsx';
import Notes from './Notes.jsx';
import FETCH_JOB from '../../queries/fetchJob';

class AdminJob extends React.Component {
  render() {
    console.log
    let { job } = this.props.data;
    return !this.props.data.job ? <div>{console.log(this.props.data)} loading</div> :
    <div>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={4}>
          <Profile school={job.school}/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Detail job={job}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Attachments />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Notes />
        </Grid>
      </Grid>
    </div>
  }
}

export default graphql(FETCH_JOB, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.jobId
    },
  })
})(AdminJob);
