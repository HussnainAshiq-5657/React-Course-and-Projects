import React from 'react';
import { NavLink } from 'react-router';
function Button({ to }) {
  return (
    <>
      <div className="flex justify-center font-poppins mt-15 ">
        <NavLink
          to={to}
          className="bg-danger px-4 py-2 cursor-pointer text-white hover:bg-red-600 rounded-xl transition delay-100 duration-300 ease-initial hover:scale-110 hover:-bg-conic-180translate-y-1"
        >
          View all Products
        </NavLink>
      </div>
    </>
  );
}

export default Button;
