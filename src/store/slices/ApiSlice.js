import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API;

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({latitude,longitude}, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json`,
                {
                    params: {
                        q: `${latitude},${longitude}`,
                        key: apiKey,
                        units: 'metric',
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch weather data.');
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherData: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearWeather: (state) => {
            state.weatherData = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export const { clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
