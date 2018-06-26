import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell
} from '@material-ui/core';
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import GET_ALL_SCHOOLS from '../../../queries/fetchAllJobs.js';
import {graphql} from 'react-apollo';
>>>>>>> fetches substitute data from database to display in adminsubsummary

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


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
            <TableCell numeric>Client Rating</TableCell>
            <TableCell numeric>Completion</TableCell>
            <TableCell numeric>Subject</TableCell>
            <TableCell numeric>Specialty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/admin/subs/${n.id}`}>{n.name}</Link>
                </TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
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