import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
function Common({ category, browse }) {
  return (
    <>
      <div className="flex justify-between items-end gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-red-500 font-medium">{category}</p>
          <h1 className="text-2xl md:text-4xl font-semibold">{browse}</h1>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-300 p-2 rounded-full">
            <FaArrowLeft className="cursor-pointer" />
          </div>
          <div className="bg-gray-300 p-2 rounded-full">
            <FaArrowRight className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Common;
