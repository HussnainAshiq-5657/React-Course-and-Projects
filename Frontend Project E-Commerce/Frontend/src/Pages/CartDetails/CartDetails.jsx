import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { updateQuantity, removeFromCart } from '../../ReduxToolkit/slice';

function CartDetails() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const manageQuantity = (q, id) => {
    let quantity = parseInt(q);

    if (quantity < 1) quantity = 1;

    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-full px-4 py-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        <div className="my-10 flex justify-between items-center gap-2">
          <h1 className="text-3xl font-bold">Your Cart Items</h1>
          <p className="font-semibold text-indigo-700">{cartItems.length} Items</p>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Quantity</th>
                <th className="px-6 py-3 text-left">Subtotal</th>
                <th className="px-6 py-3 text-left">Remove</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <img src={item.image} alt="product" className="h-16 object-contain" />
                    </td>

                    <td className="px-6 py-4">${item.price}</td>

                    <td className="px-6 py-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => manageQuantity(e.target.value, item.id)}
                        className="w-20 border rounded px-2 py-1"
                      />
                    </td>

                    <td className="px-6 py-4 font-semibold">
                      ${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className="bg-danger cursor-pointer text-white px-3 py-1  hover:bg-red-600 rounded-xl transition delay-100 duration-300 ease-initial hover:scale-110 hover:-bg-conic-180translate-y-1"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6">
                    Your Cart is Empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end my-10">
          <div className="w-full md:w-1/3 border p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Cart Total</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${totalPrice}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-3">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>

            <NavLink
              to="/orderDetails"
              className="block text-center mt-5 bg-danger cursor-pointer text-white px-3 py-2  hover:bg-red-600 rounded-xl transition delay-100 duration-300 ease-initial hover:scale-110 hover:-bg-conic-180 translate-y-1"
            >
              Proceed To Checkout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
