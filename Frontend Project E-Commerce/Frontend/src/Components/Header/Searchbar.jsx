import { CiSearch } from 'react-icons/ci';
import Cart from './Cart';
import WishList from './WishList';
import InputSearch from './InputSearch';

function Searchbar() {
  return (
    <>
      <div className="flex items-center px-5 gap-4">
        {/* <div className="relative flex items-center space-x-2">
          <input
            type="text"
            placeholder="What are you Looking For ?"
            className="w-70 bg-gray-100 rounded-lg px-3 py-2 pr-10 font-poppins focus:outline-none focus:border-2 focus:border-gray-500"
          />
          <CiSearch className="absolute bottom-2.5 right-7 text-xl font-bold" />
        </div> */}
        <InputSearch />
        <div className="flex space-x-2">
          <WishList />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Searchbar;
