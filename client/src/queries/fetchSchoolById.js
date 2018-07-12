import { gql } from 'apollo-boost';

export default gql`
  query SchoolById ($id: ID!) {
    schoolById (id: $id) {
      id
      school_name
      school_img
      address_street
      address_city
      address_state
      address_zipcode
      contact_name
      contact_title
      contact_email
      phone
      phone_ext
    }
  }
`;