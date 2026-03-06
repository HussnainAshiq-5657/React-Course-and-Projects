import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../ReduxToolKit/ProductsSlice';
import { addItem, removeItem } from '../ReduxToolKit/ProductRedux.js';
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.product.counters);
  console.log(productSelector);
  const cartSelector = useSelector((state) => state.carts.items);
  console.log(cartSelector.length);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 px-4 py-2">
        {productSelector.length > 0 &&
          productSelector.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 p-4 border-2 border-gray-400 shadow-xl rounded-2xl"
            >
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  className="object-contain cursor-pointer"
                  src={item.thumbnail}
                  alt="Pictures Of E-commerce Products"
                />
              </div>

              <div className="space-y-2">
                <h2 className="font-bold text-lg">{item.title.toUpperCase()}</h2>
                <p className="text-gray-600 line-clamp-3">{item.description}</p>
              </div>

              <div className="space-y-1">
                <p className="text-blue-600 font-bold">{item.category.toUpperCase()}</p>
                <h3 className="text-red-500 font-bold">${item.price}</h3>
                <p className="text-green-400 font-bold">Rating: {item.rating}</p>
              </div>

              <div>
                {cartSelector.find((product) => product.id === item.id) ? (
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="w-full bg-red-500 cursor-pointer px-4 py-2 rounded-2xl text-white font-bold"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="w-full bg-blue-500 cursor-pointer px-4 py-2 rounded-2xl text-white font-bold"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Products;
