import { NavLink } from 'react-router';
import { FaCartArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Cart() {
  const selector = useSelector((state) => state.cart.counter);
  const cartSelector = useSelector((state) => state.carts.items);
  console.log(cartSelector.length);

  return (
    <>
      <div className="relative">
        <NavLink to="/cartList">
          <FaCartArrowDown className="text-white text-3xl" />
          <span className="font-bold text-xl text-red-500 absolute -top-3 left-6">
            {selector ? selector : cartSelector.length}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
