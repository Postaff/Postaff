import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import GET_ALL_SUBS from '../../../queries/fetchAllSubs';


class AdminSubsSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Am in AdminSubSummary', this.props.data);

    if (!this.props.data.loading) {
      return (
      <div>
        <h1> This is the Admin Subs Page</h1>
      <Paper style={{
        width: '100%',
        marginTop: 100,
        overflowX: 'auto',
      }}>
      <Table style={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Sub Name</TableCell>
            <TableCell numeric>Phone Number</TableCell>
            <TableCell numeric>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.data.subs.map(n => (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/admin/subs/${n.name}`}>{n.name}</Link>
                </TableCell>
                <TableCell numeric>{n.phone}</TableCell>
                <TableCell numeric>{n.email}</TableCell>

              </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
      );
    } return (
        <div>
          Loading
        </div>
    );
  }
}

export default graphql(GET_ALL_SUBS)(AdminSubsSummary);
