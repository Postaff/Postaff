import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { graphql, compose } from 'react-apollo';
import { GET_ALL_SUBS } from '../../../queries/fetchAllSubs';
import SubsTable from '../../Shared/SubsTable';
import AdminSubsSummaryCharts from './AdminSubsSummaryCharts';
import AdminSubsSummaryReviewJobs from './AdminSubsSummaryReviewJobs';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AdminSubsSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return this.props.data.loading ? <div>loading</div> :
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Grid container spacing={16} direction={'column'} >
            <Grid item xs={12}>
              <AdminSubsSummaryReviewJobs 
                totalSubs={this.props.data.subs.length}
                specialEds={this.props.data.subs.filter(sub => sub.special_ed === true)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={16} direction={'column'} >
            <Grid item xs={12}>
              <AdminSubsSummaryCharts 
                totalSubs={this.props.data.subs.length}
                specialEds={this.props.data.subs.filter(sub => sub.special_ed === true)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <SubsTable subs={this.props.data.subs}/>
        </Grid>
      </Grid>
    </div>
  }
}

export default compose(
  graphql(GET_ALL_SUBS),
  withStyles(styles)
)(AdminSubsSummary);
