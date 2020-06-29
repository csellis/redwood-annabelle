import { Link, routes } from '@redwoodjs/router'

const ActionTypesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.actionTypes()}
            className="rw-link"
          >
            ActionTypes
          </Link>
        </h1>
        <Link
          to={routes.newActionType()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ActionType
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default ActionTypesLayout
