import { Link, routes } from '@redwoodjs/router'
import ActionTypes from 'src/components/ActionTypes'

export const QUERY = gql`
  query ACTION_TYPES {
    actionTypes {
      id
      title
      description
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
      {'No actionTypes yet. '}
      <Link to={routes.newActionType()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ actionTypes }) => {
  return <ActionTypes actionTypes={actionTypes} />
}
