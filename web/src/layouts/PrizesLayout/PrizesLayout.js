import { Link, routes } from '@redwoodjs/router'

const PrizesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.prizes()}
            className="rw-link"
          >
            Prizes
          </Link>
        </h1>
        <Link
          to={routes.newPrize()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Prize
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PrizesLayout
