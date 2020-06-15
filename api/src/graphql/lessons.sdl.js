export const schema = gql`
  type Lesson {
    id: Int!
    name: String!
    prizeId: Int
    prize: Prize
    dateCompleted: DateTime!
    createdAt: DateTime!
  }

  type Query {
    lessons: [Lesson!]!
    lesson(id: Int!): Lesson!
  }

  input CreateLessonInput {
    name: String!
    prizeId: Int
    dateCompleted: DateTime!
  }

  input UpdateLessonInput {
    name: String
    prizeId: Int
    dateCompleted: DateTime
  }

  type Mutation {
    createLesson(input: CreateLessonInput!): Lesson!
    updateLesson(id: Int!, input: UpdateLessonInput!): Lesson!
    deleteLesson(id: Int!): Lesson!
  }
`
