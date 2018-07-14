import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  Paper,
  TableCell,
  Typography,
  List,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

class AdminSubsSummaryReviewJobs extends React.Component {
  render() {
    const { classes } = this.props;
    const { totalSubs, specialEds } = this.props;
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Typography align="center" variant="title" gutterBottom>
          Subs Overview
        </Typography>
        <List className={classes.root}>
          <li className={classes.listSection}>
            <ul className={classes.ul}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                        Total Subs
                    </TableCell>
                    <TableCell>{totalSubs}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                        Special Ed.
                    </TableCell>
                    <TableCell>{specialEds.length}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                        Available Subs
                    </TableCell>
                    <TableCell>{totalSubs - 8}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ul>
          </li>
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(AdminSubsSummaryReviewJobs);
