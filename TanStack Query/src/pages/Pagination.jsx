// import { useInfiniteQuery } from '@tanstack/react-query';

// function Pagination() {
//   const fetchProducts = async ({ pageParam = 1 }) => {
//     const limit = 5;

//     const res = await fetch(`https://fakestoreapi.com/products?limit=${pageParam * limit}`);

//     return res.json();
//   };
//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
//     queryKey: ['products'],
//     queryFn: fetchProducts,

//     getNextPageParam: (lastPage, pages) => {
//       if (pages.length < 4) {
//         return pages.length + 1;
//       }
//       return undefined;
//     },
//   });

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//         {data?.pages.map((page, pageIndex) => (
//           <div key={pageIndex}>
//             {page.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Product Image */}
//                 <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />

//                 {/* Product Info */}
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
//                   <p className="mt-2 text-gray-600 font-medium">${product.price}</p>

//                   {/* Optional Button */}
//                   <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {hasNextPage && (
//         <button
//           className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
//           onClick={fetchNextPage}
//         >
//           {isFetchingNextPage ? 'Loading...' : 'Load More'}
//         </button>
//       )}
//     </div>
//   );
// }

// export default Pagination;

// import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';

// const fetchProducts = async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   return res.json();
// };

// function Pagination() {
//   const [page, setPage] = useState(1);
//   const limit = 5;

//   const { data, isLoading } = useQuery({
//     queryKey: ['products'],
//     queryFn: fetchProducts,
//   });

//   if (isLoading) return <h2>Loading...</h2>;

//   const start = (page - 1) * limit;
//   const end = start + limit;

//   const paginatedProducts = data.slice(start, end);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6 mt-10">
//         {paginatedProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
//           >
//             {product.image && (
//               <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
//             )}

//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
//               <p className="mt-2 text-gray-600 font-medium">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center space-x-4">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage(page - 1)}
//           className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//             page === 1
//               ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               : 'bg-blue-600 text-white hover:bg-blue-700'
//           }`}
//         >
//           Back
//         </button>

//         <button
//           disabled={end >= data.length}
//           onClick={() => setPage(page + 1)}
//           className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//             end >= data.length
//               ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               : 'bg-blue-600 text-white hover:bg-blue-700'
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Pagination;
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json(); 
};

function Pagination() {
  const [page, setPage] = useState(1);
  const limit = 5; 

  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, 
  });

  if (isLoading) return <p className="text-center mt-6">Loading...</p>;
  if (error) return <p className="text-center mt-6">Error fetching data</p>;

  // client-side pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = data.slice(start, end);

  const totalPages = Math.ceil(data.length / limit);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedProducts.map((product) => (
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
        ))}
      </div>

   
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            page === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
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
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;





