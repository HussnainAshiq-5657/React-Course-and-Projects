import React, { useLayoutEffect, useRef } from 'react';

function LayoutChat() {
  const inputBox = useRef(null);
  useLayoutEffect(() => {
    inputBox.current.scrollTop = inputBox.current.scrollHeight;
  }, []);
  return (
    <>
      <div
        ref={inputBox}
        className="h-[150px] border-2 border-gray-300 overflow-y-scroll bg-blue-600 p-10"
      >
        <p>Hello Hussnain How Are You.....</p>
        <p>Hello Testing..........</p>
        <p>Hello How are You......</p>
        <p>Hello,Ali How are You bro.........</p>
        <p>Hello Hussnain How Are You.....</p>
        <p>Hello Testing..........</p> <p>Hello Hussnain How Are You.....</p>
        <p>Hello Testing..........</p>
        <p>Hello How are You......</p>
        <p>Hello,Ali How are You bro.........</p>
        <p>Hello Hussnain How Are You.....</p>
        <p>Hello Testing..........</p>
      </div>
    </>
  );
}

export default LayoutChat;
