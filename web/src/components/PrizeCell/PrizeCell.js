import Prize from 'src/components/Prize'

export const QUERY = gql`
  query FIND_PRIZE_BY_ID($id: Int!) {
    prize: prize(id: $id) {
      id
      name
      imageUrl
      lessonsNeeded
      lessonsCompleted
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Prize not found</div>

export const Success = ({ prize }) => {
  return <Prize prize={prize} />
}
