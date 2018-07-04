import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  TableRow,
  TableCell,
} from '@material-ui/core';

class AdminSchoolsSummarySchoolsEntry extends React.Component {
  render() {
    return (
      <Fragment>
        <TableRow>
          <TableCell component="th" scope="row">
            <Link to={`/admin/schools/${this.props.school.id}`}>{this.props.school.school_name}</Link>
          </TableCell>
          <TableCell>{this.props.school.contact_name}</TableCell>
          <TableCell>{this.props.school.main_phone}</TableCell>
        </TableRow>
      </Fragment>
    );
  }
}

export default AdminSchoolsSummarySchoolsEntry;
