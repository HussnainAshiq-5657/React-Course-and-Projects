import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Outlet } from 'react-router';
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
