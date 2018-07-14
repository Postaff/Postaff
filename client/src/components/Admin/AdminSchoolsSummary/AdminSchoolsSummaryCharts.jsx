import React from 'react';
import {
  Typography,
  Paper,
  Card,
  Grid,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

const claimData = {
  labels: [
    'Claimed',
    'UnClaimed',
  ],
  datasets: [{
    data: [32, 5],
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

class AdminSchoolsSummaryCharts extends React.Component {
  render() {
    const percentClaimed = Math.round((this.props.claimed / (this.props.claimed + this.props.unclaimed)) * 100);
    const percentFree = Math.round((15 / (26 + 15)) * 100);
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Grid container spacing={16} style={{ flexGrow: 1 }}>
          <Grid item xs={8} sm={6}>
            <Doughnut data={claimData} options={options} />
            <Typography variant="title" align="center">
              {percentClaimed}% Claimed
            </Typography>
          </Grid>
          <Grid item xs={8} sm={6}>
            <Doughnut data={freeSubs} options={options} />
            <Typography variant="title" align="center">
              {percentFree}% Subs Free
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AdminSchoolsSummaryCharts;
