import { Link, routes } from '@redwoodjs/router'

import Actions from 'src/components/Actions'

export const QUERY = gql`
  query ACTIONS {
    actions {
      id
      actionId
      date
      createdAt
      notes
      userId
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
      {'No actions yet. '}
      <Link
        to={routes.newAction()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ actions }) => {
  return <Actions actions={actions} />
}
