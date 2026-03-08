import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGlobalPower } from '../store/deviceSlice.js';
import { Home, Power, Settings, Bell } from 'lucide-react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const globalPower = useSelector((state) => state.devices.globalPower);

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-8">
      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-8">
        <span className="text-white font-bold text-xl">L</span>
      </div>

      <div className="flex-1 flex flex-col items-center space-y-6">
        <button className="p-3 rounded-xl bg-blue-600 text-white">
          <Home size={24} />
        </button>
        <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-700 hover:text-white">
          <Settings size={24} />
        </button>
        <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-700 hover:text-white">
          <Bell size={24} />
        </button>
      </div>

      <button
        onClick={() => dispatch(toggleGlobalPower())}
        className={`p-3 rounded-xl ${
          globalPower ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'
        }`}
      >
        <Power size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
