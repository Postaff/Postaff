import React, { Fragment } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  Grid,
} from '@material-ui/core';
import AdminSchoolsSummarySchoolsEntry from './AdminSchoolsSummarySchoolsEntry.jsx';

class AdminSchoolsSummarySchoolsList extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid item xs={12}>
          <Paper style={{
            width: '100%',
            marginTop: '10px',
            overflowX: 'auto',
          }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>School Name</TableCell>
                  <TableCell>Contact Name</TableCell>
                  <TableCell>Main Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.schools.map(school => <AdminSchoolsSummarySchoolsEntry key={school.id} school={school} />)}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

export default AdminSchoolsSummarySchoolsList;
