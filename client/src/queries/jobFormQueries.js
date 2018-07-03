import { gql } from 'apollo-boost';

export const GET_ALL_SCHOOLS = gql`
  query {
  schools {
    id
    school_name
  }
}`

export const NEW_JOB = gql`
  mutation CreateJob($input: CreateJobInput) {
    createJob(input: $input) {
      id
    }
  }
`