import React from 'react';
import useGreeting from '../CustomHooks/useToggle';

function ToggleTest() {
  const [isOpen, toggleOpen] = useGreeting();
  const [isOpens, toggleOpens] = useGreeting();
  return (
    <>
      <div>
        <button className="bg-blue-500 px-4 py-1 rounded-2xl" onClick={toggleOpen}>
          New User
        </button>
        <button className="bg-blue-500 px-4 py-1 rounded-2xl" onClick={toggleOpens}>
          Old User
        </button>
        {isOpen && <p>Hello I am a New User......</p>}
        {isOpens && <p>Hello I am a Old User......</p>}
      </div>
    </>
  );
}

export default ToggleTest;
