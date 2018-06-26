import React, {Fragment} from 'react';
import GET_ALL_JOBS from '../../queries/fetchAllJobs';
import {graphql, compose} from 'react-apollo'
import _ from 'lodash';
import JobsEntry from './SharedJobsEntry.jsx';

class SharedJobsList extends React.Component {

  /**
   * To access data fetched from graphQL, 
   * simply call data property of props
   */
  renderJobs(){
    return _.map(this.props.data.jobs, (job)=>{
      return(
        <div>
          <JobsEntry key={job.id} job={job}/>
        </div>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <div>
          {this.renderJobs()}
        </div>
      </Fragment>
    );
  }
}

/**
 * graphql will run the GET_ALL_JOBS query and assign the response to 
 * the props of SharedJobsList component
 */
export default graphql(GET_ALL_JOBS)(SharedJobsList);