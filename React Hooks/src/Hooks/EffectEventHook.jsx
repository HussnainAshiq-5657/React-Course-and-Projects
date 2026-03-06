import { useEffect, useEffectEvent, useState } from 'react';

function EffectEventHook() {
  const [count, setCount] = useState(0);
  const onTick = useEffectEvent(() => {
    console.log('Count : ', { count });
    setCount((prev) => prev + 1);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, 1000);

    return () => clearInterval(id);
  }, [count]);

  return (
    <div>
      <h1 className="font-bold text-3xl text-red-500">Count : {count}</h1>
    </div>
  );
}

export default EffectEventHook;
