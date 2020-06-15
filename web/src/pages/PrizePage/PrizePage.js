import PrizesLayout from 'src/layouts/PrizesLayout'
import PrizeCell from 'src/components/PrizeCell'

const PrizePage = ({ id }) => {
  return (
    <PrizesLayout>
      <PrizeCell id={id} />
    </PrizesLayout>
  )
}

export default PrizePage
