import { CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
function Cart() {
  //   const count = useSelector((state) => state.counter.count);
  //   console.log(count);
  const cartSelector = useSelector((state) => state.ProductSlice.value);
  console.log(cartSelector);

  return (
    <>
      <div className="relative">
        <NavLink to="/cartDetails">
          <CiShoppingCart className="text-3xl" />
          <span className="text-red-500 font-bold absolute -top-2 left-4">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
