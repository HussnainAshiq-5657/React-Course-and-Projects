import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, ClearItems } from '../ReduxToolKit/ProductRedux';
import { useNavigate } from 'react-router';
function CartList() {
  const cartSelector = useSelector((state) => state.carts.items);
  console.log(cartSelector.length);

  const [cartItem, setCartItem] = useState(cartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItem(cartSelector);
  }, [cartSelector]);

  const navigate = useNavigate();

  function handleOrder() {
    dispatch(ClearItems());
    localStorage.clear();
    if (cartItem.length > 0) {
      alert('Congratulations!!!!!!!!!Your Order is Placed');
    } else {
      alert('OOPss!!!!!!!!!Your Order is Not Placed.');
    }
    navigate('/');
  }
  //Function For Quantity Management

  const ManageQuantity = (id, eventValue) => {
    console.log('Hello ID is :', id, 'and Quantity Value is :', eventValue);
    let quantity = parseInt(eventValue) > 1 ? parseInt(eventValue) : 1;
    const updateCart = cartItem.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCartItem(updateCart);
  };

  return (
    <>
      <div className="m-auto w-1/2 mt-20 py-2 px-4">
        <div className="flex justify-between items-center w-full border-b-2 border-gray-200 p-5">
          <h2 className="text-2xl font-bold">Your Cart Items</h2>
          <span className="text-lg text-blue-500 font-bold">{cartItem.length} Items</span>
        </div>
        <div className="p-4">
          {cartItem.length > 0 &&
            cartItem.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b-2 border-gray-200 mb-10 py-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-1/4 flex justify-center items-center"
                    src={item.thumbnail}
                    alt="Picture Of E-Commerce Website"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-black font-bold">{item.title.toUpperCase()}</h2>
                    <p className="text-blue-500 font-bold">{item.category.toUpperCase()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={(event) => ManageQuantity(item.id, event.target.value)}
                    value={item.quantity > 1 ? item.quantity : 1}
                    type="number"
                    placeholder="Enter Quantity"
                    className="m-6"
                  />
                  <div className="flex flex-col gap-2 justify-end">
                    <p className="text-red-500 font-bold text-lg">
                      ${(item.quantity ? item.quantity * item.price : item.price).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="bg-blue-500 px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

          <div className="text-right font-bold text-green-500">
            <h1>
              Total:$
              {cartItem
                .reduce(
                  (sum, acc) => (acc.quantity ? sum + acc.price * acc.quantity : sum + acc.price),
                  0
                )
                .toFixed(2)}
            </h1>
          </div>
        </div>
        <div>
          <button
            onClick={handleOrder}
            className="text-white font-bold bg-blue-500 px-4 py-2 rounded-2xl"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default CartList;
