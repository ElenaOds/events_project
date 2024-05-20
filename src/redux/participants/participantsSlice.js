import { createSlice } from '@reduxjs/toolkit';
import { getParticipants, getRegistration } from './participantsOperations';

const participantSlice = createSlice({
    name: "participants",
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: builder =>
        builder
      .addCase(getParticipants.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getParticipants.fulfilled, (state, action) => {
        state.list = [...action.payload.participants];
     
        state.isLoading = false;
      })
      .addCase(getParticipants.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(getRegistration.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getRegistration.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getRegistration.rejected, (state, _) => {
        state.isLoading = false;
      })
    
});

export default participantSlice;