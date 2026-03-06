import React from 'react';

function FooterData() {
  const FooterData = [
    {
      id: 0,
      name: 'My Account',
      link: '#',
    },
    {
      id: 1,
      name: 'Login/Register',
      link: '#',
    },
    {
      id: 2,
      name: 'Cart',
      link: '#',
    },
    {
      id: 3,
      name: 'WishList',
      link: '#',
    },
    {
      id: 4,
      name: 'Shop',
      link: '#',
    },
  ];
  return (
    <>
      {FooterData.map((item) => (
        <div key={item.id}>
          <a href={item.link}>{item.name}</a>
        </div>
      ))}
    </>
  );
}

export default FooterData;
