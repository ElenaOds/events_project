import { createSlice } from '@reduxjs/toolkit';
import { getEvents } from './eventOperations';

const eventSlice = createSlice({
    name: "events",
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: builder =>
        builder
      .addCase(getEvents.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.data = [...action.payload.events];
        state.isLoading = false;
      })
      .addCase(getEvents.rejected, (state, _) => {
        state.isLoading = false;
      })
    
});

export default eventSlice;