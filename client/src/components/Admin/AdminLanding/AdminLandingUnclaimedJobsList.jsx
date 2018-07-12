import React, { Component } from 'react';
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
import UnclaimedJobsEntry from './AdminLandingUnclaimedJobsEntry';

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
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});


class AdminLandingUnclaimedJobsList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Typography align="center" variant="title" gutterBottom>
          Unclaimed Jobs
        </Typography>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Start Date</TableCell>
          </TableRow>
        </TableHead>
        <List className={classes.root}>
          <li className={classes.listSection}>
            <ul className={classes.ul}>
              <Table>
                <TableBody>
                  {this.props.unclaimed.map(job => (
                    <UnclaimedJobsEntry key={job.id} job={job}/>
                  ))}
                </TableBody>
              </Table>

            </ul>
          </li>
        </List>
      </Paper>
    );
  }
};

export default withStyles(styles)(AdminLandingUnclaimedJobsList);
