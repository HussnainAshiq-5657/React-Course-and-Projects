import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearAll, removeItem } from '../reduxToolkit/slice/ProductSlice';
import { useNavigate } from 'react-router';
function CartDetails() {
  const cartSelector = useSelector((state) => state.ProductSlice.value);
  console.log(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);
  const [cartItems, setCartItems] = useState(cartSelector);
  const manageQuantity = (id, q) => {
    console.log(id, q);
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const tempItems = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
    setCartItems(tempItems);
  };

  function handleOrder() {
    localStorage.clear();
    dispatch(ClearAll());
    alert('Your Order Created Successfully!!!!!....');
    navigate('/');
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
          <h1 className="text-2xl font-bold">Your Cart Details</h1>
          <p className="text-lg font-semibold">Items: {cartSelector.length}</p>
        </div>

        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border rounded-xl p-4 mb-4 shadow-sm gap-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                <div className="text-center sm:text-left">
                  <h4 className="text-sm text-gray-500">{item.category}</h4>
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex  gap-4">
                  <input
                    onChange={(e) => manageQuantity(item.id, e.target.value)}
                    value={item.quantity ? item.quantity : 1}
                    className="m-5 border rounded-lg p-2"
                    type="number"
                    placeholder="Enter Your Quantity"
                  />
                  <div>
                    <span className="font-bold text-lg text-green-400">
                      ${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl  font-semibold transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <p className="text-xl font-semibold">
            Total : $
            {cartItems
              .reduce(
                (sum, items) =>
                  items.quantity ? (sum += items.price * items.quantity) : (sum += items.price),
                0
              )
              .toFixed(2)}
          </p>
        </div>
        <button
          onClick={handleOrder}
          className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl  font-semibold transition"
        >
          Place Order
        </button>
      </div>
    </>
  );
}

export default CartDetails;
