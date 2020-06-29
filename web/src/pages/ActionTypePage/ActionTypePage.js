import ActionTypesLayout from 'src/layouts/ActionTypesLayout'
import ActionTypeCell from 'src/components/ActionTypeCell'

const ActionTypePage = ({ id }) => {
  return (
    <ActionTypesLayout>
      <ActionTypeCell id={id} />
    </ActionTypesLayout>
  )
}

export default ActionTypePage
