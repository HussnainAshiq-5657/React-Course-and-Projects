import React from 'react';
import Order from '../../../assets/Order confirmation.mp4';
import { NavLink } from 'react-router';

function CompleteOrder() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  xl:max-w-2xl p-6 sm:p-8  md:p-10  text-center">
        <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  text-green-600  mb-4 sm:mb-6">
          🎉 Order Placed Successfully!
        </h1>

        <div className="w-full mb-4 sm:mb-6">
          <video
            src={Order}
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-h-40 sm:max-h-56 md:max-h-64 lg:max-h-72 object-contain  rounded-xl"
          />
        </div>

        <p className="text-gray-600  text-sm sm:text-base md:text-lg mb-6">
          Thank you for shopping with us. Your order has been confirmed.
        </p>

        <NavLink
          to="/"
          className=" inline-block w-full  sm:w-auto  bg-red-500 text-white  px-6  py-3 rounded-xl  hover:bg-red-600 transition duration-300 transform hover:scale-105"
        >
          Continue Shopping
        </NavLink>
      </div>
    </div>
  );
}

export default CompleteOrder;
