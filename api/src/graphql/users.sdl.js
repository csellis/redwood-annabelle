export const schema = gql`
  type User {
    id: String!
    name: String!
    actions: Action
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    name: String!
  }

  input UpdateUserInput {
    name: String
  }
`
