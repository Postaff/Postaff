import React from 'react';
import { Link, Route, Switch} from "react-router-dom";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell
} from '@material-ui/core';
import {Link} from "react-router-dom";
import GET_ALL_SCHOOLS from '../../../queries/fetchAllJobs.js';
import {graphql} from 'react-apollo';
import AdminSubsDetail from '../AdminSubsDetail/AdminSubsDetail.jsx';

class AdminSubsSummary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("Am in AdminSubSummary", this.props.data);
    return (
      <Paper style={{
        width: '100%',
        marginTop: 100,
        overflowX: 'auto',
      }}>
      <Table style={{minWidth: 700,}}>
        <TableHead>
          <TableRow>
            <TableCell>Sub Name</TableCell>
            <TableCell numeric>Phone Number</TableCell>
            <TableCell numeric>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/admin/subs/${n.name}`}>{n.name}</Link>
                </TableCell>
                <TableCell numeric>{n.phone}</TableCell>
                <TableCell numeric>{n.email}</TableCell>
                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    );
  }
}

export default graphql(GET_ALL_SCHOOLS)(AdminSubsSummary);