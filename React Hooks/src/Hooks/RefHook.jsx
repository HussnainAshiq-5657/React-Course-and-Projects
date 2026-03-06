import React from 'react';
import { useRef } from 'react';
import ForwardRef from './ForwardRef';
function RefHook() {
  const inputRef = useRef('');
  const inputsRef = useRef('');

  function handleClick() {
    console.log('Hello');
    inputRef.current.focus();
    inputRef.current.value = 'Muhammad Hussnain';
  }
  function handleClicks() {
    console.log('Hello');
    inputsRef.current.value = '4000';
  }
  return (
    <>
      <div>
        <input type="text" ref={inputRef} placeholder="Enter Your Name" />
        <button onClick={handleClick}>Click Me</button>
      </div>
      <ForwardRef ref={inputsRef} click={handleClicks} />
    </>
  );
}

export default RefHook;
