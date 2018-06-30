import React from 'react';

class SharedJobsEntry extends React.Component {
  render() {
    const { subject, description, grade } = this.props.job;
    return (
      <div>
        <div>{subject}</div>
        <div>{description}</div>
      </div>
    );
  }
}

export default SharedJobsEntry;
