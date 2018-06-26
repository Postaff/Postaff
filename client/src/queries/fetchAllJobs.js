import { gql } from 'apollo-boost';

export default gql`
  query {
    jobs {
      id
      description
      subject
      grade
    }
  }
`