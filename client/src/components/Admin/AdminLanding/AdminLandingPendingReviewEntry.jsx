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
        <TableCell style={{ paddingTop: '4px', paddingBottom: '4px', paddingRight: '0' }}>
          <Link to={{ pathname: `admin/jobs/${id}`, state: { job: this.props.job } }}>{subject}</Link>
        </TableCell>
        <TableCell style={{ paddingLeft: '0' }}>{moment(start_date).fromNow()}</TableCell>
      </TableRow>
    );
  }
}

export default AdminLandingPendingReviewEntry;
