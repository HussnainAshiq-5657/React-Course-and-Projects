import React from 'react';
import Header from '../Components/Header/Header.jsx';
import { Outlet } from 'react-router';
function LayoutMenu() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutMenu;
