import ActionType from 'src/components/ActionType'

export const QUERY = gql`
  query FIND_ACTION_TYPE_BY_ID($id: Int!) {
    actionType: actionType(id: $id) {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ActionType not found</div>

export const Success = ({ actionType }) => {
  return <ActionType actionType={actionType} />
}
