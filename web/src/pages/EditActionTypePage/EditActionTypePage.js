import ActionTypesLayout from 'src/layouts/ActionTypesLayout'
import EditActionTypeCell from 'src/components/EditActionTypeCell'

const EditActionTypePage = ({ id }) => {
  return (
    <ActionTypesLayout>
      <EditActionTypeCell id={id} />
    </ActionTypesLayout>
  )
}

export default EditActionTypePage
