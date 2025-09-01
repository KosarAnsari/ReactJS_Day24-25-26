import { NavLink, Link, Outlet } from 'react-router';
import './NavBar.css';
function NavBar() {
  return (
    <>
      <div>
        <div className="header">
          <div>
            <Link className="link" to="/">
              <h2>Logo</h2>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'custom-active link' : 'link'
                  }
                  className="link"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/in/user/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/in/user/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/college">
                  College
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/users/list">
                  list
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default NavBar;
