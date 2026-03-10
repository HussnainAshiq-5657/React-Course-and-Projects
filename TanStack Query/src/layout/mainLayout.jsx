import React from 'react';
import Header from '../components/Header/Header.jsx';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer.jsx'
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
