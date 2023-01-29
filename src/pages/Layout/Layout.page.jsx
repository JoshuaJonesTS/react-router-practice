import React from 'react';
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/squares">Squares</Link>
              </li>
              <li>
                <Link to="/state">State</Link>
              </li>
              <li>
                <Link to="/count">Count</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}

export default Layout;