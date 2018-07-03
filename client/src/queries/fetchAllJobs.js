import { gql } from 'apollo-boost';

export default gql`
  query {
    jobs {
      id
      description
      schoolName
      claimed
      approved
      subject
      grade
      start_time
      end_time
      start_date
      end_date
    }
  }
`;
