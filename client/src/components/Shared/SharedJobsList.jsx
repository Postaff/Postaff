import React from 'react';
import GET_ALL_JOBS from '../../queries/fetchAllJobs';
import {graphql, compose} from 'react-apollo'

class SharedJobsList extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        FILL_ME_IN
      </div>
    );
  }
}

export default graphql(GET_ALL_JOBS)(SharedJobsList);