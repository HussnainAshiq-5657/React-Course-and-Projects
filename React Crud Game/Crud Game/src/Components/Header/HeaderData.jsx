import { NavLink } from 'react-router';

function HeaderData() {
  const HeaderData = [
    {
      id: 1,
      name: 'UserList',
      link: '/',
    },
    {
      id: 2,
      name: 'Add User',
      link: '/addUser',
    },
  ];
  return (
    <>
      {HeaderData.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className={({ isActive }) =>
            `px-3 py-2 font-bold ${isActive ? 'text-blue-500' : 'text-gray-900'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
}

export default HeaderData;
