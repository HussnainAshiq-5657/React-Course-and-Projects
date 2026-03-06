import React from 'react';
import TopHeader from '../Components/TopHeader/TopHeader';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

function Layout() {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
