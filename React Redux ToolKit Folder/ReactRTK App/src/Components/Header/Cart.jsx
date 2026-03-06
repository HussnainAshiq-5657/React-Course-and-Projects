import { NavLink } from 'react-router';
import { FaCartArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Cart() {
  const selector = useSelector((state) => state.cart.counter);
  const productSelector = useSelector((state) => state.product.items);
  console.log(productSelector.length);

  return (
    <>
      <div className="relative">
        <NavLink to="/cartList">
          <FaCartArrowDown className="text-white text-3xl font-bold" />
          <span className="text-red-600 text-xl font-bold absolute -top-3 left-5">
            {productSelector.length ? productSelector.length : selector}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
