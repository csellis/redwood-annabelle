import { Link, routes } from '@redwoodjs/router'

const ActionsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.actions()}
            className="rw-link"
          >
            Actions
          </Link>
        </h1>
        <Link
          to={routes.newAction()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Action
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default ActionsLayout
