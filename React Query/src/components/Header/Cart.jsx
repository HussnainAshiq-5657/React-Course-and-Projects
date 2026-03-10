import { CiShoppingCart } from 'react-icons/ci';
import { NavLink } from 'react-router';
function Cart() {
  return (
    <>
      <div className="relative">
        <NavLink to="/cartDetails">
          <CiShoppingCart className="text-3xl" />
          <span className="text-red-500 font-bold absolute -top-2 left-4">0</span>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
