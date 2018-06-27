import React, { Fragment } from 'react';
import GET_ALL_SCHOOLS from '../../../queries/fetchAllSchools';
import { graphql } from 'react-apollo';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell
} from '@material-ui/core';

class AdminSchoolsSummary extends React.Component {
  render() {
    console.log(this.props.data);
    if (this.props.data.loading) {
      return (
        <Fragment>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div style={{float:'left'}}>
          <h3>New Jobs to Review</h3>
            <table>
              <thead>
                  <th>Unclaimed Jobs</th>
                  <td>2</td>
              </thead>
              <tbody>
                  <th>Claimed Jobs</th>
                  <td>5</td>
              </tbody>
            </table>
          </div>
          <div style={{float:'right'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBKSrnYuLNAR43LPFNPXnnCNBx1bIh3BC6k-AOu292wCPdSMs" />
          </div>
          <Paper style={{
            width: '100%',
            marginTop: 100,
            overflowX: 'auto',
          }}>

          <Table style={{minWidth: 700,}}>
            <TableHead>
              <TableRow>
                <TableCell>School Name</TableCell>
                <TableCell>Contact Name</TableCell>
                <TableCell>Main Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.schools.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.school_name}
                    </TableCell>
                    <TableCell>{n.contact_name}</TableCell>
                    <TableCell>{n.main_phone}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Fragment>
      );
    }
  }
}

export default graphql(GET_ALL_SCHOOLS)(AdminSchoolsSummary);