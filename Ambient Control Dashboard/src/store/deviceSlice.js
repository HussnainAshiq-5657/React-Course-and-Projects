import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDevices = createAsyncThunk('devices/fetchDevices', async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data.devices;
});

const initialState = {
  devices: [],
  globalPower: true,
  status: 'idle',
  error: null,
};

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    toggleDevice: (state, action) => {
      const device = state.devices.find((d) => d.id === action.payload);
      if (device) {
        device.status = device.status === 'active' ? 'inactive' : 'active';
        if (device.status === 'inactive') {
          device.brightness = 0;
        }
      }
    },
    updateBrightness: (state, action) => {
      const { id, brightness } = action.payload;
      const device = state.devices.find((d) => d.id === id);
      if (device && device.status === 'active') {
        device.brightness = brightness;
      }
    },
    toggleGlobalPower: (state) => {
      state.globalPower = !state.globalPower;
      state.devices.forEach((device) => {
        if (state.globalPower) {
          device.status = 'active';
          device.brightness = device.brightness || 50;
        } else {
          device.status = 'inactive';
          device.brightness = 0;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.devices = action.payload;
      })
      .addCase(fetchDevices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleDevice, updateBrightness, toggleGlobalPower } = deviceSlice.actions;
export default deviceSlice.reducer;
