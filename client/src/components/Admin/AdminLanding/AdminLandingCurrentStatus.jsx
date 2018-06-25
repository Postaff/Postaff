import React from 'react';

class AdminLandingCurrentStatus extends React.Component {
  render() {
    return (
      <div>
        <h3>Current Status</h3>
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
    );
  }
}

export default AdminLandingCurrentStatus;