import React, { Activity, useState } from 'react';
import HomeComponent from './HomeComponent';
import FormComponent from './FormComponent';
function ActivityFeature() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setToggle(true)}
          className="bg-blue-600 px-4 py-2 rounded-2xl cursor-pointer text-white font-bold"
        >
          Form Component
        </button>
        <button
          onClick={() => setToggle(false)}
          className="bg-green-600 px-4 py-2 rounded-2xl cursor-pointer text-white font-bold"
        >
          Home Component
        </button>
        <Activity mode={toggle == true ? 'visible' : 'hidden'}>
          <FormComponent />
        </Activity>
        <Activity mode={toggle == false ? 'visible' : 'hidden'}>
          <HomeComponent />
        </Activity>
      </div>
    </>
  );
}

export default ActivityFeature;
