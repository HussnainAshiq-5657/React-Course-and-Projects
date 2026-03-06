function ForwardRef({ ref, click }) {
  return (
    <>
      <div>
        <input type="text" ref={ref} placeholder="Enter Your Name" />
        <button onClick={click}>Click Me</button>
      </div>
    </>
  );
}

export default ForwardRef;
