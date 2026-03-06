import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

function EditUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    const url = 'http://localhost:3000/posts';
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  }
  async function editUser(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/posts';
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, age, email }),
    });
    const data = await response.json();
    console.log(data);
    if (data) {
      console.log('Data Updated SuccessFully');
      navigate('/');
    }
  }
  return (
    <>
      <h1 className="text-center mt-8 text-3xl text-red-400 font-bold">Edit User Details</h1>
      <form
        action=""
        className="flex flex-col gap-2 items-center  mt-10 border-2 border-gray-100 w-1/2 mx-auto p-5 rounded-2xl shadow-lg"
      >
        <label className="block text-lg  text-red-500 font-bold ">Name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className=" outline outline-red-300 rounded-lg px-4 py-2 w-1/2"
          type="text"
          placeholder="Enter Your Name"
        />
        <label className="block text-lg  text-red-500 font-bold ">Age</label>
        <input
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="outline outline-red-300 rounded-lg px-4 py-2 w-1/2"
          type="number"
          placeholder="Enter Your Age"
        />
        <label className="block text-lg  text-red-500 font-bold ">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mb-3 outline outline-red-300 rounded-lg px-4 py-2 w-1/2"
          type="email"
          placeholder="Enter Your Email"
        />
        <button
          onClick={editUser}
          className="text-white cursor-pointer bg-red-500 font-semibold px-4 py-2 rounded-2xl hover:bg-red-700 transition duration-300 delay-200 ease-in-out"
        >
          Edit User
        </button>
      </form>
    </>
  );
}

export default EditUser;
