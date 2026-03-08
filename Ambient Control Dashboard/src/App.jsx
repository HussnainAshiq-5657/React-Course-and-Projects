import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from './store/deviceSlice';
import Sidebar from './components/Sidebar.jsx';
import DeviceCard from './components/DeviceCard.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.devices);
  const status = useSelector((state) => state.devices.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDevices());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-blue-400">Loading...</div>
      </div>
    );
  }

  const devicesByRoom = devices.reduce((acc, device) => {
    if (!acc[device.room]) acc[device.room] = [];
    acc[device.room].push(device);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar />
      <main className="ml-20 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Room Controller Dashboard</h1>
        <p className="text-gray-400 mb-8">Manage your Limi modules</p>

        {Object.entries(devicesByRoom).map(([room, roomDevices]) => (
          <div key={room} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">{room}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {roomDevices.map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
          </div>
        ))}
      </main>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
