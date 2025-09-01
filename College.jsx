import { Link, NavLink, Outlet } from 'react-router';

function College() {
  return (
    <>
      <div className="college" style={{ textAlign: 'center' }}>
        <h2>College page</h2>
        <h3>
          {' '}
          <Link to="/home">Go Back to Home</Link>
        </h3>
        <NavLink className="link" to="">
          Student
        </NavLink>
        <NavLink className="link" to="department">
          Department
        </NavLink>
        <NavLink className="link" to="details">
          College Details
        </NavLink>
        <Outlet />
      </div>
    </>
  );
}
export default College;
