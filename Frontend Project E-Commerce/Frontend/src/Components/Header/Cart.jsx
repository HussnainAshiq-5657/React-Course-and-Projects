import { CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
function Cart() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);

  return (
    <>
      <div className="relative">
        <NavLink to="/cartDetails">
          <CiShoppingCart className="text-3xl" />
          <span className="text-red-500 font-bold absolute -top-2 left-4">
            {cartSelector.length}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
