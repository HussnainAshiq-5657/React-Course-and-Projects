import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProducts } from '../ReduxRTK/AsyncProducts';
import { decrementValue, incrementValue } from '../ReduxRTK/Products';

function ProductPageItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  }, []);
  const selector = useSelector((state) => state.AsyncProducts.counters);
  console.log(selector);
  const productSelector = useSelector((state) => state.product.items);
  console.log(productSelector);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {selector.length > 0 &&
          selector.map((item) => (
            <div key={item.id} className="border-2 border-gray-300 rounded-2xl px-4 py-2">
              <div className="flex justify-center items-center">
                <img src={item.thumbnail} alt={`Picture of ${item.title}`} />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-black font-bold text-lg">{item.title.toUpperCase()}</h2>
                  <h3 className="text-gray-600">{item.brand?.toUpperCase()}</h3>
                </div>
                <div>
                  <p className="text-gray-500 text-lg line-clamp-2">{item.description}</p>
                </div>
                <div className="text-red-600 font-bold text-lg">${item.price}</div>
                <div>
                  {productSelector.find((cartItem) => cartItem.id === item.id) ? (
                    <button
                      onClick={() => dispatch(decrementValue(item))}
                      className="w-full bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-2xl mb-2 cursor-not-allowed"
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(incrementValue(item))}
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold px-4 py-2 rounded-2xl mb-2"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductPageItems;
