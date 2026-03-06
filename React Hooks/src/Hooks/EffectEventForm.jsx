import React, { useEffect, useEffectEvent, useState } from 'react';

function EffectEventForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const onTick = useEffectEvent(() => {
    console.log('FormData :  ', formData);
  });
  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div>
        <input
          className=" outline-3 outline-blue-600 block mb-4 px-2 "
          type="text"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
        />
        <input
          className=" outline-3 outline-blue-600 block mb-4 px-2 "
          type="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
      </div>
    </>
  );
}

export default EffectEventForm;
