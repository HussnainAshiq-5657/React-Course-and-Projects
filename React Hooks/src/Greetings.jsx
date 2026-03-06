import React from 'react';

function Greetings({ name }) {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Hello {name}!</h1>
      </div>
    </>
  );
}

export default Greetings;
