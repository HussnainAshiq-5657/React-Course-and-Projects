import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
function FetchDataQuery() {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ['Brand'],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      return products;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });
      const products = await response.json();
      return products;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Brand'] });
    },
  });

  if (isLoading) {
    return <p className="text-center  text-red-500 text-xl mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col justify-between"
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />

              <h2 className="text-sm font-semibold mt-4 line-clamp-2">{product.title}</h2>

              <p className="text-gray-500 text-sm mt-1">{product.category}</p>
            </div>
 
            <div>
              <button
                className="w-full my-2 text-white bg-blue-500 px-4 py-2 font-bold rounded-2xl"
                onClick={() => mutation.mutate(product.id)}
              >
                Delete
              </button>

              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-green-600">${product.price}</span>

                <span className="text-yellow-500 text-sm">⭐ {product.rating.rate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FetchDataQuery;
