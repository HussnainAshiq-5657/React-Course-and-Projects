import React from 'react';
import useForm from '../CustomHooks/useForm';
function FormTest() {
  const initialValues = {
    password: '',
    email: '',
  };

  function onSubmit(values) {
    console.log('Form Data : ', values);
  }

  const { values, handleValues, handleSubmit, resetForm } = useForm(initialValues, onSubmit);

  return (
    <>
      <div className="m-5">
        <h1 className="text-3xl mb-3 font-bold">User Form Data</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={values.password}
            className="outline-2 outline-blue-500 px-2 py-1 block mb-2 rounded-xl"
            type="current-password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleValues}
          />
          <input
            value={values.email}
            name="email"
            className="outline-2 outline-blue-500 px-2 py-1 block mb-2 rounded-xl"
            type="email"
            placeholder="Enter Your Email"
            onChange={handleValues}
          />
          <button
            type="submit"
            className="bg-red-500 mr-3 px-4 py-2 rounded font-bold text-white cursor-pointer"
          >
            Submit
          </button>
          <button
            onClick={resetForm}
            className="bg-green-500 px-4 py-2 rounded font-bold text-white cursor-pointer"
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default FormTest;
