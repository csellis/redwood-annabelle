import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_PRIZE_MUTATION = gql`
  mutation DeletePrizeMutation($id: Int!) {
    deletePrize(id: $id) {
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

const PrizesList = ({ prizes }) => {
  const [deletePrize] = useMutation(DELETE_PRIZE_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete prize ' + id + '?')) {
      deletePrize({ variables: { id }, refetchQueries: ['PRIZES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>imageUrl</th>
            <th>lessonsNeeded</th>
            <th>lessonsCompleted</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {prizes.map((prize) => (
            <tr key={prize.id}>
              <td>{truncate(prize.id)}</td>
              <td>{truncate(prize.name)}</td>
              <td>{truncate(prize.imageUrl)}</td>
              <td>{truncate(prize.lessonsNeeded)}</td>
              <td>{truncate(prize.lessonsCompleted)}</td>
              <td>{timeTag(prize.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.prize({ id: prize.id })}
                    title={'Show prize ' + prize.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPrize({ id: prize.id })}
                    title={'Edit prize ' + prize.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete prize ' + prize.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(prize.id)}
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

export default PrizesList
