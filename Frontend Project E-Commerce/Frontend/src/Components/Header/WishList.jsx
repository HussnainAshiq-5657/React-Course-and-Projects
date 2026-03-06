import { NavLink } from 'react-router';
import { CiHeart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
function WishList() {
  const wishSelector = useSelector((state) => state.wishlist.items);
  return (
    <>
      <div className="relative">
        <NavLink to="/wishlist">
          <CiHeart className="text-3xl" />
          <span className="text-red-500 font-bold absolute -top-2 left-4">
            {wishSelector.length ? wishSelector.length : '0'}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default WishList;
