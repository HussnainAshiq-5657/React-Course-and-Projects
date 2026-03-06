import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
function Cart() {
  const cartSelector = useSelector((state) => state.carts.counter);
  console.log(cartSelector.length);
  return (
    <>
      <div className="relative">
        <NavLink to="/cartList">
          <FaCartPlus className="text-white text-2xl" />
          <span className="text-red-600 font-bold absolute -top-3 left-5">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
