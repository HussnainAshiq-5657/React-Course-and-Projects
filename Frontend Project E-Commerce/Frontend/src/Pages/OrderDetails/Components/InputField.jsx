import React from 'react';
function InputField({ label, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        className="w-full bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
}
export default InputField;
