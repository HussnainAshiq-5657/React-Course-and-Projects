import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, ClearValues } from '../ReduxToolKit/Slice';
function Products() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center gap-4 w-2/3 m-auto  p-4 mt-6">
        <img
          className="border-2 border-gray-300 w-1/2"
          src="https://media.istockphoto.com/id/1458492520/photo/black-wireless-computer-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hLFS1ukv567H6S-7NjQzvVxNKb7qPkvIKbXkT7Sd2r8="
          alt="Picture of WireLess Mouse"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-black font-bold text-2xl">WireLess Mouse</h3>
          <h2 className="text-red-500 text-xl font-bold">Dell Company</h2>
          <p className="text-gray-400">
            A mouse can refer to a small rodent known for its pointed nose, rounded ears, and long
            tail, or a handheld computer input device used to control a screen's cursor, featuring
            buttons and a scroll wheel to interact with graphical interfaces
          </p>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => dispatch(increment(1))}
              className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-lg"
            >
              Add To Cart
            </button>
            <button
              onClick={() => dispatch(decrement(1))}
              className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded-lg"
            >
              Remove From Cart
            </button>
            <button
              onClick={() => dispatch(ClearValues())}
              className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
