import React from 'react';

class AdminSubsDetail extends React.Component {
  render() {
    console.log("this is in subdetails page")
    return (
      <div>
        {`This is ${this.props.location.state.name}'s Page`}
      </div>
    );
  }
}

export default AdminSubsDetail;