import React from 'react';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { graphql, compose } from 'react-apollo';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GET_ALL_SUBBYID from '../../../queries/fetchSubById';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class SubOpenJobs extends React.Component {
  render() {
    const { classes } = this.props;
    if(this.props.data.loading) {
      return (
        <div>
          ....LOADING
        </div>
      );
    }
    const AvailableJobs = this.props.data.subById.jobAvailable;
    console.log('this is the sub open jobs', AvailableJobs);
    return (
      <div className={classes.root}>
        <Paper>
          <h3> Open Jobs </h3>
          {AvailableJobs.map((jobs, idx) => (
            <ExpansionPanel key={idx}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{jobs.subject}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography >
          Grade:- ({jobs.grade})   Time:- ({jobs.start_time}) - ({jobs.end_time})   Date:- ({jobs.start_date}) - ({jobs.end_date})
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Paper>
      </div>
    );
  }
}

export default compose(withStyles(styles), graphql(GET_ALL_SUBBYID))(SubOpenJobs);
