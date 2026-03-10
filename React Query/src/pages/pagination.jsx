import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function Pagination() {
  const [page, setPage] = useState(1);
  const limit = 5;
  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const product = await response.json();
    return product;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchProducts,

  });
  if (isLoading) {
    return <h1 className="text-center text-xl font-bold">Please Wait data is Loading!........</h1>;
  }
  if (error) {
    return <p className="text-center text-red-500 text-xl font-bold">Error Occur</p>;
  }

  // Pagination

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = data.slice(start, end);
  const totalPages = Math.ceil(data.length / limit);

  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts?.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300 flex flex-col gap-2 h-full"
            >
              <img src={item.image} alt={item.title} className="h-48 w-full object-contain mb-4" />

              <h2 className="text-lg font-semibold line-clamp-2">{item.title}</h2>

              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.description}</p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-green-600">${item.price}</span>

                <span className="text-yellow-500 text-sm">⭐ {item.rating.rate}</span>
              </div>

              <button className="w-full mt-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              page === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
            }`}
          >
            Previous
          </button>

          <span className="flex items-center text-gray-700 font-medium">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              page === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pinter'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
