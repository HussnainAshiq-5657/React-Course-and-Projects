import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useEffect } from 'react';

const fetchProducts = async ({ pageParam = 1, limit = 5 }) => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch');
  const data = await res.json();
  
  const start = (pageParam - 1) * limit;
  const end = start + limit;
  const pageData = data.slice(start, end);

  return {
    products: pageData,
    nextPage: end < data.length ? pageParam + 1 : undefined,
  };
};

function InfiniteScrollProducts() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfiniteQuery({
      queryKey: ['products'],
      queryFn: fetchProducts,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const observerRef = useRef(null);

  // Infinite scroll with IntersectionObserver
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) return <p className="text-center mt-6">Loading...</p>;
  if (error) return <p className="text-center mt-6">Error fetching data</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.pages?.map((page) =>
          page.products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h3 className="font-semibold text-gray-800 truncate">{product.title}</h3>
              <p className="text-gray-600 font-medium mt-1">${product.price}</p>
            </div>
          ))
        )}
      </div>

      {/* Loader / Sentinel */}
      <div ref={observerRef} className="flex justify-center mt-6">
        {isFetchingNextPage ? (
          <p className="text-gray-700">Loading more products...</p>
        ) : !hasNextPage ? (
          <p className="text-gray-700">No more products</p>
        ) : null}
      </div>
    </div>
  );
}

export default InfiniteScrollProducts;
