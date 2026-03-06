import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProducts } from '../../ReduxToolkit/ProductSlice.js';
import { FaRegStar, FaRegEye } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import Common from '../../Components/common/Common.jsx';
import { addToCart, removeFromCart } from '../../ReduxToolkit/slice.js';
import {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} from '../../ReduxToolkit/wishListSlice.js';
import Button from '../../Components/Button/Button.jsx';

function WishListItems() {
  const dispatch = useDispatch();

  // Redux selectors
  const wishSelector = useSelector((state) => state.wishlist.items);
  const cartSelector = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  const isInWishlist = (id) => wishSelector.some((item) => item.id === id);

  if (!wishSelector || wishSelector.length === 0) {
    return (
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto flex flex-col justify-center items-center gap-6 my-16 px-4 font-poppins text-center">
        <h3 className="font-bold text-2xl sm:text-3xl">No Items in Wishlist</h3>
        <NavLink
          to="/"
          className="w-full sm:w-auto bg-danger px-6 py-2 text-white rounded-2xl text-center"
        >
          Back To Home Page
        </NavLink>
      </div>
    );
  }

  return (
    <div className="w-4/5 mx-auto my-15 font-poppins">
      <Common category="Our Products" browse="Explore Our Products" />

      {/* Clear Wishlist Button */}
      {wishSelector.length > 0 && (
        <div className="flex my-10 justify-end mb-4">
          <button
            onClick={() => dispatch(clearWishlist())}
            className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-700 transition"
          >
            Clear Wishlist
          </button>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishSelector.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden h-full  min-w-0 shrink-0"
            >
              <div className="relative bg-gray-100 p-6 flex items-center justify-center h-56 group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain transition duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex flex-col justify-start items-end gap-4 opacity-0 group-hover:opacity-100 bg-black/10 transition duration-300">
                  <div className="bg-white p-3 mt-2 mr-3 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">
                    <CiHeart
                      onClick={() =>
                        isInWishlist(item.id)
                          ? dispatch(removeFromWishlist(item.id))
                          : dispatch(addToWishlist(item))
                      }
                      className={`text-xl cursor-pointer ${
                        isInWishlist(item.id) ? 'text-red-500' : ''
                      }`}
                    />
                  </div>

                  <div className="bg-white p-3 mt-1 mr-3 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition">
                    <FaRegEye className="text-xl cursor-pointer" />
                  </div>

                  {/* Cart Button */}
                  <div className="w-full flex items-end mt-13">
                    {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                      <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className="bg-danger w-full hover:bg-red-700 transition px-4 py-2 rounded-md text-white text-center cursor-pointer"
                      >
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="bg-indigo-500 w-full hover:bg-indigo-700 transition px-4 py-2 rounded-md text-white text-center cursor-pointer"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col grow p-4">
                <p className="text-sm font-semibold text-gray-500 line-clamp-1">
                  {item.category.toUpperCase()}
                </p>
                <p className="font-medium text-gray-800 line-clamp-1 min-h-12">{item.title}</p>

                <div className="mt-auto pt-4">
                  <p className="text-lg font-bold text-indigo-600">${item.price}</p>
                  <div className="flex gap-2">
                    <p className="text-sm text-gray-500">Rating: {item.rating.rate} </p>
                    <FaRegStar className="text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button to="/allProducts" />
    </div>
  );
}

export default WishListItems;
