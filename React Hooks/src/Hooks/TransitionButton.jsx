import React, { useTransition } from 'react';

function TransitionButton() {
  const [pending, startTransition] = useTransition();
  function handleButton() {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  }
  return (
    <>
      <div>
        <button
          onClick={handleButton}
          disabled={pending}
          className="bg-red-500 px-5 py-1 rounded-3xl text-white"
        >
          {pending ? 'Submitting..' : 'Submit'}
        </button>
      </div>
    </>
  );
}

export default TransitionButton;
