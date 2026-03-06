import { useActionState, useState } from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
function AddUser() {
  const [data, action, pending] = useActionState(handleSubmit);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const Navigate = useNavigate();
  function handleSubmit(previousData, formData) {
    const name = formData.get('username');
    const age = formData.get('age');
    const email = formData.get('email');

    if (!name || !age || !email) {
      return { error: 'All fields are required', name, age, email };
    }

    if (name.length > 10) {
      return { errorName: 'Name length must be 10 or less', name, age, email };
    }

    if (age < 18) {
      return { errorAge: 'Age must be 18 or above', name, age, email };
    }

    if (!email.trim()) {
      return { errorEmail: 'Please fill the email', name, age, email };
    }

    return { message: 'Form Submitted Successfully!!!!!', name, age, email };
  }
  useEffect(() => {
    if (data?.message) {
      addUser();
    }
  });

  async function addUser() {
    const url = 'http://localhost:3000/posts';
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name, age, email }),
    });
    const data = await response.json();
    if (data) {
      console.log('User Added');
      Navigate('/');
    }
  }
  return (
    <>
      <h1 className="text-center mt-8 text-3xl text-blue-400 font-bold">Add User Page</h1>
      <form
        action={action}
        className="flex flex-col gap-2 items-center  mt-10 border-2 border-gray-100 w-1/2 mx-auto p-5 rounded-2xl shadow-lg"
      >
        <label className="block text-lg  text-blue-500 font-bold ">Name</label>
        <input
          onChange={(event) => setName(event.target.value)}
          className=" outline outline-blue-300 rounded-lg px-4 py-2 w-1/2"
          type="text"
          placeholder="Enter Your Name"
          name="username"
        />
        {data?.errorName && <span className="text-red-500 font-bold">{data?.errorName}</span>}
        <label className="block text-lg  text-blue-500 font-bold ">Age</label>
        <input
          onChange={(event) => setAge(event.target.value)}
          className="outline outline-blue-300 rounded-lg px-4 py-2 w-1/2"
          type="number"
          placeholder="Enter Your Age"
          name="age"
        />
        {data?.errorAge && <span className="text-red-500 font-bold">{data?.errorAge}</span>}
        <label className="block text-lg  text-blue-500 font-bold ">Email</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          className="mb-3 outline outline-blue-300 rounded-lg px-4 py-2 w-1/2"
          type="email"
          placeholder="Enter Your Email"
          name="email"
        />
        {data?.errorEmail && <span className="text-red-500 font-bold">{data?.errorEmail}</span>}
        <button
          type="submit"
          className="text-white cursor-pointer bg-blue-500 font-semibold px-4 py-2 rounded-2xl hover:bg-blue-700 transition duration-300 delay-200 ease-in-out"
        >
          Add User
        </button>
        {data?.error && <span className="text-red-700 font-bold my-1">{data?.error}</span>}
        {data?.message && <span className="text-green-700 font-bold my-1">{data?.message}</span>}
      </form>
    </>
  );
}

export default AddUser;
