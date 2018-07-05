import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';

class AdminLandingUnclaimedJobsEntry extends React.Component {
  render() {
    const { id, subject, start_date } = this.props.job;
    return (
      <TableRow>
        <TableCell>
          <Link to={'/jobs/id'}>{subject}</Link>
        </TableCell>
        <TableCell>{moment(start_date).fromNow()}</TableCell>
      </TableRow>
    );
  }
}

export default AdminLandingUnclaimedJobsEntry;
