import { gql } from 'apollo-boost';

export default gql`
query  SubById ($id: ID!){
    subById (id: $id){
      id
      name
      phone
      email
      photo_url
      jobAvailable {
        id
        subject
        grade
        start_time
        end_time
        start_date
        end_date
        updatedAt
      }
      jobsCompleted (id: $id) {
        subject
        start_date
        end_date
        start_time
        end_time
        grade
      }
      claimedJobs(id: $id) {
        id
        description
        subject
        grade
        start_time
        start_date
      }
    }
  }
`;
