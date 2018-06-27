import React, {Fragment} from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  Grid,
} from '@material-ui/core';

class AdminSchoolsSummaryReviewJobs extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid item xs={4}>
          <Paper style={{
              width: '100%',
              overflowX: 'auto',
              marginTop: '50px',
          }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>New Jobs to Review</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Job Description 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Job Description 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Job Description 3</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

export default AdminSchoolsSummaryReviewJobs;