import Cart from './Cart';
import InputSearch from './InputSearch';

function Searchbar() {
  return (
    <>
      <div className="flex items-center px-5 gap-4">
        <InputSearch />
        <div className="flex space-x-2">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Searchbar;
