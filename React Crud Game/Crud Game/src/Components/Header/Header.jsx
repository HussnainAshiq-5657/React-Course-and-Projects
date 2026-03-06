import React from 'react';
import { NavLink } from 'react-router';
import HeaderData from './HeaderData';

function Header() {
  return (
    <>
      <header className="bg-gray-200 px-4 py-2 shadow-xl shadow-blue-50 ">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <h1 className="text-blue-500 font-bold text-3xl">Crud Game</h1>
          </NavLink>
          <div>
            <HeaderData />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
