import React from 'react';
import {
  Typography,
  Paper,
  Card,
  Grid,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

// console.log(props);

// let claimed = { this.props.claimed };


class AdminSchoolsSummaryCharts extends React.Component {
  render() {
    const { totalSubs, specialEds } = this.props;
    const claimData = {
      labels: [
        'Claimed',
        'UnClaimed',
      ],
      datasets: [{
        data: [totalSubs, specialEds.length],
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
        data: [29, 11],
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
    const percentSpecial = Math.round((specialEds.length / totalSubs) * 100);
    const percentFree = Math.round((11 / 40) * 100);
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Grid container spacing={16} style={{ flexGrow: 1 }}>
          <Grid item xs={8} sm={6}>
            <Doughnut data={claimData} options={options} />
            <Typography variant="title" align="center">
              {percentSpecial}% Special Ed
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
