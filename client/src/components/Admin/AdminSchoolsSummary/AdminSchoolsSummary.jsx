import React from 'react';
import GET_ALL_SCHOOLS from '../../../queries/fetchAllSchools';
import { graphql } from 'react-apollo';

class AdminSchoolsSummary extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div>
        FILL_ME_IN
      </div>
    );
  }
}


export default graphql(GET_ALL_SCHOOLS)(AdminSchoolsSummary);