import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ActionForm from 'src/components/ActionForm'

const CREATE_ACTION_MUTATION = gql`
  mutation CreateActionMutation($input: CreateActionInput!) {
    createAction(input: $input) {
      id
    }
  }
`

const NewAction = () => {
  const [createAction, { loading, error }] = useMutation(CREATE_ACTION_MUTATION, {
    onCompleted: () => {
      navigate(routes.actions())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { actionId: parseInt(input.actionId), })
    createAction({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Action</h2>
      </header>
      <div className="rw-segment-main">
        <ActionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAction
