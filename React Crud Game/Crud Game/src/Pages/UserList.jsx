import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function UserList() {
  const navigate = useNavigate();
  const [UserData, setUserData] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    const url = 'http://localhost:3000/posts';
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  }
  async function DeleteUser(id) {
    const url = 'http://localhost:3000/posts';
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    if (data) {
      console.log('Deleted SuccessFully');
      getUser();
    }
  }

  function EditUser(id) {
    navigate(`/editUser/${id}`);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 p-5 border rounded-xl border-gray-400 w-1/2 mx-auto shadow-xl">
        <h1 className="text-3xl font-semibold p-2 border-b border-gray-300 py-5">
          Fetching Data of Users..........
        </h1>
        <table className="w-full border border-gray-300 mt-5">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-lg font-semibold text-gray-700 border-b">
                Name
              </th>
              <th className="px-4 py-2 text-left text-lg font-semibold text-gray-700 border-b">
                Age
              </th>
              <th className="px-4 py-2 text-left text-lg font-semibold text-gray-700 border-b">
                Email
              </th>
              <th className="px-4 py-2 text-left text-lg font-semibold text-gray-700 border-b">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {UserData.map((item) => (
              <tr key={item.id} className="hover:bg-blue-200 transition cursor-pointer">
                <td className="px-4 py-2 font-semibold text-sm text-gray-800 border-b">
                  {item.name}
                </td>
                <td className="px-4 py-2 font-semibold text-sm text-gray-800 border-b">
                  {item.age}
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-gray-800 border-b">
                  {item.email}
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-gray-800 border-b">
                  <button
                    onClick={() => DeleteUser(item.id)}
                    className="text-white font-bold bg-blue-600 rounded-2xl cursor-pointer px-4 py-2 mr-2 "
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => EditUser(item.id)}
                    className="text-white font-bold cursor-pointer bg-red-600 rounded-2xl px-4 py-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
