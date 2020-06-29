export const schema = gql`
  type Action {
    id: String!
    actionType: ActionType!
    actionId: Int!
    date: DateTime!
    createdAt: DateTime!
    notes: String!
    User: User
    userId: String
  }

  type Query {
    actions: [Action!]!
    action(id: String!): Action!
  }

  input CreateActionInput {
    actionId: Int!
    date: DateTime!
    notes: String!
    userId: String
  }

  input UpdateActionInput {
    actionId: Int
    date: DateTime
    notes: String
    userId: String
  }

  type Mutation {
    createAction(input: CreateActionInput!): Action!
    updateAction(id: String!, input: UpdateActionInput!): Action!
    deleteAction(id: String!): Action!
  }
`
