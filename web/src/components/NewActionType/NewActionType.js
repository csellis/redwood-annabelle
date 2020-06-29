import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ActionTypeForm from 'src/components/ActionTypeForm'

const CREATE_ACTION_TYPE_MUTATION = gql`
  mutation CreateActionTypeMutation($input: CreateActionTypeInput!) {
    createActionType(input: $input) {
      id
    }
  }
`

const NewActionType = () => {
  const [createActionType, { loading, error }] = useMutation(CREATE_ACTION_TYPE_MUTATION, {
    onCompleted: () => {
      navigate(routes.actionTypes())
    },
  })

  const onSave = (input) => {
    createActionType({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ActionType</h2>
      </header>
      <div className="rw-segment-main">
        <ActionTypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewActionType
