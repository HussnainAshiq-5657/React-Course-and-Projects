import React from 'react';

function PostList({ data }) {
  return (
    <>
      <ul className="mt-10 m-12">
        {data.map((items) => (
          <li className="text-blue-600 font-bold" key={items.id}>
            {items.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostList;
