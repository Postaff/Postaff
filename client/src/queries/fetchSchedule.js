import { gql } from 'apollo-boost';

export default gql`
  {
   schedule {
      id
      subject
      fk_sub
      start_time
      end_time
      start_date
      end_date
      sub {
        id
        name
      }
    }
  }
`;
