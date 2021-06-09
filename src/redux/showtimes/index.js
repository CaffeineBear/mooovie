import { createSlice } from "@reduxjs/toolkit";
import { getShowTimes } from './thunk';

const showtimesSlice = createSlice({
  name: 'showtimes',
  initialState: {
    schedules: []
  },
  extraReducers: {
    [getShowTimes.fulfilled] : ( state, action ) => {
      state.schedules = action.payload;
    },
    [getShowTimes.rejected] : ( state, action ) => {
      console.log('error retrieving showtimes data');
    },
  },
});

export {
  getShowTimes
};

export default showtimesSlice.reducer;
