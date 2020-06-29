import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_ACTION_MUTATION = gql`
  mutation DeleteActionMutation($id: String!) {
    deleteAction(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const ActionsList = ({ actions }) => {
  const [deleteAction] = useMutation(DELETE_ACTION_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete action ' + id + '?')) {
      deleteAction({ variables: { id }, refetchQueries: ['ACTIONS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>actionId</th>
            <th>date</th>
            <th>createdAt</th>
            <th>notes</th>
            <th>userId</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {actions.map((action) => (
            <tr key={action.id}>
              <td>{truncate(action.id)}</td>
              <td>{truncate(action.actionId)}</td>
              <td>{timeTag(action.date)}</td>
              <td>{timeTag(action.createdAt)}</td>
              <td>{truncate(action.notes)}</td>
              <td>{truncate(action.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.action({ id: action.id })}
                    title={'Show action ' + action.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAction({ id: action.id })}
                    title={'Edit action ' + action.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete action ' + action.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(action.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ActionsList
