import { useParams, Link } from 'react-router';

function UserDetails() {
  const params = useParams();
  console.log(params.id);
  return (
    <>
      <h2>Userlist details</h2>
      <h3>User id is : {params.id}</h3>
      <h4>
        <Link to="/users"> Back</Link>
      </h4>
    </>
  );
}
export default UserDetails;
