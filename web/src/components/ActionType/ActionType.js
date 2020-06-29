import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ACTION_TYPE_MUTATION = gql`
  mutation DeleteActionTypeMutation($id: Int!) {
    deleteActionType(id: $id) {
      id
    }
  }
`

const ActionType = ({ actionType }) => {
  const [deleteActionType] = useMutation(DELETE_ACTION_TYPE_MUTATION, {
    onCompleted: () => {
      navigate(routes.actionTypes())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete actionType ' + id + '?')) {
      deleteActionType({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">ActionType {actionType.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{actionType.id}</td>
            </tr><tr>
              <th>title</th>
              <td>{actionType.title}</td>
            </tr><tr>
              <th>description</th>
              <td>{actionType.description}</td>
            </tr><tr>
              <th>createdAt</th>
              <td>{actionType.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editActionType({ id: actionType.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(actionType.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default ActionType
