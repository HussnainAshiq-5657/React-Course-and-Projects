import React from 'react';

function FormComponent() {
  return (
    <>
      <form action="">
        <input
          className=" outline-3 outline-blue-600 block mb-4 px-2 "
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          className=" outline-3 outline-blue-600 block mb-4 px-2 "
          type="email"
          placeholder="Enter Your Email"
        />
      </form>
    </>
  );
}

export default FormComponent;
