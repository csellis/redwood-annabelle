import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_ACTION_TYPE_MUTATION = gql`
  mutation DeleteActionTypeMutation($id: Int!) {
    deleteActionType(id: $id) {
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

const ActionTypesList = ({ actionTypes }) => {
  const [deleteActionType] = useMutation(DELETE_ACTION_TYPE_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete actionType ' + id + '?')) {
      deleteActionType({ variables: { id }, refetchQueries: ['ACTION_TYPES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {actionTypes.map((actionType) => (
            <tr key={actionType.id}>
              <td>{truncate(actionType.id)}</td>
              <td>{truncate(actionType.title)}</td>
              <td>{truncate(actionType.description)}</td>
              <td>{timeTag(actionType.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.actionType({ id: actionType.id })}
                    title={'Show actionType ' + actionType.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editActionType({ id: actionType.id })}
                    title={'Edit actionType ' + actionType.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete actionType ' + actionType.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(actionType.id)}
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

export default ActionTypesList
