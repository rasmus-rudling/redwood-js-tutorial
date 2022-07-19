import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="m-7">
      <Toaster />
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button
                type="button"
                className="bg-gray-300 p-1 rounded"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()} className="bg-gray-300 p-1 rounded">
              Login
            </Link>
          )}
        </div>

        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default BlogLayout
