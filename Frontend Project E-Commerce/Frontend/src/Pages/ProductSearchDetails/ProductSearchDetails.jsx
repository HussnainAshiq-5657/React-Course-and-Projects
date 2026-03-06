import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../ReduxToolkit/slice';

function ProductSearchDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartSelector = useSelector((state) => state.cart.items);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );

  const isInCart = cartSelector.find((item) => item.id === product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md h-72 sm:h-96 object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{product.title}</h1>

          <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>

          <h2 className="text-xl sm:text-2xl font-semibold text-green-600">${product.price}</h2>

          {isInCart ? (
            <button
              onClick={() => dispatch(removeFromCart(product))}
              className="w-full cursor-pointer sm:w-fit mx-auto md:mx-0 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full sm:w-fit mx-auto md:mx-0 cursor-pointer bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSearchDetails;
