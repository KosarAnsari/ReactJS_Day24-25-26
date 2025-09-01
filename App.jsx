import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound.jsx';
import College from './College';
import Student from './Student';
import Department from './Department';
import Details from './Details';
import UserList from './UserList';
import UserDetails from './UserDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        {/*<NavBar />*/}
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/users/list?" element={<UserList />} />

            <Route path="/users/:id/:name?" element={<UserDetails />} />

            <Route path="in">
              <Route path="/in/user">
                <Route path="/in/user/contact" element={<Contact />} />
                <Route path="/in/user/about" element={<About />} />
              </Route>
            </Route>
          </Route>

          <Route path="/college" element={<College />}>
            <Route index element={<Student />} />
            <Route path="department" element={<Department />} />
            <Route path="details" element={<Details />} />
          </Route>

          <Route path="/" element={<PageNotFound />} />
          {/*<Route path="/" element={<Navigate to="/home" />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
