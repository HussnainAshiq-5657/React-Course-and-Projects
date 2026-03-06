import { NavLink } from 'react-router';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Searchbar from './Searchbar';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiTireIronCross } from 'react-icons/gi';

function Header() {
  const [OpenHeader, setHeader] = useState(false);
  return (
    <>
      <header className="rounded-lg p-4 border-b-2 border-gray-400 shadow-sm shadow-gray-100 bg-gray-300 sticky top-0 z-50">
        <div className="w-4/5 mx-auto flex justify-between items-center">
          <NavLink to="/" className="me-4">
            <h1 className="text-2xl font-bold">TrendWave</h1>
          </NavLink>
          <div className="flex justify-between items-center gap-4 px-4">
            <DesktopMenu />
            <div className=" hidden md:flex">
              <Searchbar />
            </div>
            <div className="lg:hidden">
              <button onClick={() => setHeader(!OpenHeader)} className="text-2xl font-bold">
                {OpenHeader ? <GiTireIronCross /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
        </div>
        {OpenHeader && <MobileMenu setHeader={setHeader} />}
      </header>
    </>
  );
}

export default Header;
