import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProducts } from '../../../ReduxToolkit/ProductSlice';
import { FaRegStar, FaRegEye } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import Common from '../../../Components/common/Common';
import { addToCart, removeFromCart } from '../../../ReduxToolkit/slice';
import Button from '../../../Components/Button/Button.jsx';
import { addToWishlist } from '../../../ReduxToolkit/wishListSlice.js';

function ColumnProducts({ className, cardWidth }) {
  const productSelector = useSelector((state) => state.product.items);
  console.log(productSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  }, []);
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);
  const wishSelector = useSelector((state) => state.wishlist.items);
  console.log(wishSelector);
  const isInWishlist = (id) => {
    return wishSelector.some((item) => item.id === id);
  };
  return (
    <>
      <div className="w-4/5 mx-auto my-15 font-poppins">
        <Common category="Our Products" browse="Explore Our Products" />
        <div className="container mx-auto px-4">
          <div className={`${className}`}>
            {productSelector &&
              productSelector.map((items) => (
                <div
                  key={items.id}
                  className={`flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden h-full  min-w-0 shrink-0 ${cardWidth}`}
                >
                  <div className="relative bg-gray-100 p-6 flex items-center justify-center h-56 group">
                    <img
                      src={items.image}
                      alt={`Picture of ${items.title}`}
                      className="h-40 object-contain transition duration-300 group-hover:scale-110"
                    />

                    <div
                      className="absolute inset-0  flex flex-col justify-start items-end gap-4 
                  opacity-0 group-hover:opacity-100  
                  bg-black/10 transition duration-300"
                    >
                      <div className="bg-white p-3 mt-2 mr-3 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">
                        <CiHeart
                          onClick={() =>
                            isInWishlist(items.id)
                              ? dispatch(removeFromWishlist(items))
                              : dispatch(addToWishlist(items))
                          }
                          className={`text-xl cursor-pointer ${
                            isInWishlist(items.id) ? 'text-red-500' : ''
                          }`}
                        />
                      </div>

                      <div className="bg-white p-3 mt-1 mr-3 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">
                        <FaRegEye className="text-xl cursor-pointer" />
                      </div>
                      <div className="w-full  flex items-end mt-13">
                        {cartSelector.find((cartItems) => cartItems.id === items.id) ? (
                          <button
                            onClick={() => dispatch(removeFromCart(items))}
                            className="bg-danger w-full  hover:bg-red-700 hover:transition delay-100 duration-300 ease-linear px-4 py-2 rounded-md text-white text-center cursor-pointer"
                          >
                            Remove From Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => dispatch(addToCart(items))}
                            className="bg-indigo-500 w-full  hover:bg-indigo-700 hover:transition delay-100 duration-300 ease-linear px-4 py-2 rounded-md text-white text-center cursor-pointer"
                          >
                            Add To Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col grow p-4">
                    <p className="text-sm font-semibold text-gray-500 line-clamp-1">
                      {items.category.toUpperCase()}
                    </p>

                    <p className="font-medium text-gray-800 line-clamp-1 min-h-12">{items.title}</p>

                    <div className="mt-auto pt-4">
                      <p className="text-lg font-bold text-indigo-600">${items.price}</p>
                      <div className="flex gap-2">
                        <p className="text-sm text-gray-500">Rating: {items.rating.rate} </p>
                        <p>
                          <FaRegStar className="text-yellow-600" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <Button to="/allProducts" />
      </div>
    </>
  );
}

export default ColumnProducts;
