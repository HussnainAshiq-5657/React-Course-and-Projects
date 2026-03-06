import { useLayoutEffect, useRef } from 'react';

function LayoutExamples() {
  const inputBox = useRef(null);

  useLayoutEffect(() => {
    let element = inputBox.current;
    const width = element.offsetWidth;
    element.style.transform = `translateX(${width}px)`;
  }, []);
  return (
    <>
      <div
        ref={inputBox}
        className="w-1/4 bg-blue-500 text-white font-bold text-center p-10 transition duration-1200 delay-200"
      >
        <h1>Hello World,!!!!!! Measure Me....</h1>
      </div>
    </>
  );
}

export default LayoutExamples;
