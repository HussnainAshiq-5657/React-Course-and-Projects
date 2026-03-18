import React from 'react';
import HeaderData from './HeaderData';
import Searchbar from './Searchbar';

function MobileMenu({ setHeader }) {
  return (
    <>
      <div className="lg:hidden flex flex-col gap-2">
        <HeaderData onClick={() => setHeader(false)} />
        <div className="md:hidden flex ">
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
