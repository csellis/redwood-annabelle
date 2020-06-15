import { Link, routes } from '@redwoodjs/router'
import Prizes from 'src/components/Prizes'

export const QUERY = gql`
  query PRIZES {
    prizes {
      id
      name
      imageUrl
      lessonsNeeded
      lessonsCompleted
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No prizes yet. '}
      <Link to={routes.newPrize()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ prizes }) => {
  return <Prizes prizes={prizes} />
}
