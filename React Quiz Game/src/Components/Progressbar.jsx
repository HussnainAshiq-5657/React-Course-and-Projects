import React from 'react';

function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full mb-4">
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 text-xs text-white flex items-center justify-center font-semibold transition-all duration-300"
          style={{ width: `${progress}%` }}
        >
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
