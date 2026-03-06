import React from 'react';
import { useFormStatus } from 'react-dom';

function Form() {
  const { pending, data } = useFormStatus();
  console.log(pending);

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        name="username"
        className="block outline mb-3"
      />
      <input type="password" placeholder="Enter Your Password" className="block outline mb-3" />
      <input type="email" placeholder="Enter Your Email" className="block outline mb-3" />
      <button disabled={pending} className="bg-black px-4 py-2 rounded-2xl text-white">
        {pending ? 'Submitting....' : 'Submit'}
      </button>
      <p>{data ? `Requesting ${data.get('username')}....` : ''}</p>
    </>
  );
}

export default Form;
