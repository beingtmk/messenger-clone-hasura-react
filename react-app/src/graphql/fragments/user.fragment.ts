import gql from 'graphql-tag'

export default gql`
  fragment user on users {
    id
    auth0_id
    username
    name
    picture
  }
`
