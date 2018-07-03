import { gql } from 'apollo-boost';

export const GET_ALL_SCHOOLS = gql`
  query {
  schools {
    id
    school_name
  }
}`

export const NEW_JOB = gql`
  mutation CreateJob(
    $name: String
    $phone: String
    $phoneExt: String
    $email: String
    $school: String!
    $subject: String
    $grade: String
    $jobDescription: String!
    $startDate: String
    $endDate: String
    $startTime: String
    $endTime: String
    $additionalInformation: String
  ) {
    createJob(
      
    )
  }
`

