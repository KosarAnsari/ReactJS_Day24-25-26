import { Link } from 'react-router';

function PageNotFound() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Page Not Found</h2>
        <div>
          <Link to="/home">Go to Home Page</Link>
        </div>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.0PLHVHrBYDro1PwvLbYRxQHaHa?pid=Api&h=220&P=0"
          alt=""
        />
      </div>
    </>
  );
}
export default PageNotFound;
