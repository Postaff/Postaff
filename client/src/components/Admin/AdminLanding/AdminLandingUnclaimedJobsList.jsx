import React from 'react';
import AdminLandingUnclaimedJobsEntry from './AdminLandingUnclaimedJobsEntry.jsx';

class AdminLandingUnclaimedJobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: ['Unclaimed Job 1', 'Unclaimed Job 2']
    }
  }

  render() {
    return (
      <div>
        <h3>Unclaimed Jobs</h3>
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Start Date</th>
              <th>Start Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.entries.map((entry, index) => <AdminLandingUnclaimedJobsEntry entry={entry} key={index} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AdminLandingUnclaimedJobsList;