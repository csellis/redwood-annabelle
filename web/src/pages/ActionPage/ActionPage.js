import ActionsLayout from 'src/layouts/ActionsLayout'
import ActionCell from 'src/components/ActionCell'

const ActionPage = ({ id }) => {
  return (
    <ActionsLayout>
      <ActionCell id={id} />
    </ActionsLayout>
  )
}

export default ActionPage
