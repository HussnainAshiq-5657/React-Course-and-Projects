import React from 'react';
import Header from '../Header/Header';
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
