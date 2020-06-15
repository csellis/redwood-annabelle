import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PrizeForm from 'src/components/PrizeForm'

export const QUERY = gql`
  query FIND_PRIZE_BY_ID($id: Int!) {
    prize: prize(id: $id) {
      id
      name
      imageUrl
      lessonsNeeded
      lessonsCompleted
      createdAt
    }
  }
`
const UPDATE_PRIZE_MUTATION = gql`
  mutation UpdatePrizeMutation($id: Int!, $input: UpdatePrizeInput!) {
    updatePrize(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ prize }) => {
  const [updatePrize, { loading, error }] = useMutation(UPDATE_PRIZE_MUTATION, {
    onCompleted: () => {
      navigate(routes.prizes())
    },
  })

  const onSave = (input, id) => {
    updatePrize({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Prize {prize.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PrizeForm prize={prize} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
