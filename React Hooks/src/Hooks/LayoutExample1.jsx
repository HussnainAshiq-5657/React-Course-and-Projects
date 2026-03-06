import { useLayoutEffect, useRef, useState } from 'react';

function LayoutExample() {
  const inputBox = useRef(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    setHeight(inputBox.current.clientHeight);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div ref={inputBox} className="w-1/4 bg-blue-500 text-white font-bold text-center p-10">
          <h1>Hello World,!!!!!! Measure Me....</h1>
        </div>
        <p className="text-2xl text-red-500">Height:{height}</p>
      </div>
    </>
  );
}

export default LayoutExample;
