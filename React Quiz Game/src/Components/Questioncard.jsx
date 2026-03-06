import React from 'react';

function QuestionCard({ question, options, onSelect }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h4 className="text-xl font-semibold mb-4">{question}</h4>

      <div className="space-y-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(opt)}
            className="w-full px-4 py-3 border border-blue-500 text-blue-600 font-medium rounded-lg
                       hover:bg-blue-500 hover:text-white transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
