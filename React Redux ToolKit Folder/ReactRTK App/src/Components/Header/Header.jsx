import { useState } from 'react';
import { NavLink } from 'react-router';
import DeskTopMenu from './DeskTopMenu.jsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiCrossedBones } from 'react-icons/gi';
import Cart from './Cart.jsx';
import MobileMenu from './MobileMenu.jsx';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-blue-400 px-4 py-2">
        <div className="flex justify-between items-center">
          <NavLink>
            <h1 className="text-white font-bold text-3xl">MyShop</h1>
          </NavLink>
          <DeskTopMenu />
          <div className="flex items-center gap-6">
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="font-bold text-3xl text-white">
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
