import { useDispatch } from 'react-redux';
import { increment, decrement, clear } from '../reduxToolkit/slice/mouseSlice.js';

function Products() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-evenly items-center my-10">
        <img
          className="w-1/4  border border-gray-300 rounded-xl shadow-2xs shadow-blue-200 cursor-pointer"
          src="https://d3dxkzk9npnkec.cloudfront.net/uploads/images/202506/img_1920x_6856edf270b278-39354002-40815274.webp"
          alt="Image Of Computer Mouse"
        />

        <div className="flex gap-2">
          <button
            className="bg-blue-500 px-4 py-2 rounded-2xl font-bold text-white cursor-pointer"
            onClick={() => dispatch(increment(1))}
          >
            Add To Cart
          </button>
          <button
            className="bg-green-500 px-4 py-2 rounded-2xl font-bold text-white cursor-pointer"
            onClick={() => dispatch(decrement(1))}
          >
            Remove From Cart
          </button>
          <button
            className="bg-red-500 px-4 py-2 rounded-2xl font-bold text-white cursor-pointer"
            onClick={() => dispatch(clear())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
