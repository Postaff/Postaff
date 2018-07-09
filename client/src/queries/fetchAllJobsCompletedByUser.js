import { gql } from 'apollo-boost';

export default gql`
  query FetchCompletedJobs($id: ID!) {
    jobsCompletedByUser(id: $id) {
      id
      description
      claimed
      approved
      subject
      grade
      start_date
      end_date
      school {
        school_img
        school_name
        address_city
        address_state
        address_zipcode
      }
    }
  }
`;
