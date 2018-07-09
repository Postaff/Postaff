import { gql } from 'apollo-boost';

export const GET_ALL_SUBS = gql`
  query {
    subs {
      id
      name
      photo_url
      phone
      email
      address_state
      permitted
      special_ed
    }
  }
`;