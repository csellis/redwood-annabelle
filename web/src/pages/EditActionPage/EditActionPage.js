import ActionsLayout from 'src/layouts/ActionsLayout'
import EditActionCell from 'src/components/EditActionCell'

const EditActionPage = ({ id }) => {
  return (
    <ActionsLayout>
      <EditActionCell id={id} />
    </ActionsLayout>
  )
}

export default EditActionPage
