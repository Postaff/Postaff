import React from 'react';
import {Route, Link} from "react-router-dom";
import AdminSchedule from "../AdminSchedule/AdminSchedule.jsx";
import AdminJob from "../../Job/AdminJob.jsx";
import JobsTable from "../../Shared/JobsTable.jsx";
import AdminLandingCharts from "./AdminLandingCharts.jsx";
import AdminLandingCurrentStatus from "./AdminLandingCurrentStatus.jsx";
import AdminLandingPendingReviewList from "./AdminLandingPendingReviewList.jsx";
import AdminLandingUnclaimedJobsList from "./AdminLandingUnclaimedJobsList.jsx";
import Grid from '@material-ui/core/Grid';

class AdminLanding extends React.Component {
  render() {
    console.log("Hey am in adminlanding.jsx");
    return (
      <div>
        <h1>This is the Admin Main Page</h1>
        <Grid container spacing={12} direction={'row'} alignItems={'flex-start'} justify={'center'}>
            <Grid item xs={4} sm={3}>
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

export default AdminLanding;