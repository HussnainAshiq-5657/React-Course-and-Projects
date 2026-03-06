import { useState } from 'react';

function useGreeting(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const Toggle = () => {
    setValue((prev) => !prev);
  };
  return [value, Toggle];
}
export default useGreeting;
