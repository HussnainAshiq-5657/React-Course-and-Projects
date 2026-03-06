import React from 'react';
import ColumnProducts from './ColumnProducts';

function Products() {
  return (
    <>
      <div>
        <ColumnProducts className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 sm:mt-8 md:mt-10" />
      </div>
    </>
  );
}

export default Products;
