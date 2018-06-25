import React from 'react';

class AdminLandingPendingReviewEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.entry}</td>
        <td>Placeholder</td>
        <td>8 AM</td>
      </tr>
    );
  }
}

export default AdminLandingPendingReviewEntry;