import { gql } from 'apollo-boost';

export default gql`
query  {
    subById (id: "1"){
      id
      name
      phone
      email
      jobAvailable {
        subject
        grade
        start_time
        end_time
        start_date
        end_date
      }
    }
  }
`;
