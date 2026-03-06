import React, { useState, useEffect } from 'react';

function ReverseClock() {
  const [days, setDays] = useState(5);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;

        setMinutes((prevMinutes) => {
          if (prevMinutes > 0) {
            setSeconds(59);
            return prevMinutes - 1;
          }

          setHours((prevHours) => {
            if (prevHours > 0) {
              setMinutes(59);
              setSeconds(59);
              return prevHours - 1;
            }

            setDays((prevDays) => {
              if (prevDays > 0) {
                setHours(23);
                setMinutes(59);
                setSeconds(59);
                return prevDays - 1;
              }
              return 0;
            });

            return 0;
          });

          return 0;
        });

        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div
      className="flex md:flex-row flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 md:gap-8 mb-4"
    >
      <div className="bg-white p-4 rounded-full shadow-xl text-center size-22  ">
        <h1 className="text-2xl font-bold">{format(days)}</h1>
        <p className="text-sm mt-2 text-gray-400">Days</p>
      </div>

      <div className="bg-white p-4 rounded-full shadow-xl text-center size-22">
        <h1 className="text-2xl font-bold">{format(hours)}</h1>
        <p className="text-sm mt-2 text-gray-400">Hours</p>
      </div>
      <div className="bg-white p-4 rounded-full shadow-xl text-center size-22">
        <h1 className="text-2xl font-bold">{format(minutes)}</h1>
        <p className="text-sm mt-2 text-gray-400">Minutes</p>
      </div>
      <div className="bg-white p-4 rounded-full shadow-xl text-center size-22">
        <h1 className="text-2xl font-bold">{format(seconds)}</h1>
        <p className="text-sm mt-2 text-gray-400">Seconds</p>
      </div>
    </div>
  );
}

export default ReverseClock;
