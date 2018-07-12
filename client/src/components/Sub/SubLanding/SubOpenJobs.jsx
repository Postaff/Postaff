import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import moment from 'moment';
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
    fontSize: theme.typography.pxToRem(8),
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
    console.log('this is the sub open jobs', this.props);
    return (
      <div className={classes.root}>
        <Paper>
          <h3> Open Jobs </h3>
          {AvailableJobs.map((jobs, idx) => (
            <ExpansionPanel key={idx}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Link to={`/sub/${jobs.id}`}>{jobs.subject}</Link>
                      </TableCell>
                      <TableCell >
                        {moment(jobs.updatedAt).fromNow()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Table>
                  <TableBody>
                    <TableRow>
                       Grade:- {jobs.grade}
                    </TableRow> 
                    <TableRow>
                      Time:- {jobs.start_time} - {jobs.end_time} 
                    </TableRow>  
                    <TableRow>
                      Date:- {moment(jobs.start_date).format('MMMM Do YYYY')} - {moment(jobs.end_date).format('MMMM Do YYYY')}
                    </TableRow>  
                  </TableBody>  
                </Table> 
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Paper>
      </div>
    );
  }
}

export default compose(withStyles(styles), graphql(GET_ALL_SUBBYID, {
  options: () => ({
    variables: {
      id: localStorage.getItem('subId'),
    },
  }),
}))(SubOpenJobs);
