import { useRef, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

async function fetchProducts({ pageParam = 1 }) {
  const limit = 5;

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const start = (pageParam - 1) * limit;
  const end = start + limit;

  const productPaginated = products.slice(start, end);

  return {
    products: productPaginated,
    nextPage: end < products.length ? pageParam + 1 : undefined
  };
}

function ScrollPagination() {
  const observerRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

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
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.pages?.map((page) =>
          page.products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-semibold truncate">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))
        )}
      </div>

      <div ref={observerRef} className="flex justify-center mt-6">
        {isFetchingNextPage && <p>Loading more products...</p>}
        {!hasNextPage && <p>No more products</p>}
      </div>

    </div>
  );
}

export default ScrollPagination;