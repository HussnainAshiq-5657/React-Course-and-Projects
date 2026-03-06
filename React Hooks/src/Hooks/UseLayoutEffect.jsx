import React, { useEffect, useLayoutEffect } from 'react';

function UseLayoutEffect() {
  useEffect(() => {
    console.log('This Hook is UseEffect Hook!!!....');
  });
  useLayoutEffect(() => {
    console.log('This Hook is UseLayoutEffect!!!!....');
  });
  return (
    <>
      <div>
        <h1>Muhammad Hussnain Ashiq</h1>
      </div>
    </>
  );
}

export default UseLayoutEffect;
