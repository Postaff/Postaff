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


class AdminSubsSummary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
<<<<<<< HEAD
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
=======
    console.log("i am in admin subs summary page")
    if(!this.props.data.loading) {
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
            {this.props.data.subs.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                  <Link to={{ pathname: `/subDetail/${n.name}`, state: { name: n.name} }}>{n.name}</Link>
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
    } else {
      return (
        <div>
          Loading
         </div> 
      )
    }
    
>>>>>>> adds route to jobDetails page
  }
}

export default graphql(GET_ALL_SCHOOLS)(AdminSubsSummary);