import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PrizeForm from 'src/components/PrizeForm'

const CREATE_PRIZE_MUTATION = gql`
  mutation CreatePrizeMutation($input: CreatePrizeInput!) {
    createPrize(input: $input) {
      id
    }
  }
`

const NewPrize = () => {
  const [createPrize, { loading, error }] = useMutation(CREATE_PRIZE_MUTATION, {
    onCompleted: () => {
      navigate(routes.prizes())
    },
  })

  const onSave = (input) => {
    createPrize({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Prize</h2>
      </header>
      <div className="rw-segment-main">
        <PrizeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPrize
