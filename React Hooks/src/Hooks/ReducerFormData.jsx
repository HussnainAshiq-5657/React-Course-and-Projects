import React, { useReducer } from 'react';

function FormData() {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
  const [formData, dispatch] = useReducer(reducer, {
    username: '',
    email: '',
  });
  function handleInput(event) {
    dispatch({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return (
    <>
      <div>
        <form action="">
          <input
            className="outline outline-offset-2 outline-blue-600 rounded-lg mr-5"
            name="username"
            type="text"
            value={formData.username}
            placeholder="Enter Your Name"
            onChange={handleInput}
          />
          <input
            className="outline outline-offset-2 outline-blue-600 rounded-lg"
            name="email"
            type="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleInput}
          />
        </form>
        <p>Username : {formData.username}</p>
        <p>Email : {formData.email}</p>
      </div>
    </>
  );
}

export default FormData;
