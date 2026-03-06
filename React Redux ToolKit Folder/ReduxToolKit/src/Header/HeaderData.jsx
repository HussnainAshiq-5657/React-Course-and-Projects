import React from 'react';
import { NavLink } from 'react-router';

function HeaderData() {
  const MenuItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
    {
      name: 'Products',
      link: '/products',
    },
  ];
  return (
    <>
      {MenuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            `px-3 py-2 font-bold  ${isActive ? 'text-blue-500' : 'text-white'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
}

export default HeaderData;
