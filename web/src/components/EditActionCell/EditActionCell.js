import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ActionForm from 'src/components/ActionForm'

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
const UPDATE_ACTION_MUTATION = gql`
  mutation UpdateActionMutation($id: String!, $input: UpdateActionInput!) {
    updateAction(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ action }) => {
  const [updateAction, { loading, error }] = useMutation(UPDATE_ACTION_MUTATION, {
    onCompleted: () => {
      navigate(routes.actions())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { actionId: parseInt(input.actionId), })
    updateAction({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Action {action.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ActionForm action={action} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
