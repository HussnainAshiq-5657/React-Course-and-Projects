import React from 'react';
import HeaderData from './HeaderData';

function MobileMenu({ setOpen }) {
  return (
    <>
      <div className="md:hidden flex flex-col gap-6 mt-6">
        <HeaderData onClick={() => setOpen(false)} />
      </div>
    </>
  );
}

export default MobileMenu;
