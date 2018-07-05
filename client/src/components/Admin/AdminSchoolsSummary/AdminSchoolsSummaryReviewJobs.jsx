import React, { Fragment } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  Grid,
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


class AdminSchoolsSummaryReviewJobs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper style={{ height: '100%', padding: '5%' }}>
        <Typography align="center" variant="title" gutterBottom>
          New Jobs To Review
        </Typography>
        <List className={classes.root}>
          <li className={classes.listSection}>
            <ul className={classes.ul}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                        Available Jobs
                    </TableCell>
                    <TableCell>50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                        Booked Today
                    </TableCell>
                    <TableCell>30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                        Pending Assignments
                    </TableCell>
                    <TableCell>20</TableCell>
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

export default withStyles(styles)(AdminSchoolsSummaryReviewJobs);
