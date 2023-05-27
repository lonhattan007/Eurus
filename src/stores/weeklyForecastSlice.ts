import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { WeatherForecast } from '@models/WeatherForecast.interface';

interface DailyForecastState {
  value: WeatherForecast[];
  maxTemp: number;
  minTemp: number;
}

const initialState: DailyForecastState = {
  value: [],
  maxTemp: 45,
  minTemp: 0,
};

const dailyForecastSlice = createSlice({
  name: 'dailyForecast',
  initialState,
  reducers: {
    updateDailyForecast: (state, action) => {
      state.value = action.payload;

      const maxTemps = state.value.map((item) => item.maxTempC ?? 0);
      state.maxTemp = Math.max(...maxTemps);

      const minTemps = state.value.map((item) => item.minTempC ?? 0);
      state.minTemp = Math.min(...minTemps);
    },
  },
});

export const { updateDailyForecast } = dailyForecastSlice.actions;

export const selectWeeklyForecast = (state: RootState) =>
  state.dailyForecast.value;
export const selectWeeklyForecastMaxTemp = (state: RootState) =>
  state.dailyForecast.maxTemp;
export const selectWeeklyForecastMinTemp = (state: RootState) =>
  state.dailyForecast.minTemp;

export default dailyForecastSlice.reducer;
