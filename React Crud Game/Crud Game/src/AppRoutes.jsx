import { Route, Routes } from 'react-router';
import UserList from './Pages/UserList.jsx';
import AddUser from './Pages/AddUser.jsx';
import LayoutMenu from './Layout/LayoutMenu.jsx';
import EditUser from './Pages/EditUser.jsx';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<LayoutMenu />}>
          <Route path="/" element={<UserList />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
