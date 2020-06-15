import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'
import { useState } from 'react'

const BlogLayout = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to={routes.home()}>Annabelle Learns</NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:flex">
                  <NavLink
                    to={routes.about()}
                    activeClassName="border-b-2"
                    className="inline-flex items-center px-1 pt-1 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                  >
                    About
                  </NavLink>

                  <NavLink
                    to={routes.contact()}
                    activeClassName="border-b-2"
                    className="inline-flex items-center px-1 pt-1 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* <!-- Profile dropdown --> */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out p4"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                      onClick={() => setProfileOpen(!profileOpen)}
                    >
                      <span className="inline-flex items-center px-1 pt-1 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                        {isAuthenticated ? `${currentUser.email} ▾` : `Menu ☰`}
                      </span>
                    </button>
                  </div>
                  {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-200"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                  <div
                    className={`${
                      profileOpen ? 'absolute' : 'hidden'
                      } origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg`}
                  >
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        onClick={isAuthenticated ? logOut : logIn}
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        {isAuthenticated ? 'Log Out' : 'Log In'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-expanded="false"
                  onClick={() => setToggleOpen(!toggleOpen)}
                >
                  {/* <!-- Icon when menu is closed. --> */}
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* <!-- Icon when menu is open. --> */}
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!--
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      --> */}
          <div className={`${toggleOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className="pt-2 pb-3">
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Calendar
              </a>
            </div>

            {isAuthenticated ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="ml-3">
                    <div className="text-sm font-bold leading-5 text-gray-500">
                      {currentUser.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    Settings
                  </a>
                  <a
                    onClick={isAuthenticated ? logOut : logIn}
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                    href="#"
                  >
                    {isAuthenticated ? 'Log Out' : 'Log In'}
                  </a>
                </div>
              </div>
            ) : (
                <div className="mt-3">
                  <a
                    onClick={isAuthenticated ? logOut : logIn}
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                    href="#"
                  >
                    {isAuthenticated ? 'Log Out' : 'Log In'}
                  </a>
                </div>
              )}
          </div>
        </nav>
      </header>
      <div className="max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <main>{children}</main>
      </div>
    </>
  )
}

export default BlogLayout
