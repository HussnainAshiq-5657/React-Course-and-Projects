import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearCart, decrement, increment } from '../ReduxRTK/slice';

function HomeProduct() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 lg:w-1/2 
                    border-2 border-gray-300 rounded-2xl shadow-2xl m-auto p-5 mt-20 gap-6"
      >
        <img
          className="w-40 h-40 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNnT0Vlz8PPkGAWqlunmXbMn5yQ2tJ6jbGw&s"
          alt="Picture of Wireless Mouse"
        />

        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-black text-lg font-bold">Wireless Mouse</h2>

          <p className="text-gray-700 line-clamp-4">
            Wireless mice offer clutter-free, portable, and responsive control using Bluetooth or
            USB dongles, with premium models featuring ergonomic designs and long battery life. They
            are essential for modern workstations, providing flexibility for laptops and desktop
            setups.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button
              onClick={() => dispatch(increment(1))}
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded-2xl cursor-pointer"
            >
              Add To Cart
            </button>

            <button
              onClick={() => dispatch(decrement(1))}
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-2xl cursor-pointer"
            >
              Remove From Cart
            </button>

            <button
              onClick={() => dispatch(ClearCart())}
              className="bg-green-500 text-white font-bold px-4 py-2 rounded-2xl cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProduct;
