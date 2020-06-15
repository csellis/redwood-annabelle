export const schema = gql`
  type Prize {
    id: Int!
    name: String!
    imageUrl: String!
    lessonsNeeded: String!
    lessonsCompleted: String!
    createdAt: DateTime!
    lessons: Lesson
  }

  type Query {
    prizes: [Prize!]!
    prize(id: Int!): Prize
  }

  input CreatePrizeInput {
    name: String!
    imageUrl: String!
    lessonsNeeded: String!
    lessonsCompleted: String!
  }

  input UpdatePrizeInput {
    name: String
    imageUrl: String
    lessonsNeeded: String
    lessonsCompleted: String
  }

  type Mutation {
    createPrize(input: CreatePrizeInput!): Prize!
    updatePrize(id: Int!, input: UpdatePrizeInput!): Prize!
    deletePrize(id: Int!): Prize!
  }
`
