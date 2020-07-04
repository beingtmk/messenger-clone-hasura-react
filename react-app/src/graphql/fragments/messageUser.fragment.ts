import gql from 'graphql-tag'

export default gql`
  fragment messageUser on message_user {
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
