import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../ReduxToolKit/ProductsSlice.js';
import { decrement, increament } from '../ReduxToolKit/slice.js';
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const ProductSelector = useSelector((state) => state.products.items);
  console.log(ProductSelector);
  const cartSelector = useSelector((state) => state.carts.counter);
  console.log(cartSelector.length);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mt-10 bg-gray-300">
        {ProductSelector.length > 0 &&
          ProductSelector.map((item) => (
            <div
              className="bg-white shadow-xl rounded-2xl p-2 border-2 border-gray-400"
              key={item.id}
            >
              <img
                className="object-contain"
                src={item.thumbnail}
                alt="Picture of the E-commerce Website"
              />
              <div className="bg-white flex flex-col space-y-2 p-2 items-center">
                <div className="text-black font-bold">{item.title}</div>
                <div className="text-gray-400">{item.brand}</div>
                <div className="text-blue-600 font-bold">{item.price}</div>
                <div className="text-gray-400">{item.rating}</div>
                {cartSelector.find((product) => product.id === item.id) ? (
                  <button
                    onClick={() => dispatch(decrement(item))}
                    className="bg-red-500 px-4 py-2 rounded-2xl"
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(increament(item))}
                    className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-2xl"
                  >
                    Add to Cart
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
