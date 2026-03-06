import React from 'react';
import HeaderData from './HeaderData';

function MobileMenu({ setOpen }) {
  return (
    <>
      <div className="md:hidden flex flex-col gap-6 mt-10">
        <HeaderData onclick={() => setOpen(false)} />
      </div>
    </>
  );
}

export default MobileMenu;
