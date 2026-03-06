import { NavLink } from 'react-router';

function HeaderData() {
  const MenuList = [
    { id: 0, name: 'Home', link: '/' },
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Contact', link: '/contact' },
    { id: 4, name: 'Products', link: '/product' },
  ];

  return (
    <>
      {MenuList.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className={({ isActive }) =>
            `px-4 py-2 font-bold ${isActive ? 'text-blue-700' : 'text-gray-300'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
}

export default HeaderData;
