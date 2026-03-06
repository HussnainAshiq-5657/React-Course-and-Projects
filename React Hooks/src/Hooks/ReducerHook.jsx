import React, { useReducer } from 'react';

function ReducerHook() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count + 1 };
      case 'reset':
        return { count: (state.count = 0) };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div>
        <h1 className="text-red-500 text-2xl font-semibold">Count:{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
          className="bg-blue-500 px-4 py-2 rounded-2xl text-white font-bold cursor-pointer"
        >
          Increament
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
          className="bg-green-500 px-4 py-2 rounded-2xl text-white font-bold cursor-pointer"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
          className="bg-red-500 px-4 py-2 rounded-2xl text-white font-bold cursor-pointer"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default ReducerHook;
