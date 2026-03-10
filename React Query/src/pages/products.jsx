import { useQuery } from '@tanstack/react-query';

function Products() {
  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const product = await response.json();
    return product;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchProducts,
    staleTime: 5000,
  });
  if (isLoading) {
    return (
      <h1 className="text-center text-xl font-bold my-2">Please Wait data is Loading!........</h1>
    );
  }
  if (error) {
    return (
      <p className="text-center text-red-500 text-xl font-bold my-2">
        Error Occur `${error.message}`
      </p>
    );
  }
  return (
    <>
      <div className="max-w-7xl mx-auto p-6 my-2">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((item) => (
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
      </div>
    </>
  );
}

export default Products;
