import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDevice, updateBrightness } from '../store/deviceSlice';
import useDeviceStatus from '../hooks/useDeviceStatus';
import { toast } from 'react-toastify';
import { Sun, Wind, Layout, Lamp, Speaker, Thermometer, Zap } from 'lucide-react';

const iconMap = {
  Sun: Sun,
  Wind: Wind,
  Layout: Layout,
  Lamp: Lamp,
  LampFloor: Lamp,
  Speaker: Speaker,
};

const DeviceCard = ({ device }) => {
  const dispatch = useDispatch();
  const { sensorData } = useDeviceStatus(device.id);
  const IconComponent = iconMap[device.icon] || Sun;

  const handleToggle = () => {
    dispatch(toggleDevice(device.id));
    toast.success(`${device.name} turned ${device.status === 'active' ? 'off' : 'on'}`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleBrightnessChange = (e) => {
    dispatch(
      updateBrightness({
        id: device.id,
        brightness: parseInt(e.target.value),
      })
    );
  };

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className={`p-2 rounded-lg ${
              device.status === 'active' ? 'bg-blue-600/20' : 'bg-gray-700'
            }`}
          >
            <IconComponent
              size={24}
              className={device.status === 'active' ? 'text-blue-400' : 'text-gray-400'}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{device.name}</h3>
            <p className="text-sm text-gray-400">{device.room}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${
              device.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
            }`}
          />
          <span className="text-sm text-gray-400">
            {device.status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-gray-400">Power</span>
        <button
          onClick={handleToggle}
          className={`toggle-switch ${device.status === 'active' ? 'active' : 'inactive'}`}
        >
          <span
            className={`toggle-switch-handle ${device.status === 'active' ? 'active' : 'inactive'}`}
          />
        </button>
      </div>

      {(device.type === 'light' || device.type === 'ac') && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              {device.type === 'light' ? 'Brightness' : 'Intensity'}
            </span>
            <span className="text-sm font-medium text-blue-400">{device.brightness}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={device.brightness}
            onChange={handleBrightnessChange}
            disabled={device.status !== 'active'}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${device.brightness}%, #374151 ${device.brightness}%, #374151 100%)`,
            }}
          />
        </div>
      )}

      {device.status === 'active' && (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <Thermometer size={16} className="text-orange-400" />
            <span className="text-sm text-gray-300">
              {sensorData.temperature || device.temperature}°C
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-sm text-gray-300">
              {sensorData.powerUsage || device.powerUsage}W
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceCard;
