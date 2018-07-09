import React, { Fragment } from 'react';
import {graphql, compose, Query} from 'react-apollo';
import GET_ALL_JOBS from '../../../queries/fetchAllJobs.js';
import {
  Typography,
  Paper,
  Card,
  Grid,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

class SchoolLandingCharts extends React.Component {
  render() {
    if (this.props.data.loading) {
      return null;
    } else {
      const claimed = 40;
      const unclaimed = this.props.data.jobs.length;
      const percentClaimed = 9;
      const percentFree = Math.round((15 / (26 + 15)) * 100);
      const claimData = {
        labels: [
          'Claimed',
          'Unclaimed',
        ],
        datasets: [{
          data: [claimed, unclaimed],
          backgroundColor: [
            '#0a00b6',
            '#9d46ff',
          ],
          hoverBackgroundColor: [
            '#0a00b6',
            '#36A2EB',
          ],
        }],
      };

      const options = {
        legend: {
          display: false,
        },
      };

      const freeSubs = {
        labels: [
          'Booked',
          'Free',
        ],
        datasets: [{
          data: [26, 15],
          backgroundColor: [
            '#0a00b6',
            '#9d46ff',
          ],
          hoverBackgroundColor: [
            '#0a00b6',
            '#36A2EB',
          ],
        }],
      };
      return (
        <Fragment>
          <Grid item xs={8}>
            <Paper>
              <Grid container spacing={12} style={{ flexGrow: 1 }}>
                <Grid item xs={4} sm={4}>
                  <Doughnut data={claimData} options={options} />
                  <Typography variant="title" align="center">
                    {percentClaimed}% Claimed
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Doughnut data={freeSubs} options={options} />
                  <Typography variant="title" align="center">
                    Subject
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Doughnut data={freeSubs} options={options} />
                  <Typography variant="title" align="center">
                    Grade
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Fragment>
      );
    }
  }
}

export default graphql(GET_ALL_JOBS)(SchoolLandingCharts);
