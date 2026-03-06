import React from 'react';

function Timer({ time }) {
  return (
    <div className="w-full mb-4 px-4 py-3 bg-blue-100 text-blue-800 text-center font-bold rounded-lg shadow">
      ⏳ Time Left: {time}s
    </div>
  );
}

export default Timer;
