import { useState, useEffect } from 'react';

function useTimer(seconds) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return { time, reset: () => setTime(seconds) };
}
export default useTimer;
