import React from 'react';

function FooterData() {
  const FooterLink = [
    { id: 1, name: 'My Account', link: '#' },
    { id: 2, name: 'Login / Register', link: '#' },
    { id: 3, name: 'Cart', link: '#' },
    { id: 4, name: 'Wishlist', link: '#' },
    { id: 5, name: 'Shop', link: '#' },
  ];

  return (
    <div className="w-full">
      {/* Responsive Container */}
      <div className="flex flex-col gap-4  sm:text-left">
        {/* Heading */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Account</h1>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          {FooterLink.map((items) => (
            <a
              key={items.id}
              href={items.link}
              className="hover:text-red-500 transition duration-300"
            >
              {items.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterData;
