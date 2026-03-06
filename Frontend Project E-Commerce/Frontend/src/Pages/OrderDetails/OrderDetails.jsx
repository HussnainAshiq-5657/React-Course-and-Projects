import { useDispatch, useSelector } from 'react-redux';
import InputField from '../OrderDetails/Components/InputField.jsx';
import Row from '../OrderDetails/Components/Row.jsx';
import { useNavigate } from 'react-router';
import { clearCart } from '../../ReduxToolkit/slice.js';
function OrderDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartSelector = useSelector((state) => state.cart.items);
  function handleOrder() {
    if (cartSelector.length === 0) {
      alert('Please Buy Some Products!.....');
      navigate('/');
    } else {
      localStorage.clear();
      dispatch(clearCart());
      navigate('/orderDone');
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 font-poppins">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-3">Billing Details</h2>

          <form className="space-y-5">
            <InputField label="First Name*" />
            <InputField label="Company Name" />
            <InputField label="Street Address*" />
            <InputField label="Apartment, floor, etc. (optional)" />
            <InputField label="Town/City*" />
            <InputField label="Phone Number*" type="tel" />
            <InputField label="Email Address*" type="email" />

            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" className="w-4 h-4 accent-red-500" defaultChecked />
              <label className="text-sm text-gray-600">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-3">Order Summary</h2>

          <div className="space-y-5 border-b pb-6">
            {cartSelector.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain bg-gray-100 p-2 rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                  </div>
                </div>

                <p className="font-semibold">
                  ${(item.price * (item.quantity ? item.quantity : 1)).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 py-6 text-sm">
            <Row
              label="Subtotal:"
              value={`$${cartSelector.reduce((sum, acc) => (acc.quantity ? (sum += acc.price * acc.quantity) : acc.price), 0).toFixed(2)}`}
            />
            <Row label="Shipping:" value="Free" />
            <Row
              label="Total:"
              value={`$${cartSelector.reduce((sum, acc) => (acc.quantity ? (sum += acc.price * acc.quantity) : acc.price), 0).toFixed(2)}`}
              bold
            />
          </div>

          <div className="py-6 space-y-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Bank Transfer</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 hover:scale-105">
              Apply
            </button>
          </div>

          <div className="w-full flex ">
            <button
              onClick={handleOrder}
              to="/orderDone"
              className="w-full text-center bg-red-500 cursor-pointer text-white py-3 rounded-xl font-medium hover:bg-red-600 transition duration-300 hover:scale-105"
            >
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
