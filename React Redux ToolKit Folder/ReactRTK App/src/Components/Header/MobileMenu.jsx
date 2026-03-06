import HeaderData from './HeaderData.jsx';

function MobileMenu({ setOpen }) {
  return (
    <>
      <div className="flex flex-col md:hidden">
        <HeaderData onClick={() => setOpen(false)} />
      </div>
    </>
  );
}

export default MobileMenu;
