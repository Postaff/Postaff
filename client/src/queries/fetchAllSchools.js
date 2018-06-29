import { gql } from 'apollo-boost';

export default gql`
  query {
    schools {
      id
      school_name
      contact_name
      main_phone
    }
  }
`;
