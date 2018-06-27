import React from 'react';

class AdminSubsDetail extends React.Component {
  render() {
    console.log("this is in subdetails page", this.props)
    return (
      <div>
        {`This is ${this.props.match.params.subName}'s Page`}
      </div>
    );
  }
}

export default AdminSubsDetail;