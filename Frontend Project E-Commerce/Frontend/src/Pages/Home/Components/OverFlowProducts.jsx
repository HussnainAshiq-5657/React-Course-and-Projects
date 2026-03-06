import React from 'react';
import Common from '../../../Components/common/Common.jsx';
import Products from './Products.jsx';
import ColumnProducts from './ColumnProducts.jsx';
function SomeProducts() {
  return (
    <>
      <div>
        <ColumnProducts
          className="flex gap-8 overflow-x-auto mt-10 font-poppins"
          cardWidth="w-64 sm:w-60 md:w-64 lg:w-68"
        />
      </div>
    </>
  );
}

export default SomeProducts;
