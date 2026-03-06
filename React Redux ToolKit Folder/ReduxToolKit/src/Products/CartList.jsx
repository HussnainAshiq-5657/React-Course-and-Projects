import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ClearValues, decrement } from '../ReduxToolKit/slice';
import { useNavigate } from 'react-router';
function CartList() {
  const cartSelector = useSelector((state) => state.carts.counter);
  console.log('Cart Items : ', cartSelector);
  const [cartItems, setCartItems] = useState(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleOrder(){
    localStorage.clear();
    dispatch(ClearValues());
    alert("Congratulations!!!!!!!!!!!!!!!Your Order is Placed");
    navigate("/")
  }
  useEffect(()=>{
   setCartItems(cartSelector);
  },[cartSelector])
  const manageQuantity = (id, value) => {
    let quantity = parseInt(value) > 1 ? parseInt(value) : 1;
    const cartTempItems = cartItems.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCartItems(cartTempItems);
  };

  return (
    <>
      <div className=" mt-20 w-1/2 m-auto p-4  border-2 border-gray-200 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-10 pb-10 border-b-2 border-gray-200 ">
          <h1 className="text-2xl font-bold">Your Cart Items</h1>
          <span className="font-bold">{cartSelector.length} Items</span>
        </div>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b-2 border-gray-200 py-4"
              >
                <div className="flex items-center gap-3">
                  <img className="w-1/4" src={item.thumbnail} alt="Picture of Cart Items" />
                  <div className="">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <input
                      value={item.quantity ? item.quantity : 1}
                      onChange={(event) => manageQuantity(item.id, event.target.value)}
                      className="m-5"
                      type="number"
                      placeholder="Enter Quantity"
                    />
                    <div className="flex flex-col justify-end">
                      <span className="text-xl font-bold text-green-400">
                        ${(item.quantity ? item.quantity * item.price : item.price).toFixed(2)}
                      </span>
                      <button onClick={()=>dispatch(decrement(item))} className="bg-red-500 px-4 py-2 rounded-xl text-white font-bold">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
        <div className="text-right font-bold text-red-500">
          Total : $
          {cartItems
            .reduce(
              (sum, acc) => (acc.quantity ? sum + acc.price * acc.quantity : sum + acc.price),
              0
            )
            .toFixed(2)}
        </div>
        
            <button onClick={handleOrder} className='bg-blue-500 px-3 py-2 rounded-lg'>Place Order</button>
       
      </div>
    </>
  );
}

export default CartList;
