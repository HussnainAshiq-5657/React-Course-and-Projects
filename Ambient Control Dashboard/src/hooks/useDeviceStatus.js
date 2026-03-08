import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useDeviceStatus = (deviceId) => {
  const [sensorData, setSensorData] = useState({
    temperature: null,
    powerUsage: null,
  });

  const device = useSelector((state) => state.devices.devices.find((d) => d.id === deviceId));

  useEffect(() => {
    const interval = setInterval(() => {
      if (device && device.status === 'active') {
        const tempVariation = (Math.random() * 2 - 1).toFixed(1);
        const powerVariation = Math.floor(Math.random() * 10) - 5;

        setSensorData({
          temperature: (device.temperature + parseFloat(tempVariation)).toFixed(1),
          powerUsage: Math.max(0, device.powerUsage + powerVariation),
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [device]);

  return { sensorData };
};

export default useDeviceStatus;
