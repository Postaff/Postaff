import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  List,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import PendingReviewEntry from './AdminLandingPendingReviewEntry';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 200,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  title: {
    flex: '0 0 auto',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});


class AdminLandingPendingReviewList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Paper style={{ height: '90%', padding: '5%' }}>
          <Typography align='left' variant='title' gutterBottom>
            Pending Review
          </Typography>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant='caption'>Subject</Typography></TableCell>
              <TableCell><Typography variant='caption'>Start Date</Typography></TableCell>
              </TableRow>
          </TableHead>
          <List className={classes.root}>
            <li className={classes.listSection}>
              <ul className={classes.ul}>
                <Table>
                  <TableBody>
                  {this.props.pending.map(job => (
                  <PendingReviewEntry key={job.id} job={job}/>
                ))}
                  </TableBody>
                </Table>
              </ul>
            </li>
          </List>
        </Paper>
      </Fragment>
    );
  };
};

export default withStyles(styles)(AdminLandingPendingReviewList);
