import { gql } from 'apollo-boost';

export default gql`
  query {
    jobs {
      id
      description
      claimed
      approved
      subject
      grade
      start_date
      start_time
      end_date
      end_time
      fk_sub
      school {
        id
        school_img
        school_name
        address_city
        address_state
        address_zipcode
      }
    }
  }
`;
