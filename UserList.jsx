import { Link } from 'react-router';

function UserList() {
  const userdata = [
    { id: 1, name: 'Anil' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Sid' },
    { id: 4, name: 'Weeknd' },
    { id: 5, name: 'Peter' },
    { id: 6, name: 'Tony' },
  ];
  return (
    <>
      <h2 style={{ marginLeft: 20 }}>User List Page</h2>
      {userdata.map((item) => (
        <div style={{ marginLeft: 20 }}>
          <p>
            <Link to={"/users/"+item.id}>{item.name}</Link>
          </p>
        </div>
      ))}

      <h2>User List Page with Name in URL</h2>
      {
        userdata.map((item)=>(
          <div>
            <p><Link to={'/users/'+item.id+"/"+item.name}>{item.name}</Link></p>
          </div>
        ))
      }
    </>
  );
}
export default UserList;
