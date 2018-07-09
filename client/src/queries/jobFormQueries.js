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

export const EDIT_JOB = gql`
  mutation EditJob($input: EditJobInput) {
    editJob(input: $input) {
      id
    }
  }
`

// export const CLAIM_JOB_BY_SUB = gql`
//   mutation AddClaim($id: ID){
//     addClaim(id: $id){
//       id
//     }
//   }
// `

export const GET_SCHOOL_BY_USERNAME = gql`
  query SchoolByUsername ($username: String) {
    schoolByUsername (username: $username) {
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