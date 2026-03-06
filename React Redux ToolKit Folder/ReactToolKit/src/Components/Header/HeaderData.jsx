import React from 'react';
import { NavLink } from 'react-router';
function HeaderData() {
  const MenuItems = [
    {
      id: 0,
      name: 'Home',
      link: '/',
    },
    {
      id: 1,
      name: 'About',
      link: '/about',
    },
    {
      id: 2,
      name: 'Contact',
      link: '/contact',
    },
    {
      id: 3,
      name: 'Product',
      link: '/product',
    },
  ];
  return (
    <>
      {MenuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className={({ isActive }) =>
            `px-3 py-2 font-bold ${isActive ? 'text-blue-600' : 'text-gray-300'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
}

export default HeaderData;
