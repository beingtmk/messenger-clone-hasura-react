import gql from 'graphql-tag'

export default gql`
  fragment message on message {
    id
    chat_id
    sender {
      id
      auth0_id
      name
    }
    content
    created_at
  }
`
