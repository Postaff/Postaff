import { gql } from 'apollo-boost';

export default gql`
mutation ClaimJob($input: ClaimJob) {
    claimJob(input: $input) {
        id
    }
  }
  `;
