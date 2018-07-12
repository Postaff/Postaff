import React, { Fragment } from 'react';
import {
  Typography,
  Paper,
  Card,
  Grid,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { graphql, compose } from 'react-apollo';
import { GET_ALL_SUBS } from '../../../queries/fetchAllSubs';

class AdminLandingCharts extends React.Component {
  render() {
    if(this.props.data.loading) {
      return <div> ...LOADING </div>;
    }
    let claimedSubs = [];
    let cs;
    this.props.claimed.forEach((sub) => {
      claimedSubs.push(sub.fk_sub)
      cs = new Set(claimedSubs);
    });
    
    const totalClaimedSubs = cs.size;
    const totalSubs = this.props.data.subs.length;
    const claimed = this.props.claimed.length;
    const unclaimed = this.props.unclaimed.length;
    const percentClaimed = Math.round((this.props.claimed.length / (this.props.claimed.length + this.props.unclaimed.length)) * 100);
    const percentFree = Math.round((totalClaimedSubs / totalSubs) * 100);

    const claimData = {
      labels: [
        'Claimed',
        'UnClaimed',
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
        data: [(totalSubs - totalClaimedSubs), totalClaimedSubs],
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
        <Paper style={{ height: '75%', padding: '5%' }}>
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
      </Fragment>
    );
  }
}

export default compose(
  graphql(GET_ALL_SUBS),
)(AdminLandingCharts);
