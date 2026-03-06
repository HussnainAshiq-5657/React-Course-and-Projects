import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

function LayoutMenu() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutMenu;
