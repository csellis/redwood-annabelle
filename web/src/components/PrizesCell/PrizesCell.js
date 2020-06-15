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
  // return <Prizes prizes={prizes} />
  return (
    <div className="mt-12 grid gap-5 max-w-lg mx-auto sm:grid-cols-3 lg:max-w-none">
      {prizes.map((prize) => (
        <div
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          key={prize.id}
        >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src={prize.imageUrl}
              alt={prize.name}
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <a href="#" className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {prize.name}
                </h3>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    {prize.lessonsCompleted} / {prize.lessonsNeeded} Completed
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
