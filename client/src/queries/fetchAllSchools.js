import { gql } from 'apollo-boost';

export default gql`
  query {
    schools {
      id
      school_name
      school_img
      address_street
      address_city
      address_state
      address_zipcode
      contact_email
      phone
      phone_ext
    }
  }
`;
