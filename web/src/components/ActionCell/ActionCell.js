import Action from 'src/components/Action'

export const QUERY = gql`
  query FIND_ACTION_BY_ID($id: String!) {
    action: action(id: $id) {
      id
      actionId
      date
      createdAt
      notes
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Action not found</div>

export const Success = ({ action }) => {
  return <Action action={action} />
}
