import { gql } from 'apollo-boost';

export default gql`
  query FetchJob($id: ID!) {
    job(id: $id){
      description
      claimed
      approved
      subject
      grade
      start_time
      end_time
      start_date
      end_date
      school {
        school_name
        address_street
        address_city
        address_state
        address_zipcode
        contact_name
        main_phone
      }
    }
  }
`