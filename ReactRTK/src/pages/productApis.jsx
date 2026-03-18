import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reduxToolkit/slice/productApis';
import { motion } from 'motion/react';
import { addItem, removeItem } from '../reduxToolkit/slice/ProductSlice.js';
function ProductApis() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const ProductApisSelector = useSelector((state) => state.ProductAPis.items);
  console.log(ProductApisSelector);
  const cartSelector = useSelector((state) => state.ProductSlice.value);
  return (
    <>
      <div className="max-w-7xl mx-auto p-6 mb-10">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ProductApisSelector.length > 0 &&
            ProductApisSelector.map((item) => (
              <motion.div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col h-full shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain mb-4 mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.05 }}
                />

                <h2 className="text-lg font-semibold text-center">{item.title}</h2>
                <p className="text-gray-700 mt-2">${item.price}</p>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                <p className="text-yellow-500 font-bold mt-2">
                  ⭐ {item.rating.rate} ({item.rating.count})
                </p>

                {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="mt-auto w-full font-bold cursor-pointer hover:bg-red-700 bg-red-500 px-4 py-2 rounded-2xl text-white"
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="mt-auto w-full font-bold cursor-pointer hover:bg-blue-700 bg-blue-500 px-4 py-2 rounded-2xl text-white"
                  >
                    Add To Cart
                  </button>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProductApis;
