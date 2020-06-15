import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PRIZE_MUTATION = gql`
  mutation DeletePrizeMutation($id: Int!) {
    deletePrize(id: $id) {
      id
    }
  }
`

const Prize = ({ prize }) => {
  const [deletePrize] = useMutation(DELETE_PRIZE_MUTATION, {
    onCompleted: () => {
      navigate(routes.prizes())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete prize ' + id + '?')) {
      deletePrize({
        variables: {
          id,
        },
      })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Prize {prize.id}
            Detail{' '}
          </h2>{' '}
        </header>{' '}
        <table className="rw-table">
          <tbody>
            <tr>
              <th> id </th> <td> {prize.id} </td>{' '}
            </tr>{' '}
            <tr>
              <th> name </th> <td> {prize.name} </td>{' '}
            </tr>{' '}
            <tr>
              <th> imageUrl </th> <td> {prize.imageUrl} </td>{' '}
            </tr>{' '}
            <tr>
              <th> lessonsNeeded </th> <td> {prize.lessonsNeeded} </td>{' '}
            </tr>{' '}
            <tr>
              <th> lessonsCompleted </th> <td> {prize.lessonsCompleted} </td>{' '}
            </tr>{' '}
            <tr>
              <th> createdAt </th> <td> {prize.createdAt} </td>{' '}
            </tr>{' '}
          </tbody>{' '}
        </table>{' '}
      </div>{' '}
      <nav className="rw-button-group">
        <Link
          to={routes.editPrize({
            id: prize.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit{' '}
        </Link>{' '}
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(prize.id)}
        >
          Delete{' '}
        </a>{' '}
      </nav>
      <hr className="border border-red-600" />
      <div className="grid gap-4 grid-cols-2">
        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-50 p-8">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            {prize.name}
          </h2>
          <span className="text-lg leading-7 text-gray-900 sm:text-xl sm:leading-9 sm:truncate">
            {prize.lessonsCompleted} / {prize.lessonsNeeded} Completed
          </span>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full object-cover"
            src={prize.imageUrl}
            alt={prize.name}
          />
        </div>
      </div>
    </>
  )
}

export default Prize
