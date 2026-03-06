import { useState } from 'react';
import { NavLink } from 'react-router';
import DeskTopMenu from './DeskTopMenu';
import { GiCrossedBones, GiHamburgerMenu } from 'react-icons/gi';
import Cart from './Cart.jsx';
import MobileMenu from './MobileMenu';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-blue-900 text-white shadow-lg p-5 ">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <h1 className="text-white font-bold text-3xl">MyShop</h1>
          </NavLink>
          <DeskTopMenu />
          <div className="flex items-center gap-6">
            <div className="md:hidden">
              <button className="text-2xl" onClick={() => setOpen(!open)}>
                {open ? <GiCrossedBones /> : <GiHamburgerMenu />}
              </button>
            </div>
            <Cart />
          </div>
        </div>
        {open && <MobileMenu setOpen={setOpen} />}
      </header>
    </>
  );
}

export default Header;
