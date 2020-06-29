import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ACTION_MUTATION = gql`
  mutation DeleteActionMutation($id: String!) {
    deleteAction(id: $id) {
      id
    }
  }
`

const Action = ({ action }) => {
  const [deleteAction] = useMutation(DELETE_ACTION_MUTATION, {
    onCompleted: () => {
      navigate(routes.actions())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete action ' + id + '?')) {
      deleteAction({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Action {action.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{action.id}</td>
            </tr><tr>
              <th>actionId</th>
              <td>{action.actionId}</td>
            </tr><tr>
              <th>date</th>
              <td>{action.date}</td>
            </tr><tr>
              <th>createdAt</th>
              <td>{action.createdAt}</td>
            </tr><tr>
              <th>notes</th>
              <td>{action.notes}</td>
            </tr><tr>
              <th>userId</th>
              <td>{action.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAction({ id: action.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(action.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Action
