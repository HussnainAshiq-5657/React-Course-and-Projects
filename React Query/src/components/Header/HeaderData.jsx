import { NavLink } from 'react-router';
function HeaderData() {
  const MenuList = [
    {
      id: 0,
      name: 'Home',
      link: '/',
    },
    {
      id: 1,
      name: 'Products',
      link: '/product',
    },
    {
      id: 2,
      name: 'Pagination',
      link: '/paginate',
    },
    {
      id: 3,
      name: 'ScrollPagination',
      link: '/scrollPaginate',
    },
  ];
  return (
    <>
      {MenuList.map((items) => (
        <NavLink
          key={items.id}
          to={items.link}
          className={({ isActive }) =>
            `px-3 py-2 font-poppins ${isActive ? 'font-bold text-black underline underline-offset-5 decoration-gray-500' : 'text-black'}`
          }
        >
          {items.name}
        </NavLink>
      ))}
    </>
  );
}

export default HeaderData;
