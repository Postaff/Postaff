import React from 'react';
import Profile from './Profile.jsx';
import Detail from './Detail.jsx';
import Attachments from './Attachments.jsx';
import Notes from "./Notes.jsx";
import Grid from '@material-ui/core/Grid';

class AdminJob extends React.Component {
  render() {
    console.log("Hey I am in AdminJob.jsx");
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={4}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Detail />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Attachments />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Notes />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default AdminJob;