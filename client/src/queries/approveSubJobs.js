import { gql } from 'apollo-boost';

export default gql`
mutation ApproveJob($input: ApproveJob) {
    approveJob(input: $input) {
        id
    }
  }
  `;
