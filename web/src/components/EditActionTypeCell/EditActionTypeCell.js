import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ActionTypeForm from 'src/components/ActionTypeForm'

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
const UPDATE_ACTION_TYPE_MUTATION = gql`
  mutation UpdateActionTypeMutation($id: Int!, $input: UpdateActionTypeInput!) {
    updateActionType(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ actionType }) => {
  const [updateActionType, { loading, error }] = useMutation(UPDATE_ACTION_TYPE_MUTATION, {
    onCompleted: () => {
      navigate(routes.actionTypes())
    },
  })

  const onSave = (input, id) => {
    updateActionType({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ActionType {actionType.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ActionTypeForm actionType={actionType} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
