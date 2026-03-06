import { useState } from 'react';
import { NavLink } from 'react-router';
import DeskTopMenu from './DeskTopMenu';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiSplitCross } from 'react-icons/gi';
import MobileMenu from './MobileMenu';
import Cart from './Cart.jsx';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-blue-400 shadow-xl p-5">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <h1 className="text-white font-bold text-2xl">Trendy Trunk</h1>
          </NavLink>
          <DeskTopMenu />
          <div className="flex items-center gap-6">
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="font-bold text-2xl text-white">
                {open ? <GiSplitCross /> : <RxHamburgerMenu />}
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
