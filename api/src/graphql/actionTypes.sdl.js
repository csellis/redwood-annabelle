export const schema = gql`
  type ActionType {
    id: Int!
    title: String!
    description: String!
    action: Action
    createdAt: DateTime!
  }

  type Query {
    actionTypes: [ActionType!]!
    actionType(id: Int!): ActionType!
  }

  input CreateActionTypeInput {
    title: String!
    description: String!
  }

  input UpdateActionTypeInput {
    title: String
    description: String
  }

  type Mutation {
    createActionType(input: CreateActionTypeInput!): ActionType!
    updateActionType(id: Int!, input: UpdateActionTypeInput!): ActionType!
    deleteActionType(id: Int!): ActionType!
  }
`
