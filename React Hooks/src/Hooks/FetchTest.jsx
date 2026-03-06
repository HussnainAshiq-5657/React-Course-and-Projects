import React from 'react';
import useFetch from '../CustomHooks/useFetch';
function FetchTest() {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users');
  if (loading) return <h2 className="text-red-500 text-3xl">Loading!!!!.........</h2>;
  if (error) return <h2 className="text-red-500 text-3xl">Error Occured</h2>;
  return (
    <>
      <div>
        {
          <ul>
            {data.map((users) => (
              <li className="text-red-500 font-bold" key={users.id}>
                {users.name}
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
}

export default FetchTest;
