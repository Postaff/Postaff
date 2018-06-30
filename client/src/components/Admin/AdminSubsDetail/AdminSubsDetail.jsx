import React from 'react';

class AdminSubsDetail extends React.Component {
  render() {
    console.log('this is in subdetails page', this.props);
    return (
      <div>
        <h1>{`This is ${this.props.match.params.subName}'s Page`}</h1>
      </div>
    );
  }
}

export default AdminSubsDetail;
