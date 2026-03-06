import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ClearItem, decrementValue } from '../ReduxRTK/Products';

function CartItems() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const productSelector = useSelector((state) => state.product.items);
  const [cart, setCart] = useState(productSelector);

  function handleQuantity(id, eventValue) {
    let quantity = parseInt(eventValue) > 1 ? parseInt(eventValue) : 1;
    const cartData = productSelector.map((item) => (item.id === id ? { ...item, quantity } : item));
    setCart(cartData);
  }

  useEffect(() => {
    setCart(productSelector);
  }, [productSelector]);

  function handleOrder() {
    localStorage.clear();
    dispatch(ClearItem());
    if (cart.length > 0) {
      alert('Congratulations Your Order is Placed !!!!!!......');
    } else {
      alert('Please Select some Items to Order');
    }
    Navigate('/product');
  }

  return (
    <>
      <div
        className="mt-10 border-2 border-gray-200 w-full md:w-3/4 lg:w-1/2 
      m-auto px-4 md:px-5 py-2 shadow-2xl rounded-2xl"
      >
        <div
          className="flex flex-col sm:flex-row justify-between items-center 
        p-4 md:p-8 border-b-2 border-gray-300 gap-2"
        >
          <h1 className="text-2xl font-bold text-black">Your Cart Items</h1>
          <p className="font-bold text-black text-lg">{cart.length} Items</p>
        </div>

        {cart.length > 0 &&
          cart.map((items) => (
            <div
              key={items.id}
              className="flex flex-col lg:flex-row justify-between items-center 
              border-b-2 border-b-gray-200 p-4 gap-4"
            >
              <div className="flex items-center gap-4 w-full lg:w-1/2">
                <img
                  className="w-24 sm:w-32 md:w-1/4 object-cover"
                  src={items.thumbnail}
                  alt={`Picture Of ${items.title}`}
                />
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">{items.title}</h2>
                  <p className="text-blue-700 font-bold">{items.brand?.toUpperCase()}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <input
                  onChange={(event) => handleQuantity(items.id, event.target.value)}
                  className="w-full sm:w-32 focus:outline-blue-700 
                  shadow-2xl rounded-xl p-2"
                  type="number"
                  placeholder="Enter Quantity"
                />

                <div className="flex flex-col gap-2 items-center sm:items-start">
                  <p className="text-red-500 font-bold">
                    ${items.quantity ? items.price * items.quantity : items.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(decrementValue(items))}
                    className="bg-red-500 px-4 py-2 rounded-2xl 
                    text-white font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

        <div className="flex justify-center sm:justify-end mt-4">
          <h1 className="text-green-500 font-bold">
            Total Amount : $
            {cart
              .reduce(
                (sum, acc) => (acc.quantity ? sum + acc.price * acc.quantity : sum + acc.price),
                0
              )
              .toFixed(2)}
          </h1>
        </div>

        <div className="flex justify-center sm:justify-end mt-4">
          <button
            onClick={handleOrder}
            className="bg-blue-500 px-6 py-2 rounded-2xl 
            text-white font-bold cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItems;
