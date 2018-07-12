import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';

class AdminLandingPendingReviewEntry extends React.Component {

  render() {
    const { id, subject, start_date } = this.props.job;
    return (
      <TableRow>
        <TableCell>
          <Link to={{ pathname:`/jobs/${id}`, state:{ job: this.props.job } }}>{subject}</Link>
        </TableCell>
        <TableCell>{moment(start_date).fromNow()}</TableCell>
      </TableRow>
    );
  }
}

export default AdminLandingPendingReviewEntry;
