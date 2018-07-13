import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';

const styles = theme => ({
  title: {
    flex: '0 0 auto',
  },
});

class AdminLandingCurrentStatus extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Paper className={classes.root} style={{ padding: '5%', height: '100%' }}>
          <Grid
            container
            spacing={8}
            direction = "column"
            justify= "space-between"
          >
            <Typography variant="display2" gutterBottom>
          Current Status
            </Typography>
            <Typography variant="headline" gutterBottom>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                Unclaimed Jobs
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={1}>
                  {this.props.unclaimed}
                </Grid>
              </Grid>
            </Typography>
            <Typography variant="headline" gutterBottom>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                Claimed Jobs
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={1}>
                  {this.props.claimed}
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AdminLandingCurrentStatus);
