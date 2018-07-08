import { gql } from 'apollo-boost';

export default gql`
query  SubById ($id: ID!){
    subById (id: $id){
      id
      name
      phone
      email
      jobAvailable {
        id
        subject
        grade
        start_time
        end_time
        start_date
        end_date
      }
      jobsCompleted (id: "6") {
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
