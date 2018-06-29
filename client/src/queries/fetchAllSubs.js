import { gql } from 'apollo-boost';

export default gql`
  query {
    subs {
      id
      name
      phone
      email
    }
  }
`;
