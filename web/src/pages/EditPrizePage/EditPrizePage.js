import PrizesLayout from 'src/layouts/PrizesLayout'
import EditPrizeCell from 'src/components/EditPrizeCell'

const EditPrizePage = ({ id }) => {
  return (
    <PrizesLayout>
      <EditPrizeCell id={id} />
    </PrizesLayout>
  )
}

export default EditPrizePage
