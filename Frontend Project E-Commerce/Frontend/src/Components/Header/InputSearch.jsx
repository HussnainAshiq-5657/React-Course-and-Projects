import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function InputSearch() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search Your products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShow(true);
        }}
        className="w-full outline-1  px-4 py-2 rounded-lg focus:outline-2 focus:outline-gray-400"
      />

      {/* Dropdown */}
      {show && query && (
        <div className="absolute w-full bg-white shadow-lg mt-2 rounded-lg max-h-60 overflow-y-auto z-50">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  setShow(false);
                  setQuery('');
                }}
                className="p-3 hover:bg-gray-100 cursor-pointer"
              >
                {product.title}
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default InputSearch;
