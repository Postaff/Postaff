import React from 'react';
import AdminLandingPendingReviewEntry from './AdminLandingPendingReviewEntry.jsx';

class AdminLandingPendingReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: ['Unclaimed Job 1', 'Unclaimed Job 2']
    }
  }

  render() {
    return (
      <div>
        <h3>Pending Review</h3>
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Start Date</th>
              <th>Start Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.entries.map((entry, index) => <AdminLandingPendingReviewEntry entry={entry} key={index} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AdminLandingPendingReviewList;